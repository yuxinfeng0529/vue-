<template>
    <el-row class="login-page">
        <el-col :span="12" class="bg"></el-col>
        <el-col :span="6" :offset="3" class="form">
            <!-- 注册相关表单 -->
            <el-form ref="form" size="large" autocomplete="off" v-if="cuch">
                <el-form-item>
                    <h1>注册</h1>
                </el-form-item>
                <el-form-item prop="username">
                    <el-input placeholder="请输入用户名" v-model="userName"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="请输入密码" v-model="password1"></el-input>
                </el-form-item>
                <el-form-item prop="repassword">
                    <el-input type="password" placeholder="请输入再次密码" v-model="password2"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button class="button" type="primary" auto-insert-space @click="onute">
                        注册
                    </el-button>
                </el-form-item>
                <el-form-item class="flex">
                    <el-link type="info" :underline="false" @click="oufa">
                        ← 返回
                    </el-link>
                </el-form-item>
            </el-form>

            <!-- 登录相关表单 -->
            <el-form ref="form" size="large" autocomplete="off" v-else>
                <el-form-item>
                    <h1>登录</h1>
                </el-form-item>
                <el-form-item prop="username">
                    <el-input placeholder="请输入用户名" v-model="Name"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input name="password" type="password" placeholder="请输入密码" v-model="PassWord"></el-input>
                </el-form-item>
                <el-form-item class="flex">
                    <div class="flex">
                        <el-checkbox>记住我</el-checkbox>
                        <el-link type="primary" :underline="false">忘记密码？</el-link>
                    </div>
                </el-form-item>
                <el-form-item>
                    <el-button class="button" type="primary" auto-insert-space @click="torou">登录</el-button>
                </el-form-item>
                <el-form-item class="flex">
                    <el-link type="info" :underline="false" @click="ontr">
                        注册 →
                    </el-link>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>

<script>
import { ref, getCurrentInstance, onMounted, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
export default {
    setup() {
        const router = useRouter()
        const { proxy } = getCurrentInstance()
        const data = reactive({
            data_user: [],
            Name: '',
            PassWord: '',
            userName: '',
            password1: '',
            password2: ''
        })
        const cuch = ref(false)
        function ontr() {
            cuch.value = true
        }
        function oufa() {
            cuch.value = false
        }
        async function getroot() {
            try {
                const res = await new proxy.$request(proxy.$urls.m().fidRood).modeget()
                data.data_user = res.data.data
            } catch (e) {
            }
        }
        function torou() {
            for (var i = 0; i < data.data_user.length; i++) {
                if (data.Name == data.data_user[i].name || data.PassWord == data.data_user.password) {
                    router.push({ name: 'index' })
                } else {
                    ElMessageBox.alert('用户名或密码错误', '错误', {
                        confirmButtonText: 'OK',
                    })
                }
            }
        }
        async function onute() {
            for (var i = 0; i < data.data_user.length; i++) {
                if (data.userName == data.data_user[i].name) {
                    ElMessageBox.alert('用户名重复', '错误', {
                        confirmButtonText: 'OK',
                    })
                    break
                } else if (data.password1 != data.password2) {
                    ElMessageBox.alert('两次密码不相同', '错误', {
                        confirmButtonText: 'OK',
                    })
                    break
                } else {
                    try {
                        const obj = {
                            name: data.userName,
                            password: data.password1
                        }
                        const res = await new proxy.$request(proxy.$urls.m().addRoot, obj).modepost()
                        getroot()
                        oufa()
                        data.userName = ''
                        data.password1 = ''
                        data.password2 = ''
                        break
                    } catch (e) {
                        console.log(e)
                        break
                    }
                }
            }
        }
        onMounted(() => {
            getroot();
        })
        return {
            ...toRefs(data),
            cuch,
            ontr,
            oufa,
            torou,
            onute
        }
    }
}
</script>

<style scoped>
.login-page {
    height: 100vh;
    /* background-color: #fff; */
    background:url('../../assets/4.jpg') no-repeat center / cover;

}

.bg {
    /* background:url('../../assets/2.jpg') no-repeat center / cover; */
    border-radius: 0 20px 20px 0;
}

.form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    user-select: none;
}

.title {
    margin: 0 auto;
}

.button {
    width: 100%;
}

.flex {
    width: 100%;
    display: flex;
    justify-content: space-between;
}
</style>