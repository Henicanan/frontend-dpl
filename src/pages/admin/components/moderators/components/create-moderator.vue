<script setup lang="ts">
import angleDownOutline from "@/components/icons/angle-down-outline.vue";
import angleUpOutline from "@/components/icons/angle-up-outline.vue";
import DefaultInput from "@/components/input/default-input.vue";
import { ref } from "vue";
import { useModerators } from "../composables/useModerators";
import { roles } from "@/constants/roles";

const { createModerator } = useModerators();

const inputLogin = ref<string>("");
const inputPassword = ref<string>("");
const isShowForm = ref<boolean>(false);

const handleCreateModerator = async () => {
  await createModerator(roles.moderator, inputLogin.value, inputPassword.value);
};
</script>

<template>
  <div class="moderators">
    <div class="add-moderator-wrapper">
      <angleDownOutline v-if="!isShowForm" @click="isShowForm = true" />
      <angleUpOutline v-if="isShowForm" @click="isShowForm = false" />
      <span class="add-moderator-title">Добавить модератора</span>
    </div>

    <div class="moderator-create-form" v-if="isShowForm">
      <form @submit.prevent="handleCreateModerator">
        <DefaultInput
          v-model="inputLogin"
          :typeInput="'text'"
          :placeholder="'Логин'"
        />
        <DefaultInput
          v-model="inputPassword"
          :typeInput="'password'"
          :placeholder="'Пароль'"
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
  background-color: $green-color;
  color: white;
  font-size: 1.2rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 1rem;

  &:hover {
    border: 2px solid rgb(156, 156, 156);
    color: #eeeeee;
  }
}
</style>
