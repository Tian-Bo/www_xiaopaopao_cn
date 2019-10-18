<!--
 * @Author: tianbo
 * @LastEditors: tianbo
 * @Date: 2019-09-03 17:25:07
 * @LastEditTime: 2019-09-03 17:25:07
 -->
<template>
    <div class="layout-container">
        <el-container class="content-body">
            <div class="navbar">
                <div style="overflow-y: auto; height: 100%;">
                    <el-menu
                        :collapse="isCollapse"
                        class="navbar-el-menu"
                        background-color="#304156"
                        text-color="#BFCBD9"
                        active-text-color="#409EFF"
                    >
                        <h1 class="navbar-logo">{{ isCollapse ? '泡': '小泡泡'}}</h1>
                        <el-submenu
                            v-for="(item, index) in list"
                            :index="index.toString()"
                            :key="index"
                            v-if="item.show"
                        >
                            <template slot="title">
                                <router-link tag="div" :to="item.path" @click.native="Navigation(item.name)">
                                    <i class="el-icon-location"></i>
                                    <span v-show="!isCollapse">{{ item.name }}</span>
                                </router-link>
                            </template>
                            <router-link
                                tag="el-menu-item"
                                :to="val.path"
                                v-for="(val, i) in item.children"
                                :index="i"
                                :key="i.toString()"
                                v-if="val.show"
                                @click.native="NavigationMenu(item.name, val.name)"
                            >{{ val.name }}</router-link>
                        </el-submenu>
                    </el-menu>
                </div>
            </div>

            <el-container>
                <el-header>
                    <div class="header-left">
                        <span @click="isCollapse=false" v-show="isCollapse">
                            <i class="el-icon-s-fold"></i>
                        </span>
                        <span @click="isCollapse=true" v-show="!isCollapse">
                            <i class="el-icon-s-unfold"></i>
                        </span>
                        <span>{{ menuText }}</span>
                    </div>
                    <div class="header-right">
                        <el-dropdown placement="bottom">
                            <i class="el-icon-setting"></i>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item><router-link to="/account_home">个人中心</router-link></el-dropdown-item>
                                <el-dropdown-item>切换用户</el-dropdown-item>
                                <el-dropdown-item @click.native="withdrawLogin">退出登陆</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                        <span>{{ data.username }}</span>
                    </div>
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
export default {
    data() {
        return {
            isCollapse: false, // 关闭显示导航
            list: [], // 列表
            data: [], // 用户信息
            menuText: '概况', // 展示标题
        };
    },
    methods: {
        // TODO 获取用户信息
        getUserInfo() {
            getUserInfo().then(res => {
                if (res.status === 0) {
                    this.data = res.data;
                }
            });
        },
        // TODO 退出登陆
        withdrawLogin() {
            window.sessionStorage.removeItem('token');
            this.$router.push({ path: "/login" });
        },
        // 记录一级菜单
        Navigation(name) {
            this.menuText = name
        },
        // 记录二级菜单
        NavigationMenu(name, menu) {
            this.menuText = name + '/' + menu
        }
    },
    created() {
        this.list = this.$router.options.routes;
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
        .navbar {
            height: 100%;
            background-color: #304156;
            .navbar-el-menu {
                overflow: hidden;
                min-height: 100%;
                .navbar-logo {
                    height: 70px;
                    line-height: 70px;
                    text-align: center;
                    color: #fff;
                    font-size: 30px;
                    background-color: #409eff;
                }
            }
        }
    }
    .el-header {
        display: flex;
        height: 50px !important;
        align-items: center;
        justify-content: space-between;
        background-color: #fff;
        color: #97a8be;
        box-shadow: 0 1px 4px rgba(0, 21, 41, 0.1);
        .header-left {
            display: flex;
            align-items: center;
            i {
                margin-right: 10px;
                font-size: 24px;
                cursor: pointer;
            }
        }
        .header-right {
            display: flex;
            align-items: center;
            i {
                cursor: pointer;
                color: #97a8be;
                font-size: 18px;
                margin-right: 10px;
            }
        }
    }
}
.navbar-el-menu:not(.el-menu--collapse) {
    width: 180px;
}
</style>
