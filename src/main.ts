import { createApp } from "vue";
import App from "./App.vue";
import "./assets/normalize.css";
import { router } from "./routes/index";
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);

app.mount("#app");
