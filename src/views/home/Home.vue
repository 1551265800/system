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
            <div class="num">
                <el-card shadow="hover" :body-style="{dispaly:'flex',padding:0}" v-for="item in countData"
                    :key="item.name">
                    <component class="icons" :is="item.icon" :style="{background:item.color}"></component>
                    <div class="details">
                        <p class="money"> {{item.value}}</p>
                        <p class="txt">{{item.name}}</p>
                    </div>
                </el-card>
            </div>

            <div>
                <el-card style="height: 350px; margin-top: 20px;">
                    <div id="myEchartOne" style="height: 300px;"></div>
                </el-card>
            </div>
            <div class="graph">
                <el-card style="height: 300px; margin-top: 20px;">
                    <div id="myEchartTwo" style="height: 300px;"></div>
                </el-card>
                <el-card style="height: 300px; margin-top: 20px;">
                    <div id="myEchartThr" style="height: 300px;"></div>
                </el-card>
            </div>
        </el-col>
    </el-row>
</template>

<script setup>
import { getCurrentInstance, onMounted, reactive, ref } from 'vue';
import axios from 'axios'
import api from '../../api/api'
import * as echarts from 'echarts';
import async, { dir } from '_async@2.6.4@async';
const { proxy } = getCurrentInstance();
let tableData = ref([])
let countData = ref([])
const tableLabel = reactive({
    name: "课程",
    todayBuy: "今日购买",
    monthBuy: "本月购买",
    totalBuy: "总购买"
})
//获取左侧表格数据
async function getTableList() {
    /* await axios.get("https://www.fastmock.site/mock/d239c05527634d26672d840e9e59b765/api/home/getData").then((res) => {
        if (res.data.code === 200) {
            tableData.value = res.data.data.tableData;
        }
    }) */
    let res = await api.getTableData();
    tableData.value = res.tableData
};
//获取首页count数据
async function getCountData() {
    let res = await api.getCountData();
    /*   console.log(res); */
    countData.value = res
}
//获取图图表数据信息
async function getOrderData() {
    let res = await api.getOrderData();
    /* console.log(res.videoData); */

    //饼状图配置
    let pieOptions = reactive({
        title: {
            text: '手机总销量',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        /*    legend: {
               orient: 'vertical',
               left: 'left'
           }, */
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: '50%',
                data: res.videoData,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    })
    //渲染饼状图
    let echart2 = document.getElementById("myEchartTwo");
    let hEcahrts2 = echarts.init(echart2)
    hEcahrts2.setOption(pieOptions)
    //柱状图配置

    let zhuOptions = reactive({
        title: {
            text: '销售量'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {},
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: []
        },
        series: [
            {
                name: 'new',
                type: 'bar',
                data: []
            },
            {
                name: 'active',
                type: 'bar',
                data: []
            }
        ]
    })
    res.userData.map(item=>{
        zhuOptions.yAxis.data.push(item.date);
        zhuOptions.series[0].data.push(item.new);
        zhuOptions.series[1].data.push(item.active);
    })
    
    
    //渲染柱状图
    let echart3 = document.getElementById("myEchartThr");
    let hEcahrts3 = echarts.init(echart3)
    hEcahrts3.setOption(zhuOptions)
}
function initEchart() {
    //echars渲染
    //折线图配置
    let xOptions = reactive({
        title: {
            text: '销售情况统计'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['苹果', '小米', '华为', 'oppo', '一加']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        /* toolbox: {
            feature: {
                saveAsImage: {}
            }
        }, */
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['20221001', '20221002', '20221003', '20221004', '20221005', '20221006', '20221007']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '苹果',
                type: 'line',
                /*  stack: 'positive', */
                data: [1642, 2889, 2957, 3791, 2126, 4533, 2883]
            },
            {
                name: '小米',
                type: 'line',
                /* stack: 'positive', */
                data: [3406, 1460, 2762, 2510, 2615, 3467, 2099]
            },
            {
                name: '华为',
                type: 'line',
                /*   stack: 'positive', */
                data: [1164, 2796, 3089, 1214, 4286, 1756, 3270]
            },
            {
                name: 'oppo',
                type: 'line',
                /* stack: 'positive', */
                data: [4764, 4191, 2153, 4488, 3812, 1488, 1207]
            },
            {
                name: '一加',
                type: 'line',
                /*   stack: 'positive', */
                data: [3334, 3312, 3536, 1190, 3621, 4478, 4964]
            }
        ]
    })
    //渲染折线图
    let echart = document.getElementById("myEchartOne");
    let hEcahrts = echarts.init(echart)
    hEcahrts.setOption(xOptions)
}
onMounted(() => {
    getTableList();
    getCountData();
    getOrderData();
    initEchart();
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

.num {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .el-card {
        width: 32%;
        margin-top: 20px;
    }

    .icons {
        width: 80px;
        height: 80px;
        font-size: 30px;
        text-align: center;
        line-height: 80px;
        color: #fff;
        float: left;
    }

    .details {
        margin-left: 15px;
        float: left;
        position: relative;
        top: 10px;

        .money {
            font-size: 30px;
            margin-bottom: 10px;
        }

        .txt {
            font-size: 14px;
            text-align: center;
            color: #999;
        }
    }
}

.graph {
    display: flex;
    justify-content: space-between;

    .el-card {
        width: 48%;
    }
}
</style>