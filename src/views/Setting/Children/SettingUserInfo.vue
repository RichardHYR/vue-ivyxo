<template>
  <div class="info">
    <div class="info_item">
      <p class="info_item_title">账户:</p>
      <p class="info_item_value">{{ account }}</p>
    </div>

    <div class="info_item">
      <p class="info_item_title">昵称:</p>
      <p
        v-if="!edit"
        class="info_item_value"
      >{{ name }}</p>
      <el-input
        v-if="edit"
        style="margin-left:10px; width: 200px;"
        v-model="name"
        placeholder="请输入昵称"
      ></el-input>
    </div>

    <div class="info_item">
      <p class="info_item_title">性别:</p>
      <p
        v-if="!edit"
        class="info_item_value"
      >{{ sex == 0?"未知":(sex == 1?"男":"女") }}</p>
      <el-radio-group
        v-if="edit"
        style="margin-left:10px;"
        v-model="sex"
      >
        <el-radio :label="0">未知</el-radio>
        <el-radio :label="1">男</el-radio>
        <el-radio :label="2">女</el-radio>
      </el-radio-group>
    </div>

    <div class="info_item">
      <p class="info_item_title">生日:</p>
      <p
        v-if="!edit"
        class="info_item_value"
      >{{ birthday == null?"未设置":birthday }}</p>
      <el-date-picker
        v-if="edit"
        style="margin-left:10px;"
        v-model="birthday"
        type="date"
        placeholder="选择日期"
        format="yyyy-MM-dd"
        value-format="yyyy-MM-dd"
      >
      </el-date-picker>
    </div>

    <div class="info_item">
      <p class="info_item_title">邮箱:</p>
      <p
        v-if="!edit"
        class="info_item_value"
      >{{ email != ""?email:"未设置" }}</p>
      <el-input
        v-if="edit"
        style="margin-left:10px; width: 200px;"
        v-model="email"
        placeholder="请输入邮箱"
      ></el-input>
    </div>

    <div class="info_item">
      <p class="info_item_title">微信账号:</p>
      <p
        v-if="!edit"
        class="info_item_value"
      >{{ wechatAccount != ""?wechatAccount:"未设置" }}</p>
      <el-input
        v-if="edit"
        style="margin-left:10px; width: 200px;"
        v-model="wechatAccount"
        placeholder="请输入微信账号"
      ></el-input>
    </div>

    <el-button
      @click="editBtn"
      class="editBtn"
      type="primary"
      round
      v-if="!edit"
    >编辑</el-button>
    <el-button
      @click="cancelBtn"
      class="cancelBtn"
      type="info"
      round
      v-if="edit"
    >取消</el-button>
    <el-button
      @click="confirmBtn"
      class="confirmBtn"
      type="success"
      round
      v-if="edit"
    >确定</el-button>

  </div>
</template>

<script>
import { isNotNullORBlank, setStore, getStore, removeStore } from "@/utils/utils.js";
import { userUpdateApi, userSettingInfoApi } from '@/utils/api_url_utils.js';// 导入我们的api接口
export default {
  name: "SettingUserInfo",
  data() {
    return {
      "viewData":null,
      "edit":false,
      "account":"defaultAccount",
      "name":"defaultName",
      "sex":0,
      "birthday":"2020-01-09",
      "email":"defaultEmail",
      "wechatAccount":"defaultWechatAccount"
    };
  },

  methods: {
    editBtn(){
      this.edit = true;
    },

    cancelBtn(){
      this.edit = false;
      if(isNotNullORBlank(this.viewData)){
        this.name = this.viewData.name;
        this.sex = this.viewData.sex;
        this.birthday = this.viewData.birthday;
        this.email = this.viewData.email;
        this.wechatAccount = this.viewData.wechatAccount;
      }
    },

    confirmBtn(){
      this.edit = false;
      let params = {
        'name': this.name,
        'sex': this.sex,
        'birthday': this.birthday,
        "email":this.email,
	      "wechatAccount":this.wechatAccount
      }
      console.log("更新的数据:" + JSON.stringify(params));
      this.handleUserUpdateApi(params, (res)=>{
        // 执行更新操作
        this.settingUserInfo();
      });
      
    },

    settingUserInfo(){
      this.handleUserSettingInfoApi((res)=>{
        this.viewData = res.data;
        this.account = res.data.account;
        this.name = res.data.name;
        this.sex = res.data.sex;
        this.birthday = res.data.birthday;
        this.email = res.data.email;
        this.wechatAccount = res.data.wechatAccount;
        //重设用户信息
        let userInfo = getStore('user_info');
        userInfo = JSON.parse(userInfo);
        userInfo.name = res.data.name;
        userInfo.sex = res.data.sex;
        userInfo.birthday = res.data.birthday;
        userInfo.email = res.data.email;
        userInfo.wechatAccount = res.data.wechatAccount;
        this.$store.dispatch('actionSetUserInfo', userInfo);
      });
    },

    handleUserUpdateApi(params, handleSuccess = ()=>{}, handleFail = ()=>{}){
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      userUpdateApi(params).then(res => {
        //关闭加载中
        loading.close();
        // 获取数据成功后的其他操作
        console.log("获取userUpdateApi接口数据" + JSON.stringify(res));
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

    handleUserSettingInfoApi(handleSuccess = ()=>{}, handleFail = ()=>{}){
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      userSettingInfoApi().then(res => {
        //关闭加载中
        loading.close();
        // 获取数据成功后的其他操作
        console.log("获取userSettingInfoApi接口数据" + JSON.stringify(res));
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

  computed: {},

  components: {},

  mounted(){
    this.settingUserInfo();
  }
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
.editBtn{
  margin-top: 20px;
  margin-left: 20px;
}
.cancelBtn, .confirmBtn{
  margin-top: 20px;
  margin-left: 20px;
}
</style>