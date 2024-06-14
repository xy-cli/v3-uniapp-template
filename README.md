### 使用uniapp+vite+vue3+uview-plus3.0 搭建的微信小程序快速开发模版

使用uniapp+vite+vue3+typescript+uview-plus3.0 搭建的H5和微信小程序快速开发模版

[uview-plus官方文档](https://uiadmin.net/uview-plus/)

本项目集众多项目的优点，打造最适合团队协作开发的项目模板。



### 目录结构
项目中采用目前最新的技术方案来实现，目录结构清晰。
```
v3-uniapp-template     
├ build                 vite插件统一管理
│  ├ vite               
│  └ constant.ts        
├ scripts               一些脚本
│  └ verifyCommit.js    
├ src                   
│  ├ api                接口管理
│  ├ components         公共组件
│  ├ hooks              常用hooks封装
│  ├ pages              页面管理
│  ├ static             静态资源
│  ├ store              状态管理
│  ├ utils              一些工具
│  ├ App.vue            
│  ├ main.ts            
│  ├ manifest.json      
│  ├ pages.json         
│  ├ permission.ts      页面访问权限控制
│  └ uni.scss           
├ types                 全局typescript类型文件
│  ├ auto-imports.d.ts  
│  ├ components.d.ts    
│  ├ global.d.ts        
│  └ module.d.ts        
├ README.md             
├ eslint.config.js      
├ index.html            
├ package.json          
├ pnpm-lock.yaml        
├ tsconfig.json         
├ uno.config.ts         
└ vite.config.ts        
```

#### vite插件管理
```
build                  
├ vite                 
│  ├ plugins           
│  │  ├ autoImport.ts  自动导入api
│  │  ├ component.ts   自动导入组件
│  │  ├ imagemin.ts    图片压缩
│  │  ├ index.ts       入口文件
│  │  └ unocss.ts      unocss插件
│  └ proxy.ts          跨域代理配置
└ constant.ts          一些常量
```

#### 接口管理
```
api            
├ common       通用api
│  ├ index.ts  
│  └ types.ts  
├ user         用户相关api
│  ├ index.ts  
│  └ types.ts  
└ index.ts     入口文件
```

#### hooks管理
```
hooks            
├ use-clipboard  剪切板
│  └ index.ts    
├ use-loading    loading
│  └ index.ts    
├ use-modal      模态框
│  └ index.ts    
├ use-share      分享
│  └ index.ts    
└ index.ts       入口文件
```

### 页面管理
```
pages              
├ common           公共页面
│  ├ login         
│  │  └ index.vue  
│  └ webview       
│     └ index.vue  
└ tab              主页面（主包）
   ├ home          
   │  └ index.vue  
   ├ list          
   │  └ index.vue  
   └ user          
      └ index.vue  
```

#### 状态管理
```
store             
├ modules         
│  ├ app          app状态
│  │  ├ index.ts  
│  │  └ types.ts  
│  └ user         用户状态
│     ├ index.ts  
│     └ types.ts  
└ index.ts        入口文件
```

### 工具方法
```
utils                 
├ auth                token相关方法
│  └ index.ts         
├ common              通用方法
│  └ index.ts         
├ modals              弹窗相关方法
│  └ index.ts         
├ request             网络请求相关方法
│  ├ index.ts         
│  ├ interceptors.ts  
│  ├ status.ts        
│  └ type.ts          
└ index.ts            入口文件
```

### 使用方法

```bash
# 安装依赖
pnpm install

# 启动H5
pnpm dev:h5

# 启动微信小程序
pnpm dev:mp-weixin
```

### 发布

```bash
# 构建测试环境
pnpm build:h5
pnpm build:mp-weixin

# 构建生产环境
pnpm build:h5-prod
pnpm build:mp-weixin-prod
```

### 更新uniapp版本

更新uniapp相关依赖到最新正式版
```bash
npx @dcloudio/uvm@latest
```
