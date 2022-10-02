import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import "./assets/less/index.less"
import store from './store/index.js'
import './api/mock.js'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(router).use(store)
app.mount('#app')
