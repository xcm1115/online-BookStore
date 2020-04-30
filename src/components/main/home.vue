<template>
    <div>
        <el-container>
            <div style="display: flex; margin-top: 40px;">
                <div>
                    <h1 class="homeTitle">SMALLFROG 书店</h1>
                    <p class="content">我希望政通人和，使大家能安安静静坐下来，想一点事，读一点书，写一点文章。</p>
                    <el-button class="startBtn" @click="toCate()">SHOPPING</el-button>
                </div>
                <div>
                    <img class="indexImg" src="../../../static/background.png">
                </div>
            </div>
        </el-container>

        <div class="recommend">
            <h1 class="recommendTitle">为您推荐</h1>
            <div class="recLine" data-wow-duration="2s" v-for="(books, index) in transRecBooks" :key="index">
                <div v-for="(book, index) in books" :key="index">
                    <el-card slot="reference" class="wow slideInUp card" :body-style="{ padding: '0px' }">
                        <img class="img" @click="toInfo(book)" :src="'http://www.xiaoqw.online/smallFrog-bookstore/img/' + book.img">
                        
                        <div class="mask">
                            <el-link class="name" @click="toInfo(book)" :underline="false">
                                <i class="el-icon-reading readIcon"></i>
                                {{ book.Name }}
                            </el-link>
                            <el-rate class="rate" v-model="book.Commend" :colors="colors" disabled></el-rate>
                        </div>
                        
                    </el-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    // import animate from 'animate.css'
    // import {WOW} from 'wowjs';

    export default {
        data() {
            return {
                recBooks: [],
                transRecBooks: [],
            }
        },
        created() {
            var address = "https://www.xiaoqw.online/smallFrog-bookstore/server/recommend.php";

            axios.post(address).then(res => {
                //这里是ES6的写法，get请求的地址
                this.recBooks = res.data; //获取数据
                console.log("success");
                console.log(this.recBooks);
                this.transRec();
            })
        },
        // mounted() {
    	// // 在项目加载完成之后初始化wow
        //     var options={
        //         //默认为true
        //         live:false
        //     };
        //     var wow=new WOW(options);
        // },
        methods: {
            transRec() {
                var Arr = [];
                for (var i = 0, idx = -1; i < this.recBooks.length; i++) {
                    i % 4 == 0 && idx++;
                    if (Object.prototype.toString.call(Arr[idx]) != "[object Array]")
                        Arr[idx] = [];
                    Arr[idx].push(this.recBooks[i]);
                }
                this.transRecBooks = Arr;
            },
            toInfo(e) {
                this.$router.push({
                    path: "/bookInfo",
                    query: {
                        ID: e.ID
                    }
                });
            },
            toCate(e) {
                this.$router.push({
                    path: "/category",
                });
            }
        }
    }
</script>

<style scoped>
    .homeTitle {
        width: 400px;
        color: #333333;
        font-size: 40px;
        font-weight: 600;
        text-align: left;
        margin-left: 200px;
    }

    .indexImg {
        width: 500px;
        margin-left: 200px;
    }

    .content {
        width: 400px;
        color: #333333;
        font-size: 18px;
        line-height: 35px;
        text-align: left;
        margin-left: 200px;
    }

    .startBtn {
        width: 180px;
        height: 50px;
        margin-left: 200px;
        margin-top: 80px;
        border-radius: 0;
        font-size: 16px;
        border: 0;
        outline: 0;
        background-color: #4F6E9D;
        color: #FFFFFF;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    }

    .startBtn:focus,
    .startBtn:hover {
        color: #FFFFFF;
        border-color: #7E9DCA;
        background-color: #7E9DCA;
    }

    .recommend {
        margin-top: 30px;
        padding-top: 30px;
        padding-bottom: 50px;
        /* background-color: #f8f9fb; */
        /* background-image: linear-gradient(#FFFFFF, #F2F2F7); */
    }

    .recommend .recommendTitle {
        color: #333333;
        text-align: center;
        font-size: 30px;
        font-weight: 600;
        margin-bottom: 50px;
    }

    .recommend .recLine {
        justify-content: center;
        display: flex;
    }

    .recommend .recLine .card {
        width: 200px;
        margin-top: 20px;
        margin-bottom: 20px;
        margin-left: 40px;
        margin-right: 40px;
        /* border-radius: 15px; */
        position: relative;
        text-align: justify;
    }

    .recommend .recLine .card .img {
        width: 80%;
        display: block;
        cursor: pointer;
        margin: 0 auto;
        padding-top: 20px;
    }

    .recommend .recLine .card .mask {
        width: 100%;
        margin-top: 20px;
        background-color: #f8fafc;
    }

    .recommend .recLine .card .mask .name {
        padding-top: 14px;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 14px;
        font-size: 16px;
    }

    .recommend .recLine .card .mask .rate {
        text-align: center;
        padding: 0 10px 14px 10px;
    }

    .el-link.el-link--default {
        color: #4f6e9d;
    }

    .el-link.el-link--default:hover {
        color: #7e9dca;
    }
</style>