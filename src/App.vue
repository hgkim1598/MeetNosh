<script setup>
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
</script>

<template>
  <div id="app">
    <Header />
    <div class="layout">
      <Sidebar />
      <main class="content">
        <RouterView />
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

.layout {
  display: flex;
  flex: 1;
}

.content {
  margin-left: 250px;
  padding-top: 60px;
  padding: 16px;
  flex: 1;
  overflow: auto;
}
</style>
