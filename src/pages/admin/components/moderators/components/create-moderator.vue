<script setup lang="ts">
import angleDownOutline from "../../../../../components/icons/angle-down-outline.vue";
import angleUpOutline from "../../../../../components/icons/angle-up-outline.vue";
import { ref } from "vue";

const inputLogin = ref<string>("");
const inputPassword = ref<string>("");
const isShowForm = ref<boolean>(false);

const createModerator = () => {};
</script>

<template>
  <div class="moderators">
    <div class="add-moderator-wrapper">
      <angleDownOutline v-if="!isShowForm" @click="isShowForm = true" />
      <angleUpOutline v-if="isShowForm" @click="isShowForm = false" />
      <span class="add-moderator-title">Добавить модератора</span>
    </div>

    <div class="moderator-create-form" v-if="isShowForm">
      <form @submit.prevent="createModerator">
        <input v-model="inputLogin" class="input-login" placeholder="Логин" />
        <input
          v-model="inputPassword"
          class="input-password"
          placeholder="Пароль"
        />
        <button type="submit" class="submit-btn">Добавить</button>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.add-moderator-wrapper {
  display: flex;
  font-size: 24px;
}

.add-moderator-title {
  cursor: pointer;
}

button.submit-btn {
  width: 8rem;
  padding: 0.4rem;
  border: none;
  background-color: $blue-color;
  color: white;
  font-size: 1.2rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button.submit-btn:hover {
  background-color: #0056b3;
}
</style>
