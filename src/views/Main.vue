<template>
    <div class="common-layout">
        <el-container>
            <CommonAside />
            <el-container class="r-container">
                <CommonHeader />
                <!-- <CommonTab></CommonTab> -->
                <el-main>
                    <router-view />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
import CommonHeader from '../components/CommonHeader.vue';
import CommonAside from '../components/CommonAside.vue';
import CommonTab from '../components/CommonTab.vue';


</script>

<style lang="less" scoped>
.r-container {
    height: 100%;
    flex-wrap: wrap;
    align-items: flex-start;

}

.common-layout{
    height: 100%;
    .el-container{
        height: 100%;
        .el-aside{
            height: 100%;
            background-color: #f3f3f3;
        }
        /* .el-main{
            height: 150%;
        } */
    }
}
</style>