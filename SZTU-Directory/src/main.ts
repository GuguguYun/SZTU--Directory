// 引入createApp用于创建应用
import { createApp } from 'vue'

// 引入App根组件
import App from './App.vue'

// 路由引入
import router from './router/index';

const app = createApp(App)

// 使用路由
app.use(router)
app.mount('#app')
