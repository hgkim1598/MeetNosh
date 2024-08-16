<script setup>

</script>

<template>
    <aside class="sidebar">
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/meet">Meet</a></li>
                <li><a href="/nosh">Nosh</a></li>
            </ul>
        </nav>
    </aside>
</template>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #f4f4f4;
  padding: 20px;
  position: fixed;
  top: 60px; /* Header 아래에 위치하도록 설정 */
  left: 0;
  bottom: 0;
  overflow-y: auto;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
  z-index: 500;
}

.sidebar nav ul {
  list-style-type: none;
  padding: 0;
}

.sidebar nav ul li {
  margin: 10px 0;
}

.sidebar nav ul li a {
  text-decoration: none;
  color: #333;
}

.sidebar nav ul li a:hover {
  color: #EB4C10; /* 메인 색상으로 호버 효과 */
}
</style>