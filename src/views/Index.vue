<template>
  <div class>

    <el-container>

      <el-header>
        <div class="title">
          IVYXO
        </div>

        <div class="reg">
          <el-button type="primary" round @click="registerBtn">注册</el-button>
          <el-button type="success" round @click="loginBtn">登录</el-button>
        </div>

        <div class="loginInfo">
          name
          account
        </div>

      </el-header>

      <el-main>
        <div class="main">
          <el-button type="info" plain @click="webInfoBtn">站点信息</el-button>
          <el-button type="info" plain @click="noteBtn">康奈尔笔记</el-button>
        </div>
      </el-main>

    </el-container>

  </div>
</template>
<script>
export default {
  name: "Index",
  data() {
    return {
      
    };
  },
  methods: {

    registerBtn(){
      console.log("注册");
      this.$router.push({path:'/register',query:{}});
    },

    loginBtn(){
      console.log("登录");
      this.$router.push({path:'/login',query:{}});
    },

    webInfoBtn(){
      console.log("站点信息");
    },

    noteBtn(){
      console.log("康奈尔笔记");
    }
  },
  components: {

  },
  mounted() {}
};
</script>

<style scoped src=''>

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
  }

  .el-header{
    display: inline;
    position: relative;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }

  .title{
    font-weight: bold;
    width: 200px;
    position: absolute;
    top: 10px;
    left: 20px;
  }

  .reg{
    width: 170px;
    text-align: center;
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .main{
    background-color: #fff;
    width: 300px;
    height: 300px;
    text-align: center;
    line-height: 300px;
    margin: 0 auto;
  }

  .loginInfo{
    position: absolute;
    top: 10px;
    right: 10px;
  }

</style>
