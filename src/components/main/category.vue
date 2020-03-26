<template>
    <div class="loading-area">
        <el-header>
            <el-row type="flex" justify="space-between" align="middle">
                <el-col :span="8" class="title-left">
                    <i class="el-icon-menu"></i>
                    <span>CATEGORIES</span>
                </el-col>
                <el-col :span="6">
                    <el-input class="myInput1 myInput2 search" placeholder="搜索书籍" active-text-color="#4F6E9D" prefix-icon="el-icon-search" v-model="searchText" @confirm="toSearch()"></el-input>
                </el-col>
                <el-col :span="2">
                    <el-button class="cateButton myButton" @tap="toSearch()">Search</el-button>
                </el-col>
                <el-col :span="8" class="title-right">
                    <el-tag type="warning" size="medium">Books</el-tag>
                </el-col>
            </el-row>
        </el-header>
        <el-container>
            <el-aside width="220px">
                <el-card class="leftNav">
                    <img src="../../../static/cateNav.png" class="leftImg" />
                    <div class="navItem" :class="index == showCategoryIndex ? 'cur' : ''" v-for="(item, index) in navItems" :key="index" @click="showCategory(index)">{{ item }}</div>
                    <div class="navItem" @click="toTop()"><i class="el-icon-arrow-up" style="font-size: 23px;"></i></div>
                </el-card>
            </el-aside>
            <el-main v-loading.fullscreen.lock="loading" element-loading-background="#FFFFFF">

                <el-row>
                    <el-card class="row" v-for="(book, index) in Books[showCategoryIndex].slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="index" :body-style="{ padding: '0px' }">
                        <el-image class="img" @click="toInfo(book)" :src="'http://www.xiaoqw.online/img/bookImg/' + book.img"></el-image>
                        <el-link class="name" @click="toInfo(book)" :underline="false">
                            <i class="el-icon-reading readIcon"></i>
                            {{ book.Name }}
                        </el-link>
                        <div class="author">{{ book.Author }}</div>

                        <div style="position: absolute; bottom: 0;">
                            <el-row type="flex" align="middle">
                                <el-col :span="12" class="price">¥ {{ book.Price }}</el-col>
                                <el-col :span="12">
                                    <button class="shop" @click="open()">
                                        <i class="el-icon-shopping-bag-1 icon"></i>
                                    </button>
                                </el-col>
                            </el-row>
                            <el-rate class="rate" v-model="book.Commend" :colors="colors" disabled></el-rate>
                        </div>
                    </el-card>
                </el-row>

                <el-row class="page">
                    <el-pagination background @current-change="handleCurrentChange" :current-page="currentPage" :page-size="pagesize" :total="Books[showCategoryIndex].length">
                    </el-pagination>
                </el-row>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                loading: true,
                scroll: 0, //第一步：定义初始滚动高度
                activeIndex: "1",
                bookPath: 1,
                searchText: "", //搜索关键字
                showCategoryIndex: 0,
                navItems: ["全部书籍", "计算机类", "英语类", "其他类"],
                Books: [
                    []
                ],
                currentPage: 1,
                pagesize: 20
            };
        },
        //第二步：mounted中的方法代表dom已经加载完毕
        mounted: function() {
            window.addEventListener('scroll', this.handleScroll);
        },
        created() {
            var address1 = "http://www.xiaoqw.online/server/bookstore/allBooks.php";
            var address2 = "http://www.xiaoqw.online/server/bookstore/pcBooks.php";
            var address3 = "http://www.xiaoqw.online/server/bookstore/enBooks.php";
            var address4 = "http://www.xiaoqw.online/server/bookstore/otherBooks.php";

            axios.post(address1).then(res => {
                    this.Books[0] = res.data; //获取数据
                    console.log("success");
                    console.log(this.allBooks);
                }),
                axios.post(address2).then(res => {
                    this.Books[1] = res.data; //获取数据
                    console.log("success");
                    console.log(this.pcBooks);
                }),
                axios.post(address3).then(res => {
                    this.Books[2] = res.data; //获取数据
                    console.log("success");
                    console.log(this.enBooks);
                }),
                axios.post(address4).then(res => {
                    this.Books[3] = res.data; //获取数据
                    console.log("success");
                    console.log(this.otherBooks);
                    this.loading = false;
                })
        },
        methods: {
            handleCurrentChange: function(currentPage) {
                this.currentPage = currentPage
            },
            //第三步：用于存放页面函数
            handleScroll() {
                this.scroll = $(window).height() + $(document).scrollTop()
            },
            toTop() {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            },
            toInfo(e) {
                this.$router.push({
                    path: "/bookInfo",
                    query: {
                        ID: e.ID
                    }
                });
            },
            showCategory(index) {
                this.showCategoryIndex = index;
            },
            open() {
                this.$confirm("确定将此书加入购物车?", "BookStore", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "warning"
                    })
                    .then(() => {
                        this.$notify({
                            title: "SHOP",
                            message: "成功加入购物车!",
                            type: "success"
                        });
                    })
                    .catch(() => {});
            }
        },
        //第四步：当再次进入（前进或者后退）时，只触发activated（注：只有在keep-alive加载时调用）
        activated() {
            if (this.scroll > 0) {
                window.scrollTo(0, this.scroll);
                window.addEventListener('scroll', this.handleScroll);
            }
        },
        //第五步：deactivated 页面退出时关闭事件 防止其他页面出现问题
        deactivated() {
            window.removeEventListener('scroll', this.handleScroll);
        }
    };
