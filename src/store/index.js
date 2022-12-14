import { createStore } from "vuex"
import Cookie from "js-cookie"
export default createStore({
    state: {
        isCollapse: true,
        currentMenu: null,
        tabsList:[
            {
                path:'/',
                name:'home',
                lable:'首页',
                icon:"home"
            }
        ],
        menu:[],
        token:""
    },
    mutations: {
        updataIsCollapse(state, payload) {
            state.isCollapse = !state.isCollapse
        },
        selectMenu(state, val) {
            val.name == "home" ? (state.currentMenu = null) : (state.currentMenu = val)
        },
        setMenu(state,val){
            state.menu = val
            localStorage.setItem("menu",JSON.stringify(val))
        },
        addMenu(state){
            if (!localStorage.getItem("menu")) {
                return
            }
            const menu = JSON.parse(localStorage.getItem("menu"))
            state.menu = menu
        },
        cleanMenu(state){
            state.menu = []
            localStorage.removeItem("menu")
        },
        setToken(state,val){
            state.token = val
            Cookie.set("token",val)
        },
        clearToken(state){
            state.token = ''
            Cookie.remove("token")
        },
        getToken(state){
            state.token = state.token || Cookie.get("token")
        }
    },
    
})