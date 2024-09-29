<script setup>
import {ref, defineProps, defineEmits} from 'vue';
import {LMap, LTileLayer, LMarker} from "vue3-leaflet";
import "leaflet/dist/leaflet.css"; // 지도에 적용할 스타일

/** 부모 컴포넌트에서 전달되는 props, emit 이벤트 설정 */
const props = defineProps({
    isOpen: Boolean, // 모달이 열려있는지 여부
    center: Array, // 지도의 초기 중심 좌표 배열
});

const emit = defineEmits(['close','confirm']); // ModalMap.vue -> InsertLocation.vue 이벤트 전달

// 사용자가 선택한 위치
const selectedLocation = ref(null);

/** 지도에서 위치 선택 시 위도와 경도 저장 */
const onMapClick = (event) => {
    selectedLocation.value = {lat: event.latlng.lat, lng: event.latlng.lng}; // latlng는 Leaflet에서 클릭한 위치의 좌표 제공
}

/** 확인 버튼을 눌렀을 경우 */
const confirmLocation = () => {
    emit('confirm', selectedLocation.value); // 선택된 위치를 confirm이벤트로 부모 컴포넌트에 전달
    closeModal();
}

/** 모달 닫기 */
const closeModal = () => {
    emit('close'); // close 이벤트를 발생시켜 부모 컴포넌트가 모달을 닫도록 함
}

</script>

<template>
    <div v-if="isOpen" class="Modal"> <!-- isOpen이 true일 때 렌더링됨 -->
        <!-- Leaflet 지도를 렌더링 -->
        <LMap
            style="height: 400px; width: 70%"
            :zoom="13"
            :center="center"
            @click="onMapClick"
        > <!-- center: 지도의 초기 중심 좌표 / zoom: 줌 레벨 설정 -->

        <!-- 타일 이미지 지도에 추가 -->
            <LTileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            ></LTileLayer>
            <LMarker :lat-lng="selectedLocation"></LMarker> <!-- 사용자가 클릭한 위치에 마커를 표시 -->
        </LMap>
        <VBtn @click="confirmLocation">확인</VBtn>
        <VBtn @click="closeModal">취소</VBtn>
    </div>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border: 1px solid #ccc;
  z-index: 1000;
}
</style>