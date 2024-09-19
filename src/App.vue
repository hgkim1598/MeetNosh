<script setup>
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
</script>

<template>
  <div id="app">
    <Header /> <!-- 헤더 -->
    <div class="layout">
      <Sidebar /> <!-- 사이드바 -->
      <main class="content">
        <RouterView /> <!-- 라우터 뷰 -->
      </main>
    </div>
  </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column; /* 헤더와 컨텐츠를 수직으로 정렬 */
  height: 100vh;
}

.layout {
  display: flex;
  flex: 1; /* 나머지 공간을 차지하도록 설정 */
  margin-top: 60px; /* 헤더 높이만큼 추가 */
}

.sidebar {
  width: 250px; /* 사이드바의 너비 */
  background-color: #f8f8f8;
  height: calc(100vh - 60px); /* 헤더를 제외한 전체 높이 */
  position: fixed; /* 왼쪽에 고정 */
  top: 60px; /* 헤더의 높이만큼 내려옴 */
  left: 0;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  overflow-y: auto; /* 사이드바 내용이 넘칠 경우 스크롤 추가 */
}

.content {
  margin-left: 250px; /* 사이드바 너비만큼 추가 */
  padding: 16px;
  flex: 1;
  overflow: auto; /* 스크롤바 추가 */
  height: calc(100vh - 60px); /* 헤더를 제외한 높이 */
  background-color: white; /* 콘텐츠 영역 배경색 */
}
</style>
