import { ref } from "vue";

export function useDrawer() {
  const isOpen = ref<boolean>(false);

  const toggleDrawer = async () => {
    isOpen.value = !isOpen.value;
  };

  return { isOpen, toggleDrawer };
}
