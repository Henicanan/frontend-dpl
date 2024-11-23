<script setup lang="ts">
import { ref } from "vue";
import test from "./tests/test.vue";
import materials from "./materials/materials.vue";
import courses from "./courses/courses.vue";
import type { Tab } from "./materials/types/tab";
import { tabs } from "./materials/constants/tabs";

const activeTab = ref<"courses" | "tests" | "materials">("courses");

const switchTab = (tab: "courses" | "tests" | "materials") => {
  activeTab.value = tab;
};

const tabsItem: Tab[] = tabs;
</script>

<template>
  <div class="dashboard">
    <div class="tab-switcher">
      <button
        v-for="tab in tabsItem"
        :key="tab.name"
        :class="{ active: activeTab === tab.name }"
        @click="switchTab(tab.name)"
      >
        {{ tab.label }}
      </button>
    </div>

    <div class="dashboard-content">
      <div v-if="activeTab === 'courses'">
        <courses />
      </div>
      <div v-if="activeTab === 'tests'">
        <test />
      </div>
      <div v-if="activeTab === 'materials'">
        <materials />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dashboard {
  font-family: Arial, sans-serif;

  .tab-switcher {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    gap: 10px;

    button {
      padding: 10px 20px;
      font-size: 1rem;
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: #f9f9f9;
      cursor: pointer;
      transition: background-color 0.3s, color 0.3s;

      &.active {
        background-color: $blue-color;
        color: #fff;
        border-color: $blue-color;
      }

      &:hover {
        background-color: $blue-color;
        color: #c7c7c7;
      }
    }
  }

  .dashboard-content {
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    h2 {
      font-size: 1.8rem;
      color: #333;
    }
  }
}
</style>
