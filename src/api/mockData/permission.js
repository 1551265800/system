import Mock from 'mockjs'
export default {
    getMenu: config => {
        const { username, password } = JSON.parse(config.body)
        //用户登陆数据
        if (username === "admin" && password === "admin") {
            return {
                code: 200,
                data: {
                    menu: [
                        {
                            path: "/home",
                            name: "home",
                            lable: "首页",
                            icon: "house",
                            url: "home/index"
                        },
                        {
                            path: "/mall",
                            name: "mall",
                            lable: "商品管理",
                            icon: "video-play",
                            url: "mall/index"
                        },
                        {
                            path: "/user",
                            name: "user",
                            lable: "用户管理",
                            icon: "video-play",
                            url: "user/index"
                        }, {
                            path: '/other',
                            lable: '其他',
                            icon: 'location',
                            children: [
                                {
                                    path: '/page1',
                                    name: 'page1',
                                    lable: '页面1',
                                    icon: 'setting',
                                    url: 'Other/PageOne'
                                },
                                {
                                    path: '/page2',
                                    name: 'page2',
                                    lable: '页面2',
                                    icon: 'setting',
                                    url: 'Other/PageTwo'
                                },
                            ]
                        }
                    ],
                    token: Mock.Random.guid(),
                    message: "获取成功"
                }
            }
        } else if (username === "swzswz" && password === "swzswz") {
            return {
                code: 200,
                data: {
                    menu: [
                        {
                            path: "/",
                            name: "home",
                            lable: "首页",
                            icon: "s-home",
                            url: "home/index"
                        },
                        {
                            path: "/mall",
                            name: "mall",
                            lable: "商品管理",
                            icon: "video-play",
                            url: "mall/index"
                        }
                    ],
                    token: Mock.Random.guid(),
                    message: "获取成功"
                }
            }
        } else {
            return {

                code: -999,
                data: {
                    message: "用户名或密码错误"
                }
            }
        }
    }
}