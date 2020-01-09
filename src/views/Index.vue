<template>
  <div class>

    <el-container>

      <el-header>
        <div class="title">
          IVYXO
        </div>

        <div class="reg" v-show="showLoginInfo == 0">
          <el-button type="primary" round @click="registerBtn">注册</el-button>
          <el-button type="success" round @click="loginBtn">登录</el-button>
        </div>

        <div class="loginInfo" v-show="showLoginInfo == 1">
          
          <div class="login_info">
            {{name}}  {{account}}
          </div>

          <div class="settingBtn" @click="settingBtn">
            <i class="el-icon-setting"></i>
          </div>

          <el-button type="danger" round @click="loginOutBtn">退出登录</el-button>

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
import { isNotNullORBlank } from "@/utils/utils.js";
import { checkLoginApi, loginOutApi } from '@/utils/api_url_utils.js';// 导入我们的api接口

export default {
  name: "Index",
  data() {
    return {
      showLoginInfo:0,
      name:"",
      account:""
    };
  },
  methods: {

    settingBtn(){
      this.$router.push({path:'/setting',query:{}});
    },

    loginOutBtn(){
      console.log("退出登录");
      loginOutApi().then(res => {
        // 获取数据成功后的其他操作
        console.log("获取loginOutApi接口数据" + JSON.stringify(res));
        if(res.code == 200){
          //删除本地缓存
          localStorage.removeItem("user_info");
          //切换为按钮
          this.showLoginInfo = 0;
          this.$message({
            message: "退出成功",
            type: 'success'
          });
        }

      });
    },

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
      this.$router.push({path:'/info',query:{}});
    },

    noteBtn(){
      console.log("康奈尔笔记");
      this.$router.push({path:'/noteInfo',query:{}});
    },

    settingLoginInfo(){
      let userInfo = localStorage.getItem("user_info") == null?null:JSON.parse(localStorage.getItem("user_info"));
      console.log("执行登录检查");
      this.name = userInfo.name;
      this.account = userInfo.account;
      this.showLoginInfo = 1;
    },

    isLogin(){
      let userInfo = localStorage.getItem("user_info") == null?null:JSON.parse(localStorage.getItem("user_info"));

      if(!isNotNullORBlank(userInfo)){
        return;
      }
      checkLoginApi(userInfo.id,userInfo.userSession).then(res => {
        // 获取数据成功后的其他操作
        console.log("获取checkLoginApi接口数据" + JSON.stringify(res));
        if(res.code != 200){
          localStorage.removeItem("user_info");
          return;
        }
        this.settingLoginInfo();
      });

    }
  },
  components: {

  },
  mounted() {
    console.log("打包配置的信息:",JSON.stringify(process.env));
    this.isLogin();
  }
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
    overflow: hidden;
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .login_info{
    display: inline;
  }

  .settingBtn{
    display:inline-block;
    font-size: 25px;
    margin-right: 10px;
    margin-left: 10px;
    /* margin-top: 5px; */
  }

</style>
