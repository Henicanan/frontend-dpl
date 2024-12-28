<script setup lang="ts">
const props = defineProps<{
  placeholder: string;
  typeInput: string;
  modelValue: string;
}>();

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="input-wrapper">
    <input
      class="input"
      :type="props.typeInput"
      :placeholder="props.placeholder"
      :value="props.modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<style scoped lang="scss">
.input {
  margin-top: 1rem;
  height: 2.3rem;
  border-radius: 7px;
  padding-left: 10px;
  font-size: 17px;
}
</style>
