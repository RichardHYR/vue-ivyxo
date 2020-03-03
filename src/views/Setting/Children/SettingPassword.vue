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