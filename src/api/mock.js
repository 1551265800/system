import Mock from "mockjs"
import homeApi from './mockData/home'
//拦截请求
/* Mock.mock('/home/getData',homeApi.getHomeData) */
import permissionApi from "./mockData/permission"
Mock.mock(/permission\/getMenu/,"post",permissionApi.getMenu)