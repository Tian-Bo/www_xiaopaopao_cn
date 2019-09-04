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
                                <router-link tag="div" :to="item.path">
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
                        <span>中国/日本/美国</span>
                    </div>
                    <div class="header-right">
                        <el-dropdown placement="bottom">
                            <i class="el-icon-setting"></i>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>查看怪兽</el-dropdown-item>
                                <el-dropdown-item>新增土豆</el-dropdown-item>
                                <el-dropdown-item>删除西红柿</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                        <span>18580557309</span>
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
export default {
    data() {
        return {
            isCollapse: false, // 关闭显示导航
            list: [] // 列表
        };
    },
    created() {
        this.list = this.$router.options.routes;
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
    width: 200px;
}
</style>
