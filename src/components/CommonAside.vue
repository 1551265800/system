<template>
    <el-aside width="200px">
        <el-menu class="el-menu-vertical-demo aside" :collapse="false"> 
            <el-menu-item :index="item.path" v-for="item in noChildren()" :key="item.path">
                <el-icon>
                    <component class="icons" :is="item.icon"></component>
                </el-icon>
                <span>{{item.lable}}</span>
            </el-menu-item>
            <el-sub-menu :index="item.path" v-for="item in hasChildren()" :key="item.path">
                <template #title>
                    <el-icon>
                        <component class="icons" :is="item.icon"></component>
                    </el-icon>
                    <span>{{item.lable}}</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item :index="subItem.path" v-for="(subItem,subIndex) in item.children" :key="subIndex">
                        <el-icon>
                            <component class="icons" :is="subItem.icon"></component>
                        </el-icon>
                        <span>{{subItem.lable}}</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>

        </el-menu>
    </el-aside>
</template>

<script>
export default {
    setup() {
        const list = [
            {
                path: '/user',
                name: 'user',
                lable: '用户管理',
                icon: 'user',
                url: 'UserManage/UserManage'
            },
            {
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
        ]
        //判断是否有二级菜单
        const noChildren = () => {
            return list.filter(item => !item.children)
        };
        const hasChildren = () => {
            return list.filter(item => item.children)
        };
        return {
            noChildren,
            hasChildren
        }
    }
}
</script>

<style lang="less" scoped>
.aside{
    background-color: #f3f3f3;
}
</style>