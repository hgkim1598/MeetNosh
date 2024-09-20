<script setup>
</script>

<template>
  <nav class="nav-bar">
    <ul>
      <li><router-link to="/home">Hoem</router-link></li>
      <li><router-link to="/meet">Meet</router-link></li>
      <li><router-link to="nosh">Nosh</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.nav-bar {
  background-color: #f8f8f8;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
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
