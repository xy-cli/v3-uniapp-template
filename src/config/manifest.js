import {writeFile} from "fs";

const data = {
  "name" : "",
  "appid" : "",
  "description" : "",
  "versionName" : "1.0.0",
  "versionCode" : "100",
  "transformPx" : false,
  /* 5+App特有相关 */
  "app-plus" : {
    "usingComponents" : true,
    "nvueStyleCompiler" : "uni-app",
    "compilerVersion" : 3,
    "splashscreen" : {
      "alwaysShowBeforeRender" : true,
      "waiting" : true,
      "autoclose" : true,
      "delay" : 0
    },
    /* 模块配置 */
    "modules" : {},
    /* 应用发布信息 */
    "distribute" : {
      /* android打包配置 */
      "android" : {
        "permissions" : [
          "<uses-permission android:name=\"android.permission.CHANGE_NETWORK_STATE\"/>",
          "<uses-permission android:name=\"android.permission.MOUNT_UNMOUNT_FILESYSTEMS\"/>",
          "<uses-permission android:name=\"android.permission.VIBRATE\"/>",
          "<uses-permission android:name=\"android.permission.READ_LOGS\"/>",
          "<uses-permission android:name=\"android.permission.ACCESS_WIFI_STATE\"/>",
          "<uses-feature android:name=\"android.hardware.camera.autofocus\"/>",
          "<uses-permission android:name=\"android.permission.ACCESS_NETWORK_STATE\"/>",
          "<uses-permission android:name=\"android.permission.CAMERA\"/>",
          "<uses-permission android:name=\"android.permission.GET_ACCOUNTS\"/>",
          "<uses-permission android:name=\"android.permission.READ_PHONE_STATE\"/>",
          "<uses-permission android:name=\"android.permission.CHANGE_WIFI_STATE\"/>",
          "<uses-permission android:name=\"android.permission.WAKE_LOCK\"/>",
          "<uses-permission android:name=\"android.permission.FLASHLIGHT\"/>",
          "<uses-feature android:name=\"android.hardware.camera\"/>",
          "<uses-permission android:name=\"android.permission.WRITE_SETTINGS\"/>"
        ]
      },
      /* ios打包配置 */
      "ios" : {},
      /* SDK配置 */
      "sdkConfigs" : {}
    }
  },
  /* 快应用特有相关 */
  "quickapp" : {},
  /* 小程序特有相关 */
  "mp-weixin" : {
    "appid" : "",
    "setting" : {
      "urlCheck" : false
    },
    "usingComponents" : true
  },
  "mp-alipay" : {
    "usingComponents" : true
  },
  "mp-baidu" : {
    "usingComponents" : true
  },
  "mp-toutiao" : {
    "usingComponents" : true
  },
  h5: {
    /* "publicPath": "https://www.name.com/alioss/0.0.1" */
    devServer: {
      port: 2021,
      disableHostCheck: true,
      proxy: {
        '/api': {
          target: 'http://192.168.5.92:8092/', // 请求的目标域名
          changeOrigin: true,
          secure: false,
          pathRewrite: { // 使用代理； 告诉他你这个连接要用代理
            '^/api': '/'
          }
        }
      }
    },
    title: '<%=localName%>',
    router: {
      mode: 'history',
      base: '/<%=camelCasedName%>/'
    },
    async: {
      loading: 's-loading',
      delay: 500,
      timeout: 10000
    },
    optimization: {
      treeShaking: {
        enable: false
      }
    }
  },
  "uniStatistics": {
    "enable": false
  },
  "vueVersion" : "3"
}

writeFile(`${__dirname}/../manifest.json`, JSON.stringify(data), (e) =>
  e ? console.error(e) : console.log('\x1B[32m√ manifest.json 配置文件更新成功', '\x1B[37m')
)
