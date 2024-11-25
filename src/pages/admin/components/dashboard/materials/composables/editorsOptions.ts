import { ref } from "vue";

export const editorOptions = ref({
  theme: "snow",
  modules: {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }],
      ["bold", "italic", "underline", "strike"],
      ["link"],
      ["image"],
    ],
  },
});
