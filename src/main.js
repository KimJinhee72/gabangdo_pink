import "./assets/Main.scss";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

// createApp(App).mount('#app')
const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount("#app");
if (import.meta.env.PROD) {
  app.config.devtools = false; // ⛔ Vue Devtools 비활성화
}
