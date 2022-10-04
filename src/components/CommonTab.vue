<template>
    <div class="tags">
        <el-tag 
        v-for="(tag,index) in tags" 
        :key="tag.name"
        :closable="tag.name !== 'home'"
        :disable-transitions = "false"
        :effect = "$route.name === tag.name ? 'dark' : 'plain'"
        >{{tag.lable}}</el-tag>
        
    </div>
</template>

<script>
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore()
        const tags = store.state.tabsList;

        return {tags}
    }
}
</script>

<style lang="less" scoped>
.tags{
    padding: 20px;
    width: 100%;
    .el-tag{
        margin-right: 15px;
        cursor: pointer;
    }
}
</style>