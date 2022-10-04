import { createStore } from "vuex"
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
        ]
    },
    mutations: {
        updataIsCollapse(state, payload) {
            state.isCollapse = !state.isCollapse
        },
        selectMenu(state, val) {
            val.name == "home" ? (state.currentMenu = null) : (state.currentMenu = val)
        }
    },
    
})