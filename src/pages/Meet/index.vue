<script setup>
import InsertLocation from './components/InsertLocation.vue'
import ModalMap from './components/ModalMap.vue'

</script>

<template>
    <VCard>
        <VCardText>
            <VRow>
                <VCol cols="12">
                    <InsertLocation />
                    <ModalMap />
                    
                </VCol>
            </VRow>
        </VCardText>
    </VCard>
</template>