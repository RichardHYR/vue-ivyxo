<template>
  <div class="wrap">
    <div class="box">
      <div class="homeBtn" @click="homeBtn">
        <i class="el-icon-s-home"></i>
      </div>
      <p class="title">设置</p>

      <el-tabs tab-position="left" style="width: 600px;height: 300px;margin: 0 auto;margin-top: 80px;">
        <el-tab-pane>
          <span slot="label"><i class="el-icon-user"></i>  基本信息</span>

          <div class="info">
            <div class="info_item">
              <p class="info_item_title">账户:</p>
              <p class="info_item_value">{{ account }}</p>
            </div>

            <div class="info_item">
              <p class="info_item_title">昵称:</p>
              <p v-if="!edit" class="info_item_value">{{ name }}</p>
              <el-input v-if="edit" style="margin-left:10px; width: 200px;" v-model="name" placeholder="请输入昵称"></el-input>
            </div>

            <div class="info_item">
              <p class="info_item_title">性别:</p>
              <p v-if="!edit" class="info_item_value">{{ sex == 0?"未知":(sex == 1?"男":"女") }}</p>
              <el-radio-group v-if="edit" style="margin-left:10px;" v-model="sex">
                <el-radio :label="0">未知</el-radio>
                <el-radio :label="1">男</el-radio>
                <el-radio :label="2">女</el-radio>
              </el-radio-group>
            </div>

            <div class="info_item">
              <p class="info_item_title">生日:</p>
              <p v-if="!edit" class="info_item_value">{{ birthday }}</p>
              <el-date-picker
                v-if="edit"
                style="margin-left:10px;"
                v-model="birthday"
                type="date"
                placeholder="选择日期"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd">
              </el-date-picker>
            </div>

            <el-button @click="editBtn" class="editBtn" type="primary" round v-if="!edit">编辑</el-button>
            <el-button @click="cancelBtn" class="cancelBtn" type="info" round v-if="edit">取消</el-button>
            <el-button @click="confirmBtn" class="confirmBtn" type="success" round v-if="edit">确定</el-button>

          </div>
        </el-tab-pane>

        <el-tab-pane>
          <span slot="label"><i class="el-icon-lock"></i>  修改密码</span>

          <div class="psw">
            <div class="info_item">
              <p style="width: 80px;text-align: right;" class="info_item_title">旧密码:</p>
              <el-input style="margin-left:10px; width: 300px;" v-model="oldPsw" placeholder="请输入旧密码"></el-input>
            </div>

            <div class="info_item">
              <p style="width: 80px;text-align: right;" class="info_item_title">新密码:</p>
              <el-input style="margin-left:10px; width: 300px;" v-model="newPsw" placeholder="请输入新密码"></el-input>
            </div>

            <div class="info_item">
              <p style="width: 80px;text-align: right;" class="info_item_title">确认密码:</p>
              <el-input style="margin-left:10px; width: 300px;" v-model="confirmPsw" placeholder="请再次确认密码"></el-input>
            </div>

            <el-button @click="updatePswBtn" class="confirmBtn" type="success" round>确定</el-button>

          </div>

        </el-tab-pane>
      </el-tabs>
      
    </div>
  </div>
</template>
<script>
export default {
  name: "Setting",
  data() {
    return {
      "edit":false,
      "account":"dhfjahdfj",
      "name":"djdjjd",
      "sex":0,
      "birthday":"2020-01-09",
      "oldPsw":"",
      "newPsw":"",
      "confirmPsw":""
    };
  },
  methods: {

    updatePswBtn(){
      console.log("点击了更新密码按钮");
    },

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
    },

    homeBtn(){
      this.$router.push({path:'/',query:{}});
    },

  },
  components: {},
  mounted() {
    
  }
};
</script>

<style scoped src=''>
.box{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 500px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.644), 0 0 6px rgba(0, 0, 0, 0.658);
}
.homeBtn{
  font-size: 50px;
  position: absolute;
  left: 20px;
  top: 5px;
}
.title{
  text-align: center;
  margin-top: 20px;
  font-size: 30px;  
}
.info{
  overflow: hidden;
  /* background-color:coral; */
}
.psw{
  overflow: hidden;
  /* background-color:darkcyan; */
}
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
