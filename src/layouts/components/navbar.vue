<template>
    <div class="navbar">
        <div style="height: 100%">
            <el-menu
                :collapse="isCollapse"
                class="navbar-el-menu"
                background-color="#304156"
                text-color="#BFCBD9"
                active-text-color="#409EFF"
                style="overflow-y: auto; height: 100%;"
            >
                <h1 class="navbar-logo">{{ isCollapse ? '泡': '小泡泡'}}</h1>

                <div
                    :is="label(item)"
                    v-for="(item, index) in list"
                    :index="index.toString()"
                    :key="index"
                    v-if="item.show"
                >
                    <template slot="title" v-if="item.children.length > 1">
                        <router-link
                            tag="div"
                            :to="item.path"
                            @click.native="Navigation(item)"
                        >
                            <i class="iconfont" :class="item.icon"></i>
                            <span>{{ item.name }}</span>
                        </router-link>
                    </template>
                    <router-link
                        tag="el-menu-item"
                        :to="val.path"
                        v-for="(val, i) in item.children"
                        :index="i"
                        :key="i.toString()"
                        v-if="val.show && item.children.length > 1"
                        @click.native="Navigation(item, val)"
                    >{{ val.name }}</router-link>

                    <i v-if="item.children.length <= 1" class="iconfont" :class="item.icon"></i>
                    <span v-if="item.children.length <= 1" slot="title">{{ item.name }}</span>
                </div>
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
        };
    },
    methods: {
        // 记录菜单
        Navigation(item, val) {
            this.$emit("clickMethod", item, val);
        },
        // 计算标签
        label(item) {
            return item.children.length > 1 ? "el-submenu" : "el-menu-item";
        }
    }
};
</script>
<style lang="scss" scoped>
.content-body {
    position: fixed;
    height: 100%;
    width: 100%;
    .navbar-logo {
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: #fff;
        font-size: 30px;
        background-color: #409eff;
    }
    .navbar {
        height: 100%;
        background-color: #304156;
        .navbar-el-menu {
            overflow: hidden;
            min-height: 100%;
        }
        .iconfont {
            width: 16px;
            margin-left: 3px;
            display: inline-block;
            margin-right: 20px;
        }
    }
}
.navbar-el-menu:not(.el-menu--collapse) {
    width: 180px;
    border: none;
}
</style>
