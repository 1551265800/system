/**
 * 整个项目api管理
 */
import  request  from "./request"
export default {
    //home组件左侧表格数据索取
    getTableData(params){
        return request({
            url:'/home/getData',
            method:"get",
            data:params,
            mock:true,
        })
    },
    getCountData(params){
        return request({
            url:'/home/getCountData',
            method:"get",
            data:params,
            mock:true,
        })
    },
    getOrderData(params){
        return request({
            url:'/home/getCharData',
            method:"get",
            data:params,
            mock:true,
        })
    }
}