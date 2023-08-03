import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import pinia from './store'

import './index.css'

const app = createApp(App)

// 使用 Pinia 插件
app.use(createPinia())

// 注册你的 store
app.use(pinia)

createApp(App).mount('#app')
