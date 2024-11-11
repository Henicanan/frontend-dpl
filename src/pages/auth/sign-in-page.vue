<script setup lang="ts">
import { useAuthStore } from "../../store/authStore";

const authStore = useAuthStore();

const handleLogin = async () => {
  try {
    await authStore.login();
  } catch (err) {
    console.log(err);
  }
};
</script>

<template>
  <div class="auth-container">
    <div class="auth-form">
      <h2>Вход</h2>
      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <label for="email">Логин</label>
          <input
            v-model="authStore.email"
            id="email"
            placeholder="Введите ваш логин"
          />
        </div>
        <div class="input-group">
          <label for="password">Пароль</label>
          <input
            v-model="authStore.password"
            type="password"
            id="password"
            placeholder="Введите пароль"
          />
        </div>
        <button type="submit" class="submit-btn">Войти</button>
      </form>
      <p>
        Нет аккаунта?
        <a @click="$router.push('/registration')">Зарегистрироваться</a>
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f7fa;
}

.auth-form {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
  margin: 1rem;
}

h2 {
  margin-bottom: 1.5rem;
  font-size: 20px;
}

.input-group {
  margin-bottom: 1rem;
}

.input-group label {
  display: block;
  text-align: left;
  margin-bottom: 0.5rem;
}

.input-group input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

button.submit-btn {
  width: 100%;
  padding: 0.8rem;
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

p {
  margin-top: 1rem;
}

a {
  color: $blue-color;
  cursor: pointer;
  text-decoration: underline;
}
</style>