</script>

<style>
    .title-left {
        line-height: 100px;
        margin-left: 20px;
        font-size: 25px;
        color: #4f6e9d;
    }

    .title-right {
        line-height: 100px;
        text-align: end;
        margin-right: 20px;
        color: #4f6e9d;
    }

    .search input.el-input__inner {
        width: 320px;
        height: 40px;
    }

    .cateButton {
        border-radius: 25px;
        border: none;
        outline: none;
        background-color: #4f6e9d;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
        color: #ffffff;
    }

    /* main里的样式 */
    .leftNav {
        top: 50%;
        width: 150px;
        height: 410px;
        margin-top: -180px;
        margin-left: 40px;
        position: fixed;
        border-radius: 15px;
        background-color: #4f6e9d;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    }

    .leftNav .leftImg {
        width: 100%;
        margin-bottom: 20px;
        color: #ffffff;
        position: relative;
        border-radius: 12px;
    }

    .leftNav .navItem {
        text-align: center;
        height: 60px;
        cursor: pointer;
        color: #ffffff;
        cursor: pointer;
        position: relative;
    }

    .leftNav .navItem:hover {
        transform: scale(1.05);
    }

    .leftNav .navItem.cur::after {
        color: #ffffff;
        content: "";
        width: 5px;
        height: 22px;
        border-radius: 10px 10px 10px 10px;
        position: absolute;
        background-color: currentColor;
        top: 0;
        right: 0;
        margin: auto;
    }

    .row {
        margin-top: 20px;
        margin-bottom: 20px;
        width: 160px;
        height: 400px;
        margin-left: 30px;
        margin-right: 30px;
        float: right;
        position: relative;
        /* border-radius: 15px; */
    }

    .img {
        width: 100%;
        height: 200px;
        display: block;
        cursor: pointer;
        transition: all 0.6s;
    }

    .img:hover {
        transform: scale(1.1);
    }

    .name {
        padding-top: 14px;
        padding-left: 15px;
        padding-right: 15px;
        font-size: 16px;
    }

    .el-link.el-link--default {
        color: #4f6e9d;
    }

    .el-link.el-link--default:hover {
        color: #7e9dca;
    }

    .readIcon {
        text-align: left;
        padding-right: 5px;
    }

    .author {
        text-align: left;
        color: #909399;
        padding-top: 14px;
        padding-left: 15px;
        padding-right: 15px;
        font-size: 15px;
    }

    .price {
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 15px;
        padding-left: 15px;
        padding-top: 4px;
    }

    .shop {
        margin-top: 10px;
        margin-bottom: 10px;
        border: none;
        outline: none;
        background-color: #ffffff;
        font-size: 20px;
        float: right;
        padding-right: 15px;
    }

    .icon {
        color: #4f6e9d;
        cursor: pointer;
        transition: all 0.3s;
    }

    .icon:hover {
        transform: scale(1.1);
    }

    .rate {
        text-align: center;
        padding: 0 10px 14px 10px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both;
    }

    .page {
        margin-top: 30px;
        text-align: center;
    }

    .pageBottom {
        margin-top: 30px;
        margin-bottom: 30px;
        text-align: center;
        color: #c0c4cc;
    }
</style>