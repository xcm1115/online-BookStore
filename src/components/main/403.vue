<template>
    <div class="errorPage">
        <img class="errorImg" src="../../../static/403.jpg">
        <div class="errorDesc">暂无权限访问该页面!</div>
        <div class="errorHandle">
            <router-link to="/">
                <el-button class="errorBtn" type="primary" size="large">返回首页</el-button>
            </router-link>
            <el-button class="errorBtn" type="primary" size="large" @click="goBack">返回上一页</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            goBack() {
                this.$router.go(-1);
            }
        }
    }
</script>


<style scoped>
    .errorPage {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
    }

    .errorPage .errorImg {
        width: 600px;
        margin-top: -150px;
    }

    .errorPage .errorDesc {
        font-size: 22px;
        color: #909399;
    }

    .errorPage .errorHandle {
        margin-top: 40px;
        margin-bottom: 40px;
    }

    .errorPage .errorHandle .errorBtn {
        margin-left: 50px;
        margin-right: 50px;
        border-radius: 0;
        background-color: #4F6E9D;
        color: #FFFFFF;
        border: 0;
        outline: 0;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    }

    .errorPage .errorHandle .errorBtn:focus,
    .errorPage .errorHandle .errorBtn:hover {
        color: #FFFFFF;
        border-color: #7E9DCA;
        background-color: #7E9DCA;
    }
</style>