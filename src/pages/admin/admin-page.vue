<script setup lang="ts">
import { ref } from "vue";

const menuItems = ref([
  {
    label: "Панель управления",
    to: "/admin-panel/dashboard",
  },
  { label: "Модераторы", to: "/admin-panel/moderators" },
  { label: "Ученики", to: "/admin-panel/students" },
]);
</script>

<template>
  <div class="admin-page">
    <aside class="admin-sidebar">
      <h2 class="sidebar-title">Админка</h2>
      <nav class="sidebar-menu">
        <ul>
          <li v-for="item in menuItems" :key="item.label">
            <router-link
              :to="item.to"
              class="menu-link"
              active-class="active-link"
            >
              {{ item.label }}
            </router-link>
          </li>
        </ul>
      </nav>
    </aside>

    <main class="admin-content">
      <router-view />
    </main>
  </div>
</template>

<style scoped lang="scss">
$blue-color: $blue-color;
$sidebar-bg: #f8f9fa;
$sidebar-width: 200px;

.admin-page {
  display: flex;
  height: 100vh;
  background-color: #f4f6f9;
}

.admin-sidebar {
  width: $sidebar-width;
  background-color: $sidebar-bg;
  padding: 20px;
  box-sizing: border-box;
  border-right: 2px solid rgba(0, 0, 0, 0.1);

  .sidebar-title {
    font-size: 1.5em;
    color: $blue-color;
    text-align: center;
    margin-bottom: 20px;
  }

  .sidebar-menu {
    ul {
      list-style-type: none;
      padding: 0;
    }

    li {
      margin-bottom: 15px;
    }

    .menu-link {
      color: $blue-color;
      text-decoration: none;
      font-size: 1.3em;
      display: flex;
      align-items: center;
      padding: 10px;
      border-radius: 5px;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: rgba(0, 123, 255, 0.1);
      }

      i {
        margin-right: 10px;
      }

      &.active-link {
        background-color: $blue-color;
        color: white;
      }
    }
  }
}

.admin-content {
  flex: 1;
  padding: 30px;
  overflow-y: auto;
}
</style>
