<template>
    <div class="user-header">
        <el-button type="primary" @click="dialogVisible = true">+新增</el-button>
        <el-dialog v-model="dialogVisible" title="新增用户" width="30%" :before-close="handleClose">
            <el-form :inline="true" :model="formUser" :rules="rules">
                <el-form-item label="姓名" prop="user">
                    <el-input v-model="formInline.user" placeholder="请输入姓名" />
                </el-form-item>
                <el-form-item label="年龄" prop="age">
                    <el-input v-model="formInline.age" type="num" />
                </el-form-item>
                <el-form-item label="出生日期" prop="date">
                    <el-input v-model="formInline.date" type="date" />
                </el-form-item>
                <el-form-item label="住址" prop="ad">
                    <el-input v-model="formInline.ad" placeholder="请输入住址" />
                </el-form-item>
                <el-form-item label="详细住址" prop="address">
                    <el-input v-model="formInline.address" placeholder="请输入详细住址" />
                </el-form-item>

            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">新增</el-button>
                </span>
            </template>
        </el-dialog>


        <el-form :inline="true" :model="formInline">
            <el-form-item label="请输入">
                <el-input v-model="formInline.keyword" placeholder="请输入用户名" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="handerSerch">搜索</el-button>
            </el-form-item>
        </el-form>
    </div>
    <el-table :data="tableData" style="width: 100%;height: 700px;" class="table">
        <el-table-column fixed prop="name" label="姓名" width="120" />
        <el-table-column prop="date" label="出生日期" width="150" />
        <el-table-column prop="zip" label="性别" width="120" />
        <el-table-column prop="state" label="住址" width="120" />
        <el-table-column prop="address" label="详细住址" width="300" />
        <el-table-column fixed="right" label="操作" width="180">
            <template #default>
                <el-button type="primary" size="small" @click="handleClick">Detail</el-button>
                <el-button type="danger" size="small">Edit</el-button>
            </template>
        </el-table-column>
    </el-table>
    <el-pagination small background layout="prev, pager, next" :total="50" class="mt-4 page" />
</template>

<script>
export default {

}
</script>

<script setup>
import { reactive, ref } from 'vue';

const handleClick = () => {
    console.log('click')
}
const formInline = reactive({
    keyword: ""
})
//模态框
const dialogVisible = ref(false)
const handleClose = (done) => {
    ElMessageBox.confirm('确定关闭吗?')
        .then(() => {
            done()
        })
        .catch(() => {
            // catch error
        })
}
const formUser = reactive({

})
const tableData = [
    {
        date: '2022-05-03',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: '男',
        tag: 'Home',
    },
    {
        date: '2022-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: '男',
        tag: 'Office',
    },
    {
        date: '2022-05-04',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: '男',
        tag: 'Home',
    },
    {
        date: '2022-05-01',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: '男',
        tag: 'Office',
    },
    {
        date: '2022-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: '男',
        tag: 'Office',
    },
    {
        date: '2022-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: '男',
        tag: 'Office',
    },
    {
        date: '2022-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: '男',
        tag: 'Office',
    },
    {
        date: '2022-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: '男',
        tag: 'Office',
    },
    {
        date: '2022-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: '男',
        tag: 'Office',
    },
    {
        date: '2022-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: '男',
        tag: 'Office',
    },
    {
        date: '2022-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: '男',
        tag: 'Office',
    },
    {
        date: '2022-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: '男',
        tag: 'Office',
    },
    {
        date: '2022-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: '男',
        tag: 'Office',
    },

    {
        date: '2022-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: '男',
        tag: 'Office',
    },

    {
        date: '2022-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: '男',
        tag: 'Office',
    },

    {
        date: '2022-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: '男',
        tag: 'Office',
    },


]
function handerSerch() {
    console.log(formInline.keyword);

}
//验证规则
const rules = reactive({
    user: [
        { required: false, message: '请输入姓名', trigger: 'blur' },
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],

})
</script>
<style lang="less" scoped>
.page {
    position: absolute;
    right: 40%;
}

.user-header {
    display: flex;
    justify-content: space-between;
}
</style>