<template>
    <div>
        <div class="settle">
            <div class="viewBox">
                <div class="title">
                    <div class="slogan">填写并核对订单信息</div>
                    <el-button class="submit" type="danger" @click="toPay(userInfo)">提交订单</el-button>
                </div>
                <el-divider></el-divider>

                <el-row type="flex" align="middle">
                    <el-col :span="4">
                        <el-button icon="el-icon-caret-left" class="back" @click="goBack()">上一步</el-button>
                    </el-col>
                    <el-col :span="20">
                        <el-steps :active="1" finish-status="success" simple>
                            <el-step title="购物车" icon="el-icon-s-goods" @click="toCart()"></el-step>
                            <el-step title="下单" icon="el-icon-s-claim"></el-step>
                            <el-step title="付款" icon="el-icon-s-finance"></el-step>
                            <el-step title="出库" icon="el-icon-s-home"></el-step>
                            <el-step title="成功交易" icon="el-icon-success"></el-step>
                        </el-steps>
                    </el-col>
                </el-row>

                <el-divider></el-divider>

                <div class="commodity">
                    <el-row type="flex" align="middle">
                        <el-col :span="3" class="cTitle">商品图片</el-col>
                        <el-col :span="9" class="cTitle">商品名称</el-col>
                        <el-col :span="6" class="cTitle">单价</el-col>
                        <el-col :span="6" class="cTitle">数量</el-col>
                    </el-row>
                </div>

                <div v-if="this.cart[0]">
                    <div class="commodity" v-for="(book, index) in cart" :key="index">
                        <el-row type="flex" align="middle">
                            <el-col :span="3">
                                <img class="bookImg" :src="'https://www.xiaoqw.online/smallFrog-bookstore/img/' + book.book_Img">
                            </el-col>
                            <el-col :span="9">{{ book.book_Name }}</el-col>
                            <el-col :span="6">{{ book.unit_Price }}</el-col>
                            <el-col :span="6">{{ book.count }}</el-col>
                        </el-row>
                    </div>
                    <el-divider></el-divider>

                    <div class="orderInfo">
                        <div class="left">
                            <div class="infoTitle">收货信息</div>
                            <div class="info">名字：{{ userInfo.Logname }}</div>
                            <div class="info">电话：{{ userInfo.Phone }}</div>
                            <div class="info">地址：{{ userInfo.Address }}</div>
                        </div>
                        <el-button class="modify" type="info" @click="handleEdit()" plain>修改</el-button>
                    </div>
                    <el-divider></el-divider>

                    <div class="settleFooter">
                        <div class="leftImg"><img class="settleImg" src="../../../static/orderConfirm.png"></div>
                        <div class="total">
                            <div class="postage">商品总额：{{ totalPrice }} 元</div>
                            <div class="postage">运费：{{ postage }} 元</div>
                            <div class="payPrice">应付金额：{{ totalPrice + postage }} 元</div>
                        </div>
                    </div>
                </div>

                <div v-if="!this.cart[0]">
                    <el-row type="flex" align="middle">
                        <el-col :span="24" style="text-align: center;">暂无商品</el-col>
                    </el-row>
                    <el-divider></el-divider>

                    <div class="orderInfo">
                        <div class="left">
                            <div class="infoTitle">收货信息：无</div>
                        </div>
                        <el-button class="modify" type="info" @click="modify()" plain>修改</el-button>
                    </div>
                    <el-divider></el-divider>

                    <div class="settleFooter">
                        <div class="leftImg"><img class="settleImg" src="../../../static/orderConfirm.png"></div>
                        <div class="total">
                            <div class="postage">商品总额：0 元</div>
                            <div class="postage">运费：0 元</div>
                            <div class="payPrice">应付金额：0 元</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 收货信息编辑弹出框 -->
            <el-dialog title="修改收货信息" :visible.sync="editVisible" width="35%">
                <el-form label-position="left" :rules="rules" ref="userInfo" :model="userInfo" label-width="100px">
                    <el-form-item label="名字" prop="Logname">
                        <el-input v-model.number="userInfo.Logname"></el-input>
                    </el-form-item>
                    <el-form-item label="电话" prop="Phone">
                        <el-input v-model.number="userInfo.Phone"></el-input>
                    </el-form-item>
                    <el-form-item label="收货地址" prop="Address">
                        <el-input type="textarea" v-model="userInfo.Address"></el-input>
                    </el-form-item>
                </el-form>

                <div slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="modify('userInfo')" plain>修改</el-button>
                    <el-button type="danger" @click="editVisible = false" plain>取消</el-button>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        inject: ['reload'],
        data() {
            return {
                input: '',
                userInfo: [],
                postage: 0,
                cart: [],
                count: 0,
                totalPrice: 0,
                editVisible: false,
            }
        },
        created() {
            var address = "https://www.xiaoqw.online/smallFrog-bookstore/server/settleUserInfo.php";
            var user_ID = this.$cookies.get('user_ID');
            let count = 0;
            let totalPrice = 0;

            this.cart = this.$route.query.cart;

            for (let i = 0; i < this.cart.length; i++) {
                count += parseFloat(this.cart[i].count);
                totalPrice += parseFloat(this.cart[i].unit_Price * this.cart[i].count);
            }
            this.count = count;
            this.totalPrice = totalPrice;

            axios.post(address, user_ID).then(res => {
                this.userInfo = res.data; //获取数据
                console.log("success");
                console.log(this.userInfo);
            });
        },
        methods: {
            goBack() {
                this.$router.go(-1);
            },
            toCart() {
                this.$router.push({
                    path: '/shopping/cart'
                })
            },
            // 编辑操作
            handleEdit() {
                this.editVisible = true;
            },
            modify(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        console.log('修改成功！');
                        this.$message({
                            showClose: true,
                            message: '修改成功！',
                            type: 'success',
                            center: true
                        });
                        this.editVisible = false;
                    } else {
                        console.log('error!');
                        return false;
                    }
                });
            },
            toPay(e) {
                if (!this.cart[0]) {
                    this.$message({
                        showClose: true,
                        message: '无订单信息！',
                        type: 'warning',
                        center: true
                    });
                } else {
                    this.$router.push({
                        path: "/shopping/pay",
                        query: {
                            User_name: e.ID,
                            User_tel: e.Phone,
                            User_address: e.Address,
                            cart: this.cart
                        }
                    });
                }
            }
        }
    }
