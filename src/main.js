// vue
import { createApp } from "vue";
import router from "@/router/router";

// styles
import "normalize.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import "@/styles/element-index.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@/styles/global.scss";

// axios
import axios from "axios";
import VueAxios from "vue-axios";

// app
import App from "./App.vue";

const app = createApp(App);

app.use(router);
app.use(VueAxios, axios);
app.provide("axios", app.config.globalProperties.axios); // provide 'axios'

app.mount("#app");
