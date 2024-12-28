<script setup lang="ts">
import { onMounted, watch } from "vue";
import { useModerators } from "./composables/useModerators";
import circleSpinner from "@/components/spinner/circle-spinner.vue";
import debounce from "lodash/debounce";
import CreateModerator from "./components/create-moderator.vue";

const { fetchModerators, inputSearchModerator, loading, moderators } =
  useModerators();

const debouncedFetchModerators = debounce(fetchModerators, 500);

watch(inputSearchModerator, () => {
  debouncedFetchModerators();
});
onMounted(() => {
  fetchModerators();
});
</script>

<template>
  <div class="moderators">
    <CreateModerator />
    <div class="input-search-wrapper">
      <input
        v-model="inputSearchModerator"
        class="input-search-moderator"
        placeholder="Поиск модераторов"
      />
    </div>
    <div class="moderator-list">
      <div v-if="loading" class="loading-spinner">
        <circleSpinner />
      </div>
      <div
        v-else
        class="moderator-item"
        v-for="moderator in moderators"
        :key="moderator.id"
      >
        <div class="moderator-item-name">{{ moderator.email }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.input-search-wrapper {
  margin-top: 1rem;
}
</style>