</script>

<style scoped>
    .settle {
        width: 80%;
        margin: 0 auto;
        /* background-color: #f5f5f5; */
    }

    .settle .viewBox {
        width: 80%;
        margin: 0 auto;
    }

    .settle .viewBox .title {
        height: 100px;
        display: flex;
        align-items: center;
    }

    .settle .viewBox .title .slogan {
        width: 90%;
        height: 100px;
        line-height: 100px;
        font-size: 24px;
        color: #303133;
        float: left;
    }

    .settle .viewBox .title .submit {
        width: 150px;
        height: 50px;
        border-radius: 0;
        font-size: 16px;
    }

    .settle .viewBox .back {
        width: 100px;
        border-radius: 0;
    }

    .settle .viewBox .commodity {
        width: 80%;
        margin: 0 auto;
        text-align: center;
        margin-bottom: 10px;
    }

    .settle .viewBox .commodity .cTitle {
        height: 60px;
        line-height: 40px;
        font-weight: bold;
    }

    .settle .viewBox .commodity .bookImg {
        width: 60px;
    }

    .settle .viewBox .orderInfo {
        height: 180px;
        display: flex;
        align-items: center;
    }

    .settle .viewBox .orderInfo .left {
        width: 90%;
        height: 180px;
        line-height: 180px;
        font-size: 18px;
        color: #606266;
    }

    .settle .viewBox .orderInfo .left .infoTitle {
        width: 90%;
        height: 30px;
        line-height: 30px;
        font-size: 22px;
        color: #303133;
        margin-bottom: 30px;
    }

    .settle .viewBox .orderInfo .left .info {
        width: 90%;
        height: 40px;
        line-height: 40px;
        font-size: 17px;
        color: #606266;
    }

    .settle .viewBox .orderInfo .modify {
        width: 100px;
        height: 40px;
        border-radius: 0;
        font-size: 16px;
    }

    .settle .viewBox .settleFooter {
        width: 100%;
        display: flex;
    }

    .settle .viewBox .settleFooter .leftImg {
        width: 80%;
        /* float: left; */
    }

    .settle .viewBox .settleFooter .settleImg {
        width: 150px;
        float: left;
    }

    .settle .viewBox .settleFooter .total {
        width: 20%;
        height: 150px;
        align-items: center;
    }

    .settle .viewBox .settleFooter .total .postage {
        margin-bottom: 10px;
        float: right;
    }

    .settle .viewBox .settleFooter .total .payPrice {
        margin-top: 30px;
        font-size: 20px;
        color: #4f6e9d;
        float: right;
    }
</style>