import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/normalize.css";
import "@/assets/style.css";
import { router } from "./routes/index";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import Editor from "primevue/editor";
import Aura from "@primevue/themes/aura";

const app = createApp(App);
const pinia = createPinia();

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.use(router);
app.use(pinia);
app.component("Editor", Editor);

app.mount("#app");
