import Vue from 'vue'
import App from './App.vue'
import VueCompositionAPI, { createApp } from "@vue/composition-api";
import { createPinia, PiniaPlugin } from "pinia";

Vue.config.productionTip = false

const plugins = [VueCompositionAPI, PiniaPlugin];

plugins.forEach((plugin) => Vue.use(plugin));

const pinia = createPinia();

const app = createApp({
  render: (h: Vue.CreateElement) => h(App),
  pinia,
});

app.mount("#app");
