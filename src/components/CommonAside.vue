<template>
    <el-aside :width='$store.state.isCollapse?"180px":"64px"'>
        <el-menu class="el-menu-vertical-demo aside" :collapse="!$store.state.isCollapse" :collapse-transition="false">
            <h3 v-show="$store.state.isCollapse" @click="gotoHome">后台管理</h3>
            <h3 v-show="!$store.state.isCollapse">后台</h3>
            <el-menu-item :index="item.path" v-for="item in noChildren()" :key="item.path" @click="clickMenu(item)">
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
                <el-menu-item-group style="background-color: #f3f3f3; ">
                    <el-menu-item :index="subItem.path" v-for="(subItem,subIndex) in item.children" :key="subIndex"
                        @click="clickMenu(subItem)">
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
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
export default {
    setup() {
        const store = useStore()
        const router = useRouter()
        //点击后台管理跳转到首页
        const gotoHome = ()=>{
            router.push("/home");
            store.commit("selectMenu", "home")
        }
        const asyncList = store.state.menu
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
            return asyncList.filter(item => !item.children)
        };
        const hasChildren = () => {
            return asyncList.filter(item => item.children)
        };
        const clickMenu = (item) => {
            router.push({
                name: item.name
            });
            //vuex 管理
            store.commit("selectMenu", item)
        };
        return {
            noChildren,
            hasChildren,
            clickMenu,
            gotoHome
        }
    }
}
</script>

<style lang="less" scoped>
.aside {
    background-color: #f3f3f3;
    overflow: hidden;
}

.icons {
    width: 18px;
    height: 18px;
}

.el-menu {
    border-right: none;

    h3 {
        line-height: 48px;
        text-align: center;
    }
}

.el-aside {
    height: 100%;
    display: flex;
}
</style>