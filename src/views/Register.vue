<template>
  <div class="wrap">
    <div
      class="home_btn"
      @click="handleHome"
    >
      <i class="el-icon-s-home"></i>
    </div>
    <div class="common_border">
      <p class="common_title">注册</p>
      <div class="common_input">
        <div class="common_input_title">账户:</div>
        <el-input class="common_input_box" placeholder="请输入账号" v-model="account"></el-input>
      </div>

      <div class="common_input">
        <div class="common_input_title">昵称:</div>
        <el-input class="common_input_box" placeholder="请输入昵称" v-model="name"></el-input>
      </div>

      <div class="common_input">
        <div class="common_input_title">密码:</div>
        <el-input class="common_input_box" placeholder="请输入密码" v-model="psw1" show-password></el-input>
      </div>

      <div class="common_input">
        <div class="common_input_title">确认密码:</div>
        <el-input class="common_input_box" placeholder="请输入密码" v-model="psw2" show-password></el-input>
      </div>

      <div class="common_input">
        <el-button type="primary" round @click="handleRegister">注册</el-button>
      </div>
      

    </div>
  </div>
</template>
<script>
import { registerApi } from '@/utils/api_url_utils.js';// 导入我们的api接口
export default {
  data() {
    return {
      "account":"",
      "name":"",
      "psw1":"",
      "psw2":""
    };
  },
  methods: {

    handleHome() {
      this.$router.push({ path: "/", query: {} });
    },

    handleRegister(){
      console.log("注册:" + this.account
                  + "..." + this.name
                  + "..." + this.psw1
                  + "..." + this.psw2);
      // 调用api接口
      let _this = this;
      let params = {
        "account" : _this.account,
        "name" : _this.name,
        "psw1" : _this.psw1,
        "psw2" : _this.psw2
      };                
      registerApi(params).then(res => {
          // 获取数据成功后的其他操作
          console.log("获取接口数据" + JSON.stringify(res));
          if(res.code == 200){
            sessionStorage.setItem("user_account",res.data.account);
            this.$router.push({path:'/login',query:{}});
          }else{
            this.$message({
              message: res.msg,
              type: 'warning'
            });
          }                     
      });
    }
  },
  components: {

  },
  mounted() {}
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
  height: 480px;
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
