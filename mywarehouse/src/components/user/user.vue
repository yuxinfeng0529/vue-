<template>
    <div>
        <el-button type="primary" @click="onuser">添加用户</el-button>
    </div>
    <div class="card">
        <el-table :data="user_list" style="width: 100%">
            <el-table-column prop="date" label="添加日期" />
            <el-table-column prop="name" label="客户姓名" />
            <el-table-column prop="gender" label="客户性别" />
            <el-table-column prop="age" label="客户年龄" />
            <el-table-column prop="phone" label="客户电话" />
            <el-table-column prop="address" label="客户地址" />
            <el-table-column label="操作">
                <template #default="scope">
                    <el-button type="danger" text bg size="small" @click="deluser(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="bott">
            <el-pagination background layout="prev, pager, next" :total="total" @current-change="currentchange" />
        </div>
    </div>
    <div>
        <el-dialog v-model="dialogVisible" title="添加客户" width="600px" center>
            <el-form :model="form" label-width="120px">
                <el-form-item label="请输入客户姓名:">
                    <el-input v-model="form.name" />
                </el-form-item>
                <el-form-item label="客户性别:">
                    <el-radio-group v-model="form.gender">
                        <el-radio label="男" />
                        <el-radio label="女" />
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="请输入年龄:">
                    <el-input v-model="form.age" />
                </el-form-item>
                <el-form-item label="请输入电话:">
                    <el-input v-model="form.phone" />
                </el-form-item>
                <el-form-item label="请输入地址:">
                    <el-input v-model="form.address" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="adduser">完成</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>
<script>
import { reactive, toRefs, onMounted, getCurrentInstance } from 'vue'
export default {
    setup() {
        const { proxy } = getCurrentInstance()
        const date = reactive({
            user_list: [],
            page: 1,
            total: 0,
            dialogVisible: false
        })
        const form = reactive({
            name: '',
            gender: '',
            age: '',
            phone: '',
            address: ''
        })
        const currentchange = (e) => {
            date.page = e
            getuser()
        }
        function onuser() {
            date.dialogVisible = true
        }
        async function adduser() {
            const obj = {
                name:form.name,
                gender:form.gender,
                age:form.age,
                phone:form.phone,
                address:form.address
            }
            try {
                const res = await new proxy.$request(proxy.$urls.m().addUser, obj).modepost()
                date.dialogVisible = false
                getuser()
            } catch (e) {
                console.log(e)
                date.dialogVisible = false
            }
        }
        async function deluser(id) {
            const obj = { id }
            try {
                const res = await new proxy.$request(proxy.$urls.m().delUser, obj).modepost()
                getuser()
            } catch (e) {
                console.log(e)
            }
        }
        async function getuser() {
            try {
                const res = await new proxy.$request(proxy.$urls.m().getUSer + "?page=" + date.page).modeget()
                date.total = Math.ceil(res.data.data.data.count / 10) * 10
                date.user_list = res.data.data.data.rows
            } catch (e) {
                console.log(e)
            }
        }
        onMounted(() => {
            getuser()
        })
        return {
            ...toRefs(date),
            currentchange,
            deluser,
            onuser,
            form,
            adduser
        }
    }
}
</script>
<style scoped>
.card {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .1);
    height: 513px;
    position: relative;
    margin-top: 30px;
}
.bott{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,-50%);
}
</style>