<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import { useAuthStore } from "../../store/authStore";

const authStore = useAuthStore();

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["toggleDrawer"]);
</script>

<template>
  <transition name="slide">
    <div v-if="props.isOpen" class="drawer-content">
      <button class="close-btn" @click="emit('toggleDrawer')">×</button>
      <nav class="menu">
        <ul>
          <li><a @click="$router.push('/main-page')">Главная</a></li>
          <li><a @click="$router.push('/profile')">Профиль</a></li>
          <li><a @click="$router.push('/matrix')">Matrix</a></li>
          <li><a @click="$router.push('/courses')">Курсы</a></li>
          <li><a @click="$router.push('/settings')">Настройки</a></li>
        </ul>

        <button>
          <a @click="authStore.signOut">Выйти</a>
        </button>
      </nav>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.drawer-content {
  position: fixed;
  top: 0;
  left: 0;
  width: 160px;
  height: 100%;
  background-color: #3b82f6;
  color: white;
  padding: 2rem;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
  overflow-y: auto;
  z-index: 10;
}

.menu h2 {
  margin-bottom: 1.5rem;
  font-size: 24px;
  color: white;
}

.menu ul {
  list-style: none;
  padding: 0;
}

.menu li {
  margin-bottom: 1rem;
}

.menu li a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  cursor: pointer;
  transition: color 0.3s;
}

.menu li a:hover {
  color: #cce0ff;
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

.slide-enter-active {
  transition: transform 1.5s ease;
}
.slide-leave-active {
  transition: transform 1.5s ease;
}
.slide-enter {
  transform: translateX(-100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
