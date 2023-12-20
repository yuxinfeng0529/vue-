<template>
    <div>
        <el-button type="primary">入库</el-button>
        <el-button type="danger" @click="oukuku">出库</el-button>
    </div>
    <div class="card" style="margin-top: 20px;">
        <el-table :data="ku_list" style="width: 100%" @expand-change="handleExpandChange">
            <el-table-column type="expand">
                <template #default="scope">
                    <div m="4" class="guan">
                        <span m="t-0 b-2">管理员姓名: {{ scope.row.rootname }}</span>
                        <span m="t-0 b-2">管理员电话: {{ scope.row.rootphone }}</span>
                        <h3 style="margin-top: 10px;">仓库物品</h3>
                        <el-table :data="ka_list">
                            <el-table-column label="物品名称" prop="name" />
                            <el-table-column label="入库时间" prop="date" />
                            <el-table-column label="物品数量" prop="quantity" />
                            <el-table-column label="物品单位" prop="unit" />
                            <el-table-column label="操作">
                                <el-button type="danger" text bg size="small">删除</el-button>
                            </el-table-column>
                        </el-table>
                        <div>
                            <el-pagination background layout="prev, pager, next" :total="total"
                                @current-change="currentchange" />
                        </div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="仓库名" prop="name" />
            <el-table-column label="地址" prop="address" />
            <el-table-column label="备注" prop="remarks" />
        </el-table>
    </div>
    <!--  -->
    <div>
        <el-dialog v-model="dialogVisible" title="添加客户" width="800px" center>
            <el-form :model="form" label-width="120px">
                <el-form-item label="请选择仓库:">
                    <el-select v-model="form.region" placeholder="请选择仓库">
                        <el-option label="冷冻仓库" value="仓库一" @click="chang" />
                        <el-option label="普通仓库" value="仓库二" @click="chang" />
                        <el-option label="家具仓库" value="仓库三" @click="chang" />
                        <el-option label="保鲜仓库" value="仓库四" @click="chang" />
                    </el-select>
                </el-form-item>
                <el-form-item label="请选择物品:">
                    <el-select v-model="form.name" placeholder="请选择物品">
                        <div v-for="(item, index) in list_dat" :key="index">
                            <el-option :label=item.name :value=item.name />
                        </div>
                    </el-select>
                </el-form-item>
                <el-form-item label="请输入数量:">
                    <el-input v-model="form.quantity" />
                </el-form-item>
                <el-form-item label="请输入单位:">
                    <el-input v-model="form.unit" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onarray">添加</el-button>
                </el-form-item>
            </el-form>
            <el-table :data="array" style="width: 100%">
                <el-table-column prop="id" label="id" />
                <el-table-column prop="name" label="物品名称" />
                <el-table-column prop="region" label="仓库名称" />
                <el-table-column prop="quantity" label="数量" />
                <el-table-column prop="unit" label="单位" />
                <el-table-column label="操作">
                    <template #default="scope">
                        <el-button type="danger" text bg size="small" @click="delarr(scope.row.id)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-button type="primary" @click="oudd">下一步</el-button>
        </el-dialog>
    </div>
    <!--  -->
    <div>
        <el-dialog v-model="dialog" title="确认订单" width="800px" center>
            <el-table :data="array" style="width: 100%">
                <el-table-column prop="id" label="id" />
                <el-table-column prop="name" label="物品名称" />
                <el-table-column prop="region" label="仓库名称" />
                <el-table-column prop="quantity" label="数量" />
                <el-table-column prop="unit" label="单位" />
                <el-table-column label="操作">
                    <template #default="scope">
                        <el-button type="danger" text bg size="small" @click="delarr(scope.row.id)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-form :model="kend" label-width="200px">
                <el-form-item label=" 请输入配送人员名字:">
                    <el-input v-model="kend.name" />
                </el-form-item>
                <el-form-item label=" 请输入配送员电话:">
                    <el-input v-model="kend.phone" />
                </el-form-item>
                <el-form-item label=" 请输入配送地址:">
                    <el-input v-model="kend.address" />
                </el-form-item>
                <el-form-item label=" 请输入所需车辆:">
                    <el-input v-model="kend.vehicle" />
                </el-form-item>
                <el-form-item label=" 请输入负责人名字:">
                    <el-input v-model="kend.rootName" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="ondd">返回</el-button>
                    <el-button type="primary" @click="addding">完成</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>
