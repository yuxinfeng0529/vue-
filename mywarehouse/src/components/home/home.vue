<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="180px">
                <el-menu default-active="2" class="hone-lent">
                    <div v-for="(item, index) in homelit" :key="index">
                        <router-link :to="{ path: item.router }" class="rout">
                            <el-menu-item :index=item.id style="color: aliceblue;">
                                <el-icon>
                                    <component :is="item.icon" />
                                </el-icon>
                                <template #title>
                                    <span>{{ item.title }}</span>
                                </template>
                            </el-menu-item>
                        </router-link>
                    </div>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header class="home-tow">
                    <div class="tow-tt">
                        <h2>物流货物后台管理</h2>
                        <el-dropdown>
                            <span>
                                <el-avatar :src="tou" />
                            </span>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item @click="esce">退出</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                    </div>
                </el-header>
                <el-main class="home-ho">
                    <router-view />
                </el-main>
                <!-- <el-footer>Footer</el-footer> -->
            </el-container>
        </el-container>
    </div>
</template>
<script>
import {
    House,
    Setting,
    User,
    Box,
    Refrigerator
} from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import touxiang from '../../assets/psc.jpg'
export default {
    setup() {
        const tou = touxiang
        const homelit = [
            {
                id: '1',
                title: '首页',
                router: 'index',
                icon:'House',
            },
            {
                id: '2',
                title: '用户管理',
                router: 'user',
                icon:'User',
            },
            {
                id: '3',
                title: '货物管理',
                router: 'goods',
                icon:'Box',
            },
            {
                id: '4',
                title: '订单信息',
                router: 'ding',
                icon:'Refrigerator',
            }
        ]
        const router = useRouter()

        function esce() {
            router.push({ name: 'long' })
        }
        return {
            homelit,
            esce,
            tou
        }
    }
}
</script>
<style scoped>
.hone-lent {
    height: 100vh;
    background-color: rgb(52, 58, 64);
}

.hone-lent>>>.el-menu-item:hover {
    background-color: rgb(13, 136, 197);
}


.home-tow {
    background-color: rgb(52, 58, 64);
    position: relative;
    left: -1px;
    color: aliceblue;
}

.tow-tt {
    width: 98%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

}

.home-ho {
    /* background: url(../../assets/3.jpg) no-repeat center / cover; */
    background-color: #D3D3D3;
}

.rout {
    text-decoration: none;
}
</style>