
/**
 * 环境配置文件
 * 开发环境
 * 测试环境
 * 线上环境
 */
const env = import.meta.env.MODE || 'development'  //当前环境取值  默认为开发环境

const EnvConfig = {
    //开发环境
    development:{
        baseApi:'/api',
        mockApi:'https://www.fastmock.site/mock/d239c05527634d26672d840e9e59b765/api',
    },
    //测试环境
    text:{
        baseApi:'//text.com/api',
        mockApi:'https://www.fastmock.site/mock/d239c05527634d26672d840e9e59b765/api',
    },
    //线上环境
    prod:{
        baseApi:'//future.com/api',
        mockApi:'https://www.fastmock.site/mock/d239c05527634d26672d840e9e59b765/api',
    }
}
export default {
    env,
    //mock的总开关
    mock:true,
    ...EnvConfig[env]
}