<template>
  <div class="box">
    <div class="top"></div>
    <i class="el-icon-back" @click="back"></i>
    <div class="register_border">
      <div class="top"></div>
      <div class="register_title">注册</div>

      <div class="register_input">
        <div class="register_input_title">账户:</div>
        <el-input class="register_input_box" placeholder="请输入账号" v-model="account"></el-input>
      </div>

      <div class="register_input">
        <div class="register_input_title">昵称:</div>
        <el-input class="register_input_box" placeholder="请输入昵称" v-model="name"></el-input>
      </div>

      <div class="register_input">
        <div class="register_input_title">密码:</div>
        <el-input class="register_input_box" placeholder="请输入密码" v-model="psw1"></el-input>
      </div>

      <div class="register_input">
        <div class="register_input_title">确认密码:</div>
        <el-input class="register_input_box" placeholder="请输入密码" v-model="psw2"></el-input>
      </div>

      <div class="register_input">
        <el-button type="primary" round @click="register">注册</el-button>
      </div>
      

    </div>
  </div>
</template>
<script>
export default {
  name: "Register",
  data() {
    return {
      "account":"",
      "name":"",
      "psw1":"",
      "psw2":""
    };
  },
  methods: {

    back(){
      this.$router.go(-1);
    },

    register(){
      console.log("注册:" + this.account
                  + "..." + this.name
                  + "..." + this.psw1
                  + "..." + this.psw2);
    }
  },
  components: {

  },
  mounted() {}
};
</script>

<style scoped src=''>
.box{
  width: 100%;
  height: 100%;
  background-color: #DCDFE6;
}
.top{
  height: 50px;
}
.register_border{
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  width: 500px;
  height: 500px;
  margin: 0 auto;
}
.register_title{
  font-size: 40px;
  height: 60px;
  width: 100px;
  margin: 0 auto;
}
.register_input{
  width: 400px;
  height: 50px;
  margin: 20px auto;
  text-align: center;
}
.register_input_title{
  font-size: 30px;
  display: inline;
}
.register_input_box{
  width: 250px;
  height: 50px;
  float: right;
  margin-top: 5px;
}
.el-icon-back{
  margin-left: 50px;
  font-size: 50px;
}
</style>
