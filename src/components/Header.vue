<script setup>
</script>

<template>
  <header class="header">
    <h1><a href="/">MeetNosh</a></h1>
  
  <nav class="nav-bar">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/meet">Meet</router-link></li>
      <li><router-link to="/nosh">Nosh</router-link></li>
      <li><router-link to="/maps">Mpas</router-link></li>
      <li><router-link to="/mypage">MyPage</router-link></li>
    </ul>
  </nav>
  </header>
</template>

<style scoped>
.header {
  height: 60px;
  background-color: #f2e7ff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.nav-bar {
  padding: 10px 20px;
}

.nav-bar ul{
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-bar ul li{
  margin-right: 20px;
}

.nav-bar ul li a{
  text-decoration: none;
  color: #333;
  font-weight: bold;
}
</style>
