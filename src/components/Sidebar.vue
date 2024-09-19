<script setup>
</script>

<template>
  <aside class="sidebar">
    <!-- 사이드바 메뉴 아이템들 -->
    <nav>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/meet">Meet</a></li>
        <li><a href="/nosh">Nosh</a></li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 250px; /* 사이드바 너비 */
  background-color: #f8f8f8;
  height: calc(100vh - 60px); /* 헤더를 제외한 전체 높이 */
  position: fixed; /* 왼쪽에 고정 */
  top: 60px; /* 헤더 높이만큼 내려옴 */
  left: 0;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  overflow-y: auto; /* 스크롤 가능하게 */
}
</style>
