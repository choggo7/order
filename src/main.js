import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import './assets/css/fonts.css'

createApp(App).use(router).mount("#app");
