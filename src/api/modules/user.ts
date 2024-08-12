import { http } from "uview-plus";

// post请求，获取菜单
export const postMenu = (params, config = {}) => http.post("/ebapi/public_api/index", params, config);
