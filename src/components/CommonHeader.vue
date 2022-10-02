<template>
    <el-header>
        <div class="l-container">
            <!-- 图标 -->
            <el-button size="small" @click="handleCollapse">
                <el-icon :size="20">
                    <Menu />
                </el-icon>
            </el-button>
            <h3>首页</h3>
        </div>
        <div class="r-container">
            <el-dropdown>
                <span class="el-dropdown-link userImg">
                    <img :src="getImgSrc('user')" alt="">
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>个人中心</el-dropdown-item>
                        <el-dropdown-item>退出</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </el-header>
</template>

<script setup>
import { reactive } from "vue";
import { useStore } from "vuex"
let store = reactive(useStore())
function getImgSrc(user) {
    return new URL(`../assets/${user}.jpg`, import.meta.url).href
}
function handleCollapse() {
    //调用vuex中的mutations
    store.commit("updataIsCollapse")
}
</script>

<style lang="less" scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: #333;
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
</style>