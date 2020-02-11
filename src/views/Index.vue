<template>
  <div class="wrap">
    <div class="header">

      <div class="logo">IVYXO</div>

      <loginInfo></loginInfo>

      <div
        class="reg"
        v-show="!showLoginInfo"
      >
        <el-button
          type="primary"
          round
          @click="registerBtn"
        >注册</el-button>
        <el-button
          type="success"
          round
          @click="loginBtn"
        >登录</el-button>
      </div>
      
    </div>

    <div class="center">
      <div class="main">
        <el-button
          type="info"
          plain
          @click="webInfoBtn"
        >站点信息</el-button>
        <el-button
          type="info"
          plain
          @click="noteBtn"
        >康奈尔笔记</el-button>
      </div>
    </div>

    <div class="footer">
      <p class="copyright_info">Copyright © 2019-2020 Richard. All rights reserved.</p>
    </div>

  </div>
</template>
<script>
import { isNotNullORBlank, setStore, getStore, removeStore } from "@/utils/utils.js";
import { checkLoginApi, loginOutApi } from "@/utils/api_url_utils.js"; // 导入我们的api接口

export default {
  name: "Index",
  data() {
    return {
      name: "name",
      account: "account"
    };
  },
  methods: {
    
    registerBtn() {
      console.log("注册");
      this.$router.push({ path: "/register", query: {} });
      
    },

    loginBtn() {
      console.log("登录");
      this.$router.push({ path: "/login", query: {} });
      
    },

    webInfoBtn() {
      console.log("站点信息");
      this.$router.push({ path: "/info", query: {} });
    },

    noteBtn() {
      console.log("康奈尔笔记");
      this.$router.push({ path: "/note", query: {} });
    },

  },
  components: {},
  computed:{
    showLoginInfo(){
      return this.$store.state.isLogin;
    }
  },
  mounted() {
    console.log("打包配置的信息:", JSON.stringify(process.env));
  }
};
</script>

<style scoped src=''>
.header, .center, .footer{
  overflow: hidden;
  width: 100%;
}
.header{
  height: 10vh;
}
.logo{
  font-weight: bold;
  width: 200px;
  position: absolute;
  top: 10px;
  left: 20px;
}
.reg {
  width: 170px;
  text-align: center;
  position: absolute;
  top: 10px;
  right: 10px;
}
.loginInfo {
  overflow: hidden;
  position: absolute;
  top: 10px;
  right: 10px;
}

.login_info {
  display: inline;
}

.settingBtn {
  display: inline-block;
  font-size: 25px;
  margin-right: 10px;
  margin-left: 10px;
  /* margin-top: 5px; */
}
.center{
  height: 80vh;
}
.main {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.644), 0 0 6px rgba(0, 0, 0, 0.658);
  border-radius: 30px;
  margin: 0 auto;
  margin-top: 15vh;
  width: 600px;
  height: 300px;
  text-align: center;
  line-height: 300px;
}
.footer{
  height: 10vh;
}
.copyright_info{
  font-size: 20px;
  text-align: center;
}
</style>
