<script setup>
import { VBtn, VTextField } from 'vuetify/components';
import ref from 'vue';
import ModalMap from './ModalMap.vue';

const selectedLocation = ref(null); // 사용자가 선택한 위치
const isModalOpen = ref(false); // 모달 개폐여부
const center = ref([37.5665, 126.9780]); // 지도 초기 중심 좌표, 우리나라 서울로 지정

const handleConfirmLocation = (location) => {
    selectedLocation.value = location; // ModalMap.vue에서 위치를 받아와 selectedLocation에 저장
    isModalOpen.value = false;
}

</script>

<template>
    <VRow>
        <VCol cols="3">
            🗺 멤버 위치 추가하기
        </VCol>
        <VCol cols="3">
            <VBtn
                @click="isModalOpen = true">
                위치 선택하기
            </VBtn>
        </VCol>
        <VCol cols="6">
            <span v-if="selectedLocation">
                {{ selectedLocation.lat }} {{ selectedLocation.lng }}
            </span>
        </VCol>
        <!-- ModalMap 컴포넌트 렌더링 -->
        <ModalMap
            :isOpen="isModalOpen"
            :center="center"
            @close="isModalOpen=false"
            @confirm="handleConfirmLocation"
        /> <!--isOpen과 center를 props로 전달 / @close면 모달 닫기 @comfirm이면 위치 선택-->
    </VRow>
</template>