<template>
    <div class="card">

        <el-table :data="ding_list" style="width: 100%" @expand-change="handleExpandChange">
            <el-table-column type="expand">
                <template #default="scope">
                    <div m="4" class="guan">
                        <span m="t-0 b-2">配送人员: {{ scope.row.name }}</span>
                        <span m="t-0 b-2">配送人员电话: {{ scope.row.phone }}</span>
                        <span m="t-0 b-2">配送地址: {{ scope.row.address }}</span>
                        <span m="t-0 b-2">配送车辆: {{ scope.row.vehicle }}</span>
                        <h3 style="margin-top: 10px;">出库物品</h3>
                        <el-table :data="dingid_list">
                            <el-table-column label="物品名称" prop="name" />
                            <el-table-column label="仓库名" prop="warehouse" />
                            <el-table-column label="出库时间" prop="date" />
                            <el-table-column label="出库数量" prop="quantity" />
                            <el-table-column label="单位" prop="unit" />
                            <el-table-column label="状态">
                                <p>已确认</p>
                            </el-table-column>
                        </el-table>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="订单号" prop="id" />
            <el-table-column label="订单时间" prop="date" />
            <el-table-column label="负责人" prop="rootName" />
            <el-table-column label="订单状态">
                <p>未完成</p>
            </el-table-column>
            <el-table-column label="支付情况">
                <p>未支付</p>
            </el-table-column>
        </el-table>
        <div class="bott">
            <el-pagination background layout="prev, pager, next" :total="total" @current-change="currentchange" />
        </div>
    </div>
</template>
<script>
import { reactive, toRefs, onMounted, getCurrentInstance, ref } from 'vue'
export default {
    setup() {
        const { proxy } = getCurrentInstance()
        const date = reactive({
            ding_list: [],
            dingid_list: [],
            lins: [],
            page: 1,
            total: 0
        })
        const currentchange = (e) => {
            date.page = e
            getuser()
        }
        async function getding() {
            try {
                const res = await new proxy.$request(proxy.$urls.m().getDing + "?page=" + date.page).modeget()
                date.total = Math.ceil(res.data.data.data.count / 10) * 10
                date.ding_list = res.data.data.data.rows
            } catch (e) {
                console.log(e)
            }
        }
        async function getdingid() {
            try {
                const res = await new proxy.$request(proxy.$urls.m().fidDingid).modeget()
                date.lins = res.data.data
            } catch (e) {
                console.log(e)
            }
        }
        async function handleExpandChange(row, expandedRows) {
            // 判断当前行是否被展开
            if (expandedRows.includes(row)) {
                await getdingid()
                var found = false;
                for (var i = 0; i < date.lins.length; i++) {
                    if (row.id != date.lins[i].dingid) {
                        date.lins.splice(i, 1)
                        i--
                    } else {
                        date.dingid_list = date.lins
                        found = true;
                    }
                }
                if (!found) {
                    return false;
                    row.expand = true;
                }
            } else {
                date.dingid_list = []
                row.expand = false;
            }
        };
        onMounted(() => {
            getding()
            getdingid()
        })
        return {
            ...toRefs(date),
            handleExpandChange,
            currentchange,
        }
    }
}
</script>
<style scoped>
.card {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .1);
    height: 600px;
}

.guan {
    text-align: center;
}

.guan span {
    margin-left: 20px;
}

.bott {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>