<script setup>
import Header from './components/Header.vue';
</script>

<template>
  <div id="app">
    <Header /> 
    <div class="main-layout">
      <main class="content">
        <RouterView /> <!-- 라우터 뷰 -->
      </main>
    </div>
  </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

/* 메인 레이아웃 */
.main-layout {
  flex: 1;
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  margin-top: 60px; /* 헤더 높이만큼 추가 */
}

/* 콘텐츠 영역 */
.content {
  padding: 20px;
  background-color: white;
  flex: 1;
  overflow-y: auto; /* 스크롤 가능하게 */
}
</style>
