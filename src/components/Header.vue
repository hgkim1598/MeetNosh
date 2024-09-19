<script setup>
</script>

<template>
  <header class="header">
    <h1><a href="/">MeetNosh</a></h1>
  </header>
</template>

<style scoped>
.header {
  height: 60px; /* 헤더 높이 */
  background-color: #bf94f8; /* 메인 색상 */
  color: white;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed; /* 화면 상단에 고정 */
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000; /* 다른 요소보다 위에 위치 */
}
</style>
