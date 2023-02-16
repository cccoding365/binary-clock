import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'

import './assets/main.css'

// 引入上传到npm后下载的包
// import 'binary-clock1/style.css'
// import HUI from 'binary-clock1'

// 引入本地调试的包
import HUI from './package/index'

const app = createApp(App)

// 将这个库全局应用
app.use(HUI)
// app.use(router)

app.mount('#app')
