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
//判断是否有路由
function checkRouter(path) {
    let hasCheck = router.getRoutes().filter(route => route.path == path).length
    if (hasCheck) {
        return true
    }
    else{
        return false
    }
}
//全局路由守卫
router.beforeEach((to,from,next)=>{
    store.commit("getToken")
    const token = store.state.token
    if (!token && to.name !== "login") {
        next({name:"login"})
    }else if(!checkRouter(to.path)){
        next({name:"home"})
    }else{
        next()
    }
})
app.use(router).use(store)
app.mount('#app')
