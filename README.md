# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## mockjs
 cnpm i mockjs -S
 - 本地使用
 `Mock.mock('/home/getData',homeApi.getHomeData) `homeApi.getHomeData是个函数 返回数据
 async function getTableList() {
    await axios.get("/home/getData").then((res) => {
        tableData.value = res.data.data.tableData;
    })
}
- fastmock
