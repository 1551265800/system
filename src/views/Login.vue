<template>
    <el-form :model="loginForm" class="login-container">
        <h3>系统登陆</h3>
        <el-form-item>
            <el-input type="input" placeholder="请输入账号" v-model="loginForm.username">
            </el-input>
        </el-form-item>
        <el-form-item>
            <el-input type="password" placeholder="请输入密码" v-model="loginForm.password">
            </el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" class="loginBtn" @click="login">登陆</el-button>
        </el-form-item>
    </el-form>
</template>

<script >
import { getCurrentInstance, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import api from "../api/api"
export default {
    setup() {
        const loginForm = reactive({
            username: "admin",
            password: "admin"
        })
        const router = useRouter()
        const store = useStore()
        async function login() {
            //获取菜单值
            const res = await api.getMenu(loginForm)
            /* console.log(res.menu); */
            store.commit("setMenu",res.menu)
            store.commit("setToken",res.token)
            //l路由跳转
            router.push({
                name:"home"
            })

        }
        return {
            loginForm,
            login,
        }
    }
}

</script>

<style lang="less" scoped>
.login-container {
    width: 350px;
    height: 180px;
    background-color: #fff;
    border: 1px solid #eaeaea;
    border-radius: 15px;
    padding: 35px 35px 15px 35px;
    box-shadow: 0 0 25px #cacaca;
    margin: 180px auto;
    position: relative;

    h3 {
        text-align: center;
        margin-bottom: 20px;
        color: #505450;
    }

    .loginBtn {
        position: absolute;
        left: 40%;
        bottom: -30px;

    }
}
</style>