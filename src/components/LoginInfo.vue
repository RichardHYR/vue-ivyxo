<template>
  <div class="wrapper" v-show="isShow">
    <div class="btn_area">
      <div class="loginOut_btn">
        <el-button
          type="danger"
          round
          @click="handleLoginOut"
        >退出登录</el-button>
      </div>
      <div
        class="setting_btn"
        @click="handleSetting"
      >
        <i class="el-icon-setting"></i>
      </div>
    </div>
    <p class="login_info_account">{{ account }}</p>
    <p class="login_info_name">{{ name }}</p>
    <el-avatar
      class="login_info_icon"
      :src="circleUrl"
    ></el-avatar>

  </div>
</template>

<script>
import { isNotNullORBlank, setStore, getStore, removeStore } from "@/utils/utils.js";
import { checkLoginApi, loginOutApi } from "@/utils/api_url_utils.js"; // 导入我们的api接口
export default {
  name: "LoginInfo",
  data() {
    return {
      name: "defaultName",
      account: "123456",
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    };
  },

  methods: {

    handleSetting(){
      console.log("点击了设置");
      // //失败
      // this.$message({
      //   message: '尚未开放',
      //   type: 'info'
      // });
      this.$router.push({ path: '/setting', query: {} });
    },

    handleLoginOut(){
      console.log("点击了退出登录");
      this.handleLoginOutApi((res)=>{
        this.$store.dispatch('actionLoginOut');
        this.$router.push({ path: '/', query: {} });
      });
    },

    handleLoginOutApi(handleSuccess = ()=>{}, handleFail = ()=>{}){
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      loginOutApi().then(res => {
        //关闭加载中
        loading.close();
        // 获取数据成功后的其他操作
        if (res.code == 200) {
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

  components: {},

  computed: {
    isShow(){
      // console.log("执行方法:" + getStore('user_info'));
      if(this.$store.state.isLogin){
        let userInfo = getStore('user_info');
        if(isNotNullORBlank(userInfo)){
          userInfo = JSON.parse(userInfo);
          this.name = userInfo.name;
          this.account = userInfo.account;
        }
      }
      return this.$store.state.isLogin;
    }
  },
  
};
</script>
<style lang='css' scoped>
.wrapper {
  overflow: hidden;
  height: 50px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.644), 0 0 6px rgba(0, 0, 0, 0.658);
  border-radius: 30px;

  position: absolute;
  top: 5px;
  right: 5px;
}
.login_info_name,
.login_info_account,
.login_info_icon {
  float: right;
  margin: 0;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
}
.login_info_icon {
  width: 30px;
  height: 30px;
  /* background-color: black; */
  margin-left: 20px;
}
.login_info_name {
  font-size: 20px;
}
.login_info_account {
  font-size: 15px;
  margin-top: 15px;
}
.btn_area {
  width: 150px;
  height: 50px;
  float: right;
}

.loginOut_btn,
.setting_btn {
  position: absolute;
}
.loginOut_btn {
  top: 5px;
  right: 5px;
}
.setting_btn {
  cursor: pointer;
  font-size: 30px;
  top: 4px;
  right: 120px;
}
</style>