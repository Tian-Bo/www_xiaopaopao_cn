<!--
 * @Author: tianbo
 * @LastEditors: tianbo
 * @Date: 2019-09-03 17:25:07
 * @LastEditTime: 2019-09-03 17:25:07
 -->
<template>
    <div class="layout-container">
        <el-container class="content-body">
            <navbar :isCollapse="isCollapse" @clickMethod="navbarEvent" />
            <el-container>
                <el-header>
                    <homeHeader
                        :menuList="menuList"
                        :shop_info="shop_info"
                        :menuText="menuText"
                        @clickMethod="homeHeaderEvent"
                        @clickSeeting="homeHeaderSeeting"
                    />
                </el-header>
                <el-main>
                    <slot></slot>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import { getUserInfo } from "@/api/common";

import navbar from "./components/navbar";
import homeHeader from "./components/homeHeader";

export default {
    components: {
        navbar,
        homeHeader
    },
    data() {
        return {
            isCollapse: false, // 关闭显示导航
            shop_info: {}, // 用户信息
            menuText: "概况", // 展示标题
            menuList: [
                {
                    route: "/account_home",
                    text: "个人中心"
                },
                {
                    route: "/account_home",
                    text: "切换用户"
                },
                {
                    route: "/login",
                    text: "退出登陆"
                }
            ]
        };
    },
    methods: {
        // TODO 获取用户信息
        getUserInfo() {
            getUserInfo().then(res => {
                if (res.status === 0) {
                    this.shop_info = res.data;
                }
            });
        },
        // 获取title, 跳转路由
        navbarEvent(item, val) {
            if (typeof(val) != 'undefined') {
                // this.$route.push(val.path);
                return this.menuText = item.name + '/' + val.name;
            }
            // this.$route.push(item.path);
            this.menuText = item.name;
        },
        // 切换navbar
        homeHeaderEvent(data) {
            this.isCollapse = data;
        },
        // 设置
        homeHeaderSeeting(data) {
            // 如果路由位/login 删除token 退出登陆
            if (data.route == "/login") {
                window.sessionStorage.removeItem("token");
            }
            this.$router.push({ path: data.route });
        }
    },
    created() {
        this.getUserInfo();
    }
};
</script>
<style lang="scss" scoped>
.layout-container {
    .content-body {
        position: fixed;
        height: 100%;
        width: 100%;
    }
    .el-header {
        display: flex;
        height: 50px !important;
        align-items: center;
        justify-content: space-between;
        background-color: #fff;
        color: #97a8be;
        box-shadow: 0 1px 4px rgba(0, 21, 41, 0.1);
    }
}
</style>
