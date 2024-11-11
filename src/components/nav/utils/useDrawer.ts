import { ref } from "vue";

export function useDrawer() {
  const isOpen = ref<boolean>(false);

  function toggleDrawer() {
    isOpen.value = !isOpen.value;
  }

  return { isOpen, toggleDrawer };
}
