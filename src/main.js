import { createApp } from 'vue'
// 菜单和路由设置
import router from './router'

import './style.css'
import 'flex.css';
import App from './App.vue'

// 引入重置样式
import "./style/reset.scss";
// 导入公共样式
import "./style/index.scss";

const app = createApp(App)

app.use(router)
app.mount('#app')
