import { createSSRApp } from "vue";
import App from "./App.vue";
// pinia store
import pinia from "@/stores";
// 引入uview-plus
import uviewPlus from "uview-plus";

import { initRequest } from "./api/index";

export const createApp = () => {
  const app = createSSRApp(App);
  // 引入请求封装
  initRequest();
  app.use(uviewPlus);
  app.use(pinia);
  return {
    app
  };
};
