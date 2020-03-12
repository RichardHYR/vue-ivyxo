<template>
  <div class="psw">
    <div class="info_item">
      <p
        style="width: 80px;text-align: right;"
        class="info_item_title"
      >旧密码:</p>
      <el-input
        style="margin-left:10px; width: 300px;"
        v-model="oldPsw"
        show-password
        placeholder="请输入旧密码"
      ></el-input>
    </div>

    <div class="info_item">
      <p
        style="width: 80px;text-align: right;"
        class="info_item_title"
      >新密码:</p>
      <el-input
        style="margin-left:10px; width: 300px;"
        v-model="newPsw"
        show-password
        placeholder="请输入新密码"
      ></el-input>
    </div>

    <div class="info_item">
      <p
        style="width: 80px;text-align: right;"
        class="info_item_title"
      >确认密码:</p>
      <el-input
        style="margin-left:10px; width: 300px;"
        v-model="confirmPsw"
        show-password
        placeholder="请再次确认密码"
      ></el-input>
    </div>

    <el-button
      @click="updatePswBtn"
      class="confirmBtn"
      type="success"
      round
    >确定</el-button>

  </div>
</template>

<script>
import { isNotNullORBlank, setStore, getStore, removeStore } from "@/utils/utils.js";
import { userUpdatePasswordApi } from '@/utils/api_url_utils.js';// 导入我们的api接口
export default {
  name: "SettingPassword",
  data() {
    return {
      "oldPsw":"",
      "newPsw":"",
      "confirmPsw":""
    };
  },

  methods: {

    updatePswBtn(){
      console.log("点击了更新密码按钮");
      let params = {
        "oldPsw":this.oldPsw,
        "newPsw":this.newPsw,
        "confirmPsw":this.confirmPsw
      }
      this.handleUserUpdatePasswordApi(params, (res)=>{
        console.log("更新密码成功");
        //设置为退出登录状态
        this.$store.dispatch('actionLoginOut');
        this.$router.push({ path: '/login', query: {} });
      });

    },

    handleUserUpdatePasswordApi(params, handleSuccess = ()=>{}, handleFail = ()=>{}){
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      userUpdatePasswordApi(params).then(res => {
        //关闭加载中
        loading.close();
        // 获取数据成功后的其他操作
        console.log("获取userUpdatePasswordApi接口数据" + JSON.stringify(res));
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
    },

  },

  computed: {},

  components: {}
};
</script>
<style lang='css' scoped>
.info_item{
  margin-top: 20px;
  margin-left: 20px;
}
.info_item_title{
  margin: 0;
  display: inline-block;
}
.info_item_value{
  margin: 0;
  display: inline-block;
  margin-left: 10px;
}
.confirmBtn{
  margin-top: 20px;
  margin-left: 20px;
}
</style>