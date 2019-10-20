<template>
    <div class="header">
        <div class="header-left">
            <span @click="clickIsCollapse(false)" v-show="isCollapse">
                <i class="el-icon-s-fold"></i>
            </span>
            <span @click="clickIsCollapse(true)" v-show="!isCollapse">
                <i class="el-icon-s-unfold"></i>
            </span>
            <span>{{ menuText }}</span>
        </div>
        <div class="header-right">
            <el-dropdown placement="bottom">
                <i class="el-icon-setting"></i>
                <el-dropdown-menu slot="dropdown">

                    <el-dropdown-item v-for="(item, index) in menuList" :key="index" @click.native="withdrawLogin(item)">
                        {{ item.text }}
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <span>{{ shop_info.username }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        // 个人中心列表
        menuList: {
            type: Array,
            default: [],
        },
        // 店铺信息
        shop_info: {
            type: Object,
            default: {}
        },
        // 展示标题
        menuText: {
            type: String,
            default: '概况'
        }
    },
    data() {
        return {
            isCollapse: false, // 关闭显示导航
        };
    },
    methods: {
        // TODO 设置
        withdrawLogin(item) {
            this.$emit('clickSeeting', item);
        },
        // 点击icon
        clickIsCollapse(bol) {
            this.isCollapse = bol;
            this.$emit("clickMethod", this.isCollapse);
        }
    }
};
</script>
<style lang="scss" scoped>
.header {
    width: 100%;
    height: 100%;
    display: flex;
    height: 50px !important;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    color: #97a8be;
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
</style>
