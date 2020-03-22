<template>
    <div>
        <el-container>
            <el-aside width="50%">
                <h1 class="homeTitle">smallFrog 书店</h1>
                <p class="content">我希望政通人和，使大家能安安静静坐下来，想一点事，读一点书，写一点文章。</p>
                <el-button class="startBtn" @click="toCate()">Get Stated</el-button>
            </el-aside>
            <el-main>
                <div class="indexImg">
                    <el-image src="/static/background1.png"></el-image>
                </div>
            </el-main>
        </el-container>

        <div class="recommend">
            <h1 class="recommendTitle">为您推荐</h1>
            <div class="recLine" v-for="(books, index) in transRecBooks" :key="index">
                <div v-for="(book, index) in books" :key="index">
                    <el-card class="row" :body-style="{ padding: '0px' }">
                        <el-image class="img" @click="toInfo(book)" :src="'http://120.55.87.80/img/bookImg/' + book.img"></el-image>
                        <div>
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

    export default {
        data() {
            return {
                recBooks: [],
                transRecBooks: [],
            }
        },
        created() {
            var address = "http://120.55.87.80/server/BookStore/recommend.php";

            axios.post(address).then(res => {
                //这里是ES6的写法，get请求的地址
                this.recBooks = res.data; //获取数据
                console.log("success");
                console.log(this.recBooks);
                this.transRec();
            })
        },
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
        margin-left: 150px;
    }

    .indexImg {
        width: 500px;
        margin: 0 auto;
    }

    .content {
        width: 400px;
        color: #333333;
        font-size: 18px;
        line-height: 35px;
        text-align: left;
        margin-left: 150px;
    }

    .startBtn {
		width: 150px;
		height: 40px;
        margin-left: 150px;
        margin-top: 50px;
		border-radius: 25px;
		border: none;
		outline: none;
		background-color: #4F6E9D;
		color: #FFFFFF;
		box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
	}
	
	.startBtn:focus,.startBtn:hover {
		color: #FFFFFF;
		border-color: #7E9DCA;
		background-color: #7E9DCA;
	}
	
	.startBtn:active {
		color: #FFFFFF;
		border-color: #7E9DCA;
		outline: 0;
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

    .recommend .recLine .row {
        width: 200px;
        margin-top: 20px;
        margin-bottom: 20px;
        margin-left: 40px;
        margin-right: 40px;
        /* border-radius: 15px; */
        position: relative;
    }

    .recommend .recLine .row .img {
        width: 80%;
        height: 80%;
        display: block;
        cursor: pointer;
        margin: 0 auto;
        padding-top: 20px;
    }

    .recommend .recLine .row .name {
        padding-top: 14px;
        padding-left: 20px;
        padding-right: 20px;
        font-size: 16px;
    }

    .el-link.el-link--default {
        color: #4f6e9d;
    }

    .el-link.el-link--default:hover {
        color: #7e9dca;
    }

    .recommend .recLine .row .readIcon {
        text-align: left;
        padding-right: 5px;
    }

    .recommend .recLine .row .rate {
        text-align: center;
        padding: 10px 10px 14px 10px;
    }
</style>