import { createApp } from "vue";
import store from "./stores";
import router from "./router";
import "./index.css";
import App from "./App.vue";

const app = createApp(App);

app.use(store);
app.use(router);
app.mount("#app");
