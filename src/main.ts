import { createSSRApp } from 'vue'
import App from "./App.vue";
import uviewPlus from 'uview-plus'
// @ts-ignore
import sLoading from '@/components/s-loading/index.vue';
export function createApp() {
  const app = createSSRApp(App)
  app.use(uviewPlus)
  app.component(sLoading.name, sLoading)
  return {
    app
  }
}
