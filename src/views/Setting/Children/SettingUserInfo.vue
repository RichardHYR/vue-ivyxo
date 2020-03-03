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
      >{{ birthday }}</p>
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
export default {
  name: "SettingUserInfo",
  data() {
    return {
      "edit":false,
      "account":"dhfjahdfj",
      "name":"djdjjd",
      "sex":0,
      "birthday":"2020-01-09"
    };
  },

  methods: {
    editBtn(){
      this.edit = true;
      console.log("点击了编辑按钮");
    },

    cancelBtn(){
      this.edit = false;
      console.log("点击了取消按钮");
    },

    confirmBtn(){
      this.edit = false;
      console.log("点击了确定按钮");
    }

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
.editBtn{
  margin-top: 20px;
  margin-left: 20px;
}
.cancelBtn, .confirmBtn{
  margin-top: 20px;
  margin-left: 20px;
}
</style>