<template>
    <el-form
        :model="userInfo"
        :rules="userInfoError"
        ref="ruleForm2"
        label-position="left"
        label-width="0px"
        class="demo-ruleForm login-container"
    >
        <h3 class="title">登陆</h3>
        <el-form-item prop="name">
            <el-input type="text" v-model="userInfo.name" auto-complete="off" placeholder="手机号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input
                type="password"
                v-model="userInfo.password"
                auto-complete="off"
                placeholder="密码"
            ></el-input>
        </el-form-item>
		<el-form-item prop="password">
            <el-input
                type="password"
                v-model="userInfo.password"
                auto-complete="off"
                placeholder="确认密码"
            ></el-input>
        </el-form-item>
        <el-form-item style="width:100%;">
            <el-button
                type="primary"
                style="width:100%;"
                @click="handleSubmit"
                :loading="logining"
            >注册</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import { checkTel, checkPassword } from '@/common/util';
export default {
    data() {
        return {
            logining: false, // logining
            userInfo: {
                name: '',
                password: ''
            }, // 账号密码
            userInfoError: {
                name: [
                    { required: true, message: '请输入账号', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ]
            }, // 账号密码为输入提示
            checked: true // 己住密码
        };
    },
    methods: {
        // 登陆
        handleSubmit() {
            if (!checkTel(this.userInfo.name)) {
                return this.$message({
                    message: '请输入正确的账号',
                    type: 'warning'
                });
            }
            if (!checkPassword(this.userInfo.password)) {
                return this.$message({
                    message: '请输入正确的密码',
                    type: 'warning'
                });
            }
            this.$router.push({ path: '/login' });
        }
    }
};
</script>

<style lang='scss' scoped>
.login-container {
    border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
        margin: 0px auto 40px auto;
        text-align: center;
        color: #505458;
    }
}
</style>
