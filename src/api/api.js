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
    }
}