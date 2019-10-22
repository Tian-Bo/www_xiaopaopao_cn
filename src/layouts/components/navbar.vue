<template>
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
                        <router-link
                            tag="div"
                            :to="item.path"
                            @click.native="Navigation(item.name)"
                        >
                            <i class="iconfont" :class="item.icon"></i>
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
</template>

<script>
export default {
    props: {
        // navbar 显示隐藏
        isCollapse: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            list: this.$router.options.routes, // 列表
            menuText: "概况" // 展示标题
        };
    },
    methods: {
        // 记录一级菜单
        Navigation(name) {
            this.menuText = name;
            this.$emit("clickMethod", this.menuText);
        },
        // 记录二级菜单
        NavigationMenu(name, menu) {
            this.menuText = name + "/" + menu;
            this.$emit("clickMethod", this.menuText);
        }
    }
};
</script>
<style lang="scss" scoped>
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
                height: 50px;
                line-height: 50px;
                text-align: center;
                color: #fff;
                font-size: 30px;
                background-color: #409eff;
            }
        }
        .iconfont {
            width: 16px;
            display: inline-block;
            margin-right: 20px;
        }
    }
}
.navbar-el-menu:not(.el-menu--collapse) {
    width: 180px;
}
</style>
