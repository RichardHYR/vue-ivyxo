<template>
  <div class="wrap">
    <div
      class="home_btn"
      @click="handleHome"
    >
      <i class="el-icon-s-home"></i>
    </div>
    <div class="common_border">
      <p class="common_title">登录</p>
      <div class="common_input">
        <div class="common_input_title">账户:</div>
        <el-input class="common_input_box" placeholder="请输入账号" v-model="account"></el-input>
      </div>

      <div class="common_input">
        <div class="common_input_title">密码:</div>
        <el-input class="common_input_box" placeholder="请输入密码" v-model="psw" show-password @keyup.enter.native="login"></el-input>
      </div>

      <div class="common_input">
        <el-button type="primary" round @click="login">登录</el-button>
      </div>
      

    </div>
  </div>
</template>
<script>
import { isNotNullORBlank, setStore, getStore, removeStore } from "@/utils/utils.js";
import { loginApi } from '@/utils/api_url_utils.js';// 导入我们的api接口
export default {
  name: "Login",
  data() {
    return {
      "account":"",
      "psw":""
    };
  },
  methods: {

    handleHome() {
      this.$router.push({ path: "/", query: {} });
    },

    login(){

      console.log("登录:" + this.account
                  + "..." + this.psw);

      this.handleLoginApi(this.account,this.psw, (res) => {
        this.$store.dispatch('actionSetUserInfo', res.data);
        this.$router.push({path:'/',query:{}});
      });
                
    },

    handleLoginApi(account, psw, handleSuccess = ()=>{}, handleFail = ()=>{}){
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      loginApi(account, psw).then(res => {
        //关闭加载中
        loading.close();
        // 获取数据成功后的其他操作
        console.log("获取loginApi接口数据" + JSON.stringify(res));
        if(res.code == 200){
          //成功
          handleSuccess(res);
        }else{
          //失败
          this.$message({
            message: res.msg,
            type: 'warning'
          });
          handleFail();
        }                   
      }).catch(err => {
        //关闭加载中
        loading.close();
        //失败
        handleFail();
      });
    }
    
  },
  components: {

  },
  mounted() {
    let account = sessionStorage.getItem("user_account");
    if(isNotNullORBlank(account)){
      this.account = account;
    }
  }
};
</script>

<style scoped src=''>
.home_btn {
  cursor: pointer;
  font-size: 50px;
  display: inline-block;
  position: absolute;
  top: 10px;
  left: 30px;
}
.common_border{
   /* 居中定位 */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 500px;
  height: 350px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.644), 0 0 6px rgba(0, 0, 0, 0.658);
  border-radius: 30px;
  background-color: white;
}
.common_title{
  text-align: center;
  font-size: 40px;
  margin: 0;
  margin-top: 50px;
}
.common_input{
  width: 400px;
  height: 50px;
  margin: 20px auto;
  text-align: center;
}
.common_input_title{
  font-size: 30px;
  display: inline;
}
.common_input_box{
  width: 250px;
  height: 50px;
  float: right;
  margin-top: 5px;
}
</style>
