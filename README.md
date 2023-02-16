# 组件打包上传 npm 并引入项目演示

>构建工具：Vite 框架：Vue3.0  

## 步骤说明

1. 使用命令`npm init vue@latest`创建一个新项目，删除多余组件；
2. 在目录`src`下新建文件夹`package`，里面存放具体的组件；
3. 在`package`目录下新建一个`index.js`文件作为打包入口，内容如下：
```js
import <组件名> from "../package/<组件名>/index.vue"; // 引入封装好的组件

const coms = [<组件名>]; // 将来如果有其它组件,都可以写到这个数组里

export default {
  install(Vue) {
    coms.forEach((com) => {
      Vue.component(com.name, com);
    });
  }
}
```
4. 在`main.js`中引入测试下组件是否正常使用，具体如下：
```js
import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

// 引入本地调试的包
import <包名> from './package/index'

const app = createApp(App)

// 将其全局应用
app.use(<包名>)

app.mount('#app')
```

5. 在要使用的地方添加该组件，如在`App.vue`中使用如下：
```js
<template>
  <组件名 />
</template>
```
6. 确认正常引入后，在`vite.config.js`中添加如下打包配置：
```js
export default defineConfig({
  // 其他配置

  build: {
    outDir: "<包名>", //输出文件名称
    lib: {
      entry: path.resolve(__dirname, "./src/package/index.js"), //指定组件编译入口文件
      name: "<包名>",
      fileName: "<包名>",
    }, //库编译模式配置
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    }, // rollup打包配置
  }
})
```
7. 使用`vite build`命令进行打包处理
8. 顺利打包完成后，根目录下会生成一个目录，内容则是打包完成的文件，进入该目录使用`npm init -y`命令初始化`package.json`文件，
```json
{
  "name": "<包名>",//不可与已有包重复，否则发布失败
  "version": "1.0.0",
  "description": "",
  "main": "binary-clock.umd.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
9. 完成以上相关信息的填写后，使用`npm login`进行登录（需提前注册好 npm 账号），输入账号、密码、邮箱后，该邮箱会收到一个验证码，输入验证码即可完成登录；
10. 使用`npm publish`命令完成发布。

> 至此，包的发布已完成，以下内容是下载并引入该包

11. 退回到项目根目录，使用`npm install <包名>`下载该包，下载成功后可在`node_modules`目录中查看该包

12. 在`main.js`中引入该包，具体如下：
```js
import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'

import './assets/main.css'

// 引入上传到npm后下载的包 包括样式文件
import '<包名>/style.css'
import <库名> from '<包名>'

const app = createApp(App)

// 将这个库全局应用
app.use(<库名>)

app.mount('#app')
```

> 以上就是具体步骤全过程

### 启动项目演示

```sh
npm install
or
yarn
```

### 运行项目

```sh
npm run dev
or
yarn dev
```

### 二进制时钟组件打包

```sh
npm run build
or
yarn build
```
