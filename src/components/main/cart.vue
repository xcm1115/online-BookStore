<template>
    <div>
        <el-row type="flex" align="middle">
            <el-col :span="4">
                <el-image class="bannerLogo" src="../../../static/shoppingCart.jpg"></el-image>
            </el-col>
            <el-col :span="20">
                <div class="banner">
                    <div class="prompt_a">购物车</div>
                    <div class="prompt_b">温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</div>
                </div>
            </el-col>
        </el-row>
        <div class="cart_line"></div>

        <div class="list">
            <el-row type="flex" align="middle">
                <el-col :span="12" class="title">商品名称</el-col>
                <el-col :span="3" class="title">单价</el-col>
                <el-col :span="3" class="title">数量</el-col>
                <el-col :span="3" class="title">小计</el-col>
                <el-col :span="3" class="title">操作</el-col> 
            </el-row>

            <div>
                <el-row type="flex" align="middle">
                    <el-col :span="12"></el-col>
                    <el-col :span="3"></el-col>
                    <el-col :span="3"></el-col>
                    <el-col :span="3"></el-col>
                    <el-col :span="3"></el-col> 
                </el-row>
            </div>
        </div>

        <div class="summary">
            <el-row type="flex" align="middle">
                <el-col :span="6" class="number">共 2 件商品</el-col>
                <el-col :span="14">
                    <div class="price">合计（不含运费）：1000元</div>
                </el-col>
                <el-col :span="4" class="settlement">
                    <div @click="toSettle()">结算</div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {

            }
        },
        created() {
            var address = "https://www.xiaoqw.online/smallFrog-bookstore/server/recommend.php";

            axios.post(address).then(res => {
                
            })
        },
        methods: {
            toSettle(e) {
                this.$router.push({
                    path: "/shopping/settle",
                });
            }
        }
    }
</script>

<style>
    .bannerLogo {
        width: 60%;
        margin-left: 100px;
        margin-top: -25px;
    }

    .banner {
        width: 100%;
        height: 80px;
        display: flex;
        margin-bottom: 20px;
    }

    .banner .prompt_a {
        height: 80px;
        line-height: 80px;
        font-weight: bold;
        font-size: 24px;
        margin-left: 40px;
    }

    .banner .prompt_b {
        height: 80px;
        line-height: 90px;
        font-size: 14px;
        color: #777;
        margin-left: 40px;
    }

    .cart_line {
        width: 100%;
        height: 2px;
        background: #4f6e9d;
    }

    .list {
        width: 85%;
        margin: 0 auto;
        background-color: #f5f5f5;
        text-align: center;
    }

    .list .title {
        height: 100px;
        line-height: 100px;
        font-weight: bold;
    }
    
    .summary {
        width: 85%;
        margin: 0 auto;
        height: 60px;
        line-height: 60px;
        background-color: #f5f5f5;
        text-align: center;
        margin-top: 20px;
    }

    .summary .number {

    }

    .summary .price {
        margin-right: 40px;
        float: right;
    }

    .summary .settlement {
        height: 60px;
        background-color: #4f6e9d;
        color: #ffffff;
    }

    .summary .settlement:hover {
        background-color: #7E9DCA;
    }
</style>
