<template>
    <el-row class="home" :gutter="20">
        <el-col :span="8" style="margin-top: 20px;">
            <el-card shadow="hover">
                <div class="user">
                    <img src="../../assets/user.jpg" alt="">
                    <div class="user-info">
                        <p class="name">诗昂</p>
                        <p class="role">超级管理员</p>
                    </div>
                </div>
                <div class="login-info">
                    <p>上次登陆时间：<span>2022-10-2</span></p>
                    <p>上次登陆地点：<span>山东</span></p>
                </div>

            </el-card>
            <el-card shadow="hover" style="margin-top: 20px; ">
                <el-table :data="tableData">
                    <el-table-column v-for="(val,key) of tableLabel" :key="key" :prop="key" :label="val">

                    </el-table-column>
                </el-table>
            </el-card>
        </el-col>
        <el-col :span="16" style="margin-top: 20px;">
            <el-card shadow="hover">

            </el-card>
        </el-col>
    </el-row>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';
import axios from 'axios'

async function getTableList() {
    await axios.get("/home/getData").then((res) => {
        tableData.value = res.data.data.tableData;
    })
}
onMounted(() => {
    getTableList();
})
let tableData = ref([])
const tableLabel = reactive({
    name: "课程",
    todayBuy: "今日购买",
    monthBuy: "本月购买",
    totalBuy: "总购买"
})
</script>

<style lang="less">
.home {
    .user {
        display: flex;
        align-items: center;
        padding-bottom: 20px;
        border-bottom: 1px solid #ccc;
        margin-bottom: 20px;

        img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            margin-right: 40px;
        }
    }
}

.login-info {
    p {
        line-height: 30px;
        font-size: 14px;
        color: #999;

        span {
            color: #666;
            margin-left: 50px;
        }
    }
}

.el-aside {
    display: flex;
}
</style>