<template>
  <div class="wrap">
    <div class="box">
      <div class="home_btn" @click="homeBtn">
        <i class="el-icon-s-home"></i>
      </div>
      <p class="title">设置</p>

      <el-tabs tab-position="left" style="width: 600px;height: 300px;margin: 0 auto;margin-top: 80px;">
        
        <!-- 基本信息 -->
        <el-tab-pane>
          <span slot="label"><i class="el-icon-user"></i>  基本信息</span>

          <SettingUserInfo></SettingUserInfo>

        </el-tab-pane>

        <!-- 账户密码 -->
        <el-tab-pane>
          <span slot="label"><i class="el-icon-lock"></i>  修改密码</span>

          <SettingPassword></SettingPassword>

        </el-tab-pane>
      </el-tabs>
      
    </div>
  </div>
</template>
<script>
import SettingUserInfo from "../Setting/Children/SettingUserInfo";
import SettingPassword from "../Setting/Children/SettingPassword";
export default {
  name: "Setting",
  data() {
    return {
      
    };
  },
  methods: {

    homeBtn(){
      this.$router.push({path:'/',query:{}});
    },

  },
  components: {
    SettingUserInfo,
    SettingPassword
  },
  mounted() {
    
  }
};
</script>

<style scoped src=''>
*{
  /* border: 1px solid red; */
}
.home_btn {
  cursor: pointer;
  font-size: 50px;
  display: inline-block;
  position: absolute;
  left: 20px;
  top: 5px;
}
.box{
  /* 居中定位 */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 800px;
  height: 500px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.644), 0 0 6px rgba(0, 0, 0, 0.658);
  border-radius: 30px;
  background-color: white;
}
.title{
  text-align: center;
  margin-top: 20px;
  font-size: 30px;  
}
</style>
