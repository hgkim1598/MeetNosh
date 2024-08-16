<script setup>
import { VBtn, VTextField } from 'vuetify/components';
import ref from 'vue';

const selectedLocation = ref(null);


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
    </VRow>
    <!--모달창-->
    <div v-if="isModalOpen" class="modal">
        <l-map
            style="height: 400px; width: 80%"
            :zoom="13"
            :center="center"
            @click="onMapClick"
        >
            <l-title-layer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            ></l-title-layer>
            <l-marker :lat-lng="selectedLocation"></l-marker>
            <VBtn @click="confirmLocation">확인</VBtn>
            <VBtn @click="isModalOpen = false">취소</VBtn>
        </l-map>
    </div>
</template>