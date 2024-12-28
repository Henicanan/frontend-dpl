<script setup lang="ts">
import Drawer from "../components/nav/drawer.vue";
import { useDrawer } from "../components/nav/utils/useDrawer";

const { isOpen, toggleDrawer } = useDrawer();
</script>

<template>
  <div class="container">
    <button v-if="!isOpen" class="menu-toggle-btn" @click="toggleDrawer">
      <span class="icon">☰</span>
    </button>

    <Drawer :isOpen="isOpen" @toggleDrawer="toggleDrawer" />

    <div :class="['content', { 'content-open': isOpen }]">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: flex-start;
}

.content {
  transition: margin-left 1.5s ease;
  flex-grow: 1;
  padding-left: 60px;
}

.content-open {
  margin-left: 100px;
}

.menu-toggle-btn {
  position: absolute;
  padding: 10px 15px;
  background-color: $blue-color;
  color: white;
  border: none;
  font-size: 16px;
  cursor: pointer;
  z-index: 20;
}

.menu-toggle-btn:hover {
  background-color: $blue-color;
}
</style>
