<template>
    <el-header>
        <div class="l-container">
            <!-- 图标 -->
            <el-button size="small" @click="handleCollapse">
                <el-icon :size="20">
                    <Menu />
                </el-icon>
            </el-button>
            <el-breadcrumb separator="/" class="bread">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="current" v-if="current">{{current.name}}</el-breadcrumb-item>
                
            </el-breadcrumb>
        </div>
        <div class="r-container">
            <el-dropdown>
                <span class="el-dropdown-link userImg">
                    <img :src="getImgSrc('user')" alt="">
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>个人中心</el-dropdown-item>
                        <el-dropdown-item @click="handerLoginOut">退出</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </el-header>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex"
let store = useStore()
const current = computed(()=>{
    return store.state.currentMenu;
})
function getImgSrc(user) {
    return new URL(`../assets/${user}.jpg`, import.meta.url).href
}
function handleCollapse() {
    //调用vuex中的mutations
    store.commit("updataIsCollapse")
}
//登出
const router =useRouter()
function handerLoginOut() {
    store.commit("cleanMenu")
    store.commit("clearToken")

    router.push({
        name:"login"
    })
}
</script>

<style lang="less" scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: #63bbd0;
}

.userImg img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.l-container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    .el-button {
        margin-right: 20px;
    }

    h3 {
        color: #fff;
    }
}
:deep(.bread span){
    cursor: pointer !important;
}
</style>