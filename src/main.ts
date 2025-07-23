import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 引入 Web Component 註冊方法
import { register } from './main.ce'

// 註冊 Web Component
register()

createApp(App).mount('#app')