<script>
import { reactive, toRefs, onMounted, getCurrentInstance, ref } from 'vue'
export default {
    setup() {
        const { proxy } = getCurrentInstance()
        const date = reactive({
            ku_list: [],
            ka_list: [],
            page: 1,
            total: 0,
            row: [],
            dialogVisible: false,
            list_dat: [],
            array: [],
            iid: 0,
            dialog: false,
            id: '',
            aar: [],
            dingg:[]
        })
        function ondd() {
            date.dialogVisible = true
            date.dialog = false
        }
        function oudd() {
            date.dialogVisible = false
            date.dialog = true
        }
        const form = reactive({
            region: '',
            name: '',
            quantity: '',
            unit: ''
        })
        const kend = reactive({
            name: '',
            phone: '',
            address: '',
            vehicle: '',
            rootName: ''
        })
        function onarray() {
            date.iid++
            const obj = {
                id: date.iid,
                region: form.region,
                name: form.name,
                quantity: form.quantity,
                unit: form.unit
            }
            date.array.push(obj)
            form.name = '',
                form.region = '',
                form.quantity = '',
                form.unit = ''
        }
        function delarr(id) {
            for (var i = 0; i < date.array.length; i++) {
                if (date.array[i].id == id) {
                    date.array.splice(i, 1);
                    i--
                }
            }
        }
        function chang() {
            if (form.region == '仓库一') {
                ku()
            } else if (form.region == '仓库二') {
                kku()
            } else if (form.region == '仓库三') {
                kkku()
            } else {
                kkkku()
            }
        }
        function oukuku() {
            date.dialogVisible = true
        }
        const currentchange = (e) => {
            date.page = e
            handleExpandChange(date.row)
        }
        async function getku() {
            try {
                const res = await new proxy.$request(proxy.$urls.m().fidKuku).modeget()
                date.ku_list = res.data.data
            } catch (e) {
                console.log(e)
            }
        }
        async function ku() {
            try {
                const res = await new proxy.$request(proxy.$urls.m().getKu + "?page=" + date.page).modeget()
                date.total = Math.ceil(res.data.data.data.count / 5) * 10
                date.ka_list = res.data.data.data.rows
                date.list_dat = res.data.data.data.rows
            } catch (e) {
                console.log(e)
            }
        }
        async function kku() {
            try {
                const res = await new proxy.$request(proxy.$urls.m().getKku + "?page=" + date.page).modeget()
                date.total = Math.ceil(res.data.data.data.count / 5) * 10
                date.ka_list = res.data.data.data.rows
                date.list_dat = res.data.data.data.rows

            } catch (e) {
                console.log(e)
            }
        }
        async function kkku() {
            try {
                const res = await new proxy.$request(proxy.$urls.m().getKkku + "?page=" + date.page).modeget()
                date.total = Math.ceil(res.data.data.data.count / 5) * 10
                date.ka_list = res.data.data.data.rows
                date.list_dat = res.data.data.data.rows

            } catch (e) {
                console.log(e)
            }
        }
        async function kkkku() {
            try {
                const res = await new proxy.$request(proxy.$urls.m().getKkkku + "?page=" + date.page).modeget()
                date.total = Math.ceil(res.data.data.data.count / 5) * 10
                date.ka_list = res.data.data.data.rows
                date.list_dat = res.data.data.data.rows
            } catch (e) {
                console.log(e)
            }
        }
        async function handleExpandChange(row) {
            date.row = row
            // 处理展开行的逻辑...  
            if (row.id == 1) {
                ku()
            } else if (row.id == 2) {
                kku()
            } else if (row.id == 3) {
                kkku()
            } else {
                kkkku()
            }

        }
        async function dinggg() {
            try {
                const res = await new proxy.$request(proxy.$urls.m().fidDing).modeget()
                date.dingg = res.data.data
            } catch (e) {
                console.log(e)
            }
        }
        async function getding(obj) {
            try {
                const res = await new proxy.$request(proxy.$urls.m().addDing, obj).modepost()
            } catch (e) {
                console.log(e)
            }

        }
        async function getdingid(obj) {
            try {
                const res = await new proxy.$request(proxy.$urls.m().addDingid, obj).modepost()
            } catch (e) {
                console.log(e)
            }

        }
        async function urlding() {
            try {
                const res = await new proxy.$request(proxy.$urls.m().fidDing).modeget()
                date.aar = res.data.data
            } catch (e) {
                console.log(e)
            }
        }
        async function addding() {
            var ddd = ref(false)
            var aaa = ref(false)
            while (true) {
                if (ddd.value == false) {
                    const obj = {
                        rootName: kend.rootName,
                        state: '未配送',
                        payment: '未支付',
                        name: kend.name,
                        phone: kend.phone,
                        address: kend.address,
                        vehicle: kend.vehicle,
                        expand: 'false'
                    }
                    await getding(obj)
                    ddd.value = true
                    continue
                } else if (aaa.value == false) {
                    await urlding()
                    aaa.value = true
                    continue
                } else if (aaa.value == true) {
                    await dinggg()
                    for (var i = 0; i < date.array.length; i++) {
                        const jbo = {
                            name: date.array[i].name,
                            warehouse: date.array[i].region,
                            quantity: date.array[i].quantity,
                            unit: date.array[i].unit,
                            state: '已确认',
                            dingid: date.dingg[0].id
                        }
                        await getdingid(jbo)
                    }
                    date.dialogVisible=false
                    date.dialog=false
                    date.array = []
                    break
                }
            }
        }
        onMounted(() => {
            getku()
            dinggg()
        })
        return {
            handleExpandChange,
            ...toRefs(date),
            currentchange,
            oukuku,
            form,
            chang,
            onarray,
            delarr,
            kend,
            oudd,
            ondd,
            addding,
        }
    }
}

</script>
<style scoped>
.card {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .1);
}

.guan {
    text-align: center;
}

.guan span {
    margin-left: 20px;
}
</style>