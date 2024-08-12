// 引入配置
import config from "./config";
// 引入拦截器配置
import { requestInterceptors, responseInterceptors } from "./interceptors.js";
// 引入luch-request
import { http } from "uview-plus";
//  初始化请求配置
const initRequest = () => {
  http.setConfig(defaultConfig => {
    /* defaultConfig 为默认全局配置 */
    defaultConfig.baseURL = config.baseURL; /* 根域名 */
    return defaultConfig;
  });
  requestInterceptors();
  responseInterceptors();
};
export { initRequest };
