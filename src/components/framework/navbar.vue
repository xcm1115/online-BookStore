<template>
    <div>
        <el-header>
            <el-row class="nav" type="flex" align="middle">
                <el-col :span="4" class="box"><img class="image" src="/static/logo.png" @click="toHome()"></el-col>
                <el-col :span="10">
                    <el-menu :default-active="$route.path" router="true" class="el-menu-demo" mode="horizontal" active-text-color="#4F6E9D">
                        <el-menu-item index="/">首页</el-menu-item>
                        <el-menu-item index="/category">书籍分类</el-menu-item>
                        <el-menu-item index="/newProduct">新货上架</el-menu-item>
                        <el-menu-item index="/onSale">特价市场</el-menu-item>
                    </el-menu>
                </el-col>
                <el-col :span="4" class="box">
                    <el-input class="myInput1 myInput2" placeholder="搜索书籍" active-text-color="#4F6E9D" size="small" prefix-icon="el-icon-search" v-model="input" @focus="InputFocus" @blur="InputBlur" @confirm="toSearch()">
                    </el-input>
                </el-col>

                <el-col :span="1" :offset="2" class="box">
                    <div v-if="this.$cookies.get('status') == 'unlogin' || !this.$cookies.get('status')">
                        <el-button class="myButton el-icon-user" @click="toLogin()" circle></el-button>
                    </div>

                    <div v-if="this.$cookies.get('status') == 'logined'">
                        <el-dropdown>
                            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item icon="el-icon-setting"><label @click="setting()">个人中心</label></el-dropdown-item>
                                <el-dropdown-item icon="el-icon-circle-close"><label @click="exit()">退出登录</label></el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </el-col>

                <el-col :span="3">
                    <!-- <div>{{this.ID}}</div> -->
                    <el-menu :default-active="$route.path" router="true" class="el-menu-demo" mode="horizontal" active-text-color="#4F6E9D">
                        <el-menu-item index="/shopping">购物车</el-menu-item>
                        <el-menu-item index="/order">订单</el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
        </el-header>

        <el-main>
            <router-view></router-view>
        </el-main>

        <div class="footer" v-show="$route.name!=='login' && $route.name!=='register'">
            <el-row class="border" type="flex">
                <el-col :span="24">
                    <div class="contact">© 联系方式：smallFrogBookstore@163.com</div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                input: '',
            }
        },
        methods: {
            toLogin() {
                this.$router.push({
                    path: '/login'
                })
            },
            toHome() {
                this.$router.push({
                    path: '/'
                })
            },
            setting() {
                this.$router.push({
                    path: '/setting'
                })
            },
            exit() {
                this.$cookies.set("status", "unlogin");
                location.reload();
            }
        }
    }
</script>

<style scope>
    .nav {
        width: 100%;
        top: 0;
        left: 0;
        right: 0;  
        background-color: #FFFFFF;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        position: fixed;
        z-index: 999;
    }

    .el-menu.el-menu--horizontal {
        border-bottom: none;
    }

    .el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
    .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
        color: #4F6E9D;
    }

    .el-dropdown-menu__item:focus,
    .el-dropdown-menu__item:not(.is-disabled):hover {
        color: #4F6E9D;
    }

    .box {
        background-color: #FFFFFF;
        text-align: center;
        color: #4F6E9D;
        font-size: 20px;
    }

    .el-menu-demo {
        margin-left: 30px;
    }

    .image {
        margin-left: 20px;
        width: 200px;
    }

    .el-icon-user {
        float: right;
    }

    /* 自定义类+内置类 */
    .myInput1 input.el-input__inner:focus {
        border-color: #4F6E9D;
    }

    .myInput2 input.el-input__inner {
        border-radius: 25px;
    }

    .myButton:focus,
    .myButton:hover {
        color: #FFFFFF;
        border-color: #7E9DCA;
        background-color: #7E9DCA;
    }

    .myButton:active {
        color: #FFFFFF;
        border-color: #7E9DCA;
        outline: 0;
    }

    .el-avatar {
        cursor: pointer;
    }


    .footer {
        background-color: #4F6E9D;
	}
	
    .border {
		line-height: 100px;
		margin: 0 auto;
    }
	
	.contact {
		color: #FFFFFF;
		margin-left: 30px;
        text-align: center;
	}
</style>