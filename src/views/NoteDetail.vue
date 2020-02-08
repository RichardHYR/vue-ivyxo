<template>
  <div class="wrap">
    <div
      class="back_btn"
      @click="handleBack"
    >
      <i class="el-icon-back"></i>
    </div>
    <div
      class="update_btn"
      @click="handleUpdate"
    >
      <i class="el-icon-upload"></i>
    </div>
    <div class="editor_area">

      <div class="editor_area_input">
        <p class="editor_area_input_title">标题: </p>
        <el-input
          class="editor_area_input_area"
          v-model="title"
          placeholder="请输入标题"
          maxlength="31"
          show-word-limit
        ></el-input>
      </div>

      <div class="editor_area_text">
        <p class="editor_area_text_title">（点击相应区域编辑内容）</p>
        <div class="editor_area_text_area">
          <editor
            style="height: 500px;width:500px;margin:0 auto;margin-top: 5px;"
            ref="editor"
            @sendMsg="handleSendMsg"
          ></editor>
        </div>
      </div>

    </div>
    <div class="main">
      <div class="btn_area">
        <p class="date_time">更新时间: {{ time }}</p>
      </div>
      <div class="box">
        <div class="box_header">
          <p class="box_header_title">{{ title }}</p>
        </div>
        <div class="box_center">
          <div
            class="box_center_left"
            v-html="keyword"
            @click="handleContent(1)"
          ></div>
          <div
            class="box_center_right"
            v-html="main"
            @click="handleContent(2)"
          ></div>
        </div>
        <div
          class="box_footer"
          v-html="summary"
          @click="handleContent(3)"
        ></div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      changeSelect:1,
      time: "2020-2-4 23:18:44",
      title: "titleddddddddddssss",
      keyword: "<p>111</p>",
      main: "<p>222</p>",
      summary: "<p>333</p>",
    };
  },

  methods: {
    handleBack() {
      this.$router.push({ path: "/noteList", query: {} });
    },

    handleUpdate(){
      console.log("上传更新的笔记");
    },

    handleSendMsg(val) {
      switch (this.changeSelect) {
        case 1:
          this.keyword = val;
          break;
        case 2:
          this.main = val;
          break;
        case 3:
          this.summary = val;
          break;
      
        default:
          break;
      }
      
    },

    handleContent(val){
      this.changeSelect = val;
      switch (val) {
        case 1:
          this.$refs.editor.setContent(this.keyword);
          break;
        case 2:
          this.$refs.editor.setContent(this.main);
          break;
        case 3:
          this.$refs.editor.setContent(this.summary);
          break;
      
        default:
          break;
      }
    }
  },

  mounted() {
    this.$refs.editor.setContent(this.keyword);
  }
};
</script>
<style lang='css' scoped>
.wrap{
  min-width: 1300px;
  min-height: 1000px;
}
.back_btn {
  display: inline-block;
  cursor: pointer;
  font-size: 35px;
  position: absolute;
  top: 10px;
  left: 20px;
}
.back_btn:hover {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.644), 0 0 6px rgba(0, 0, 0, 0.658);
  border-radius: 30px;
}
.update_btn{
  display: inline-block;
  cursor: pointer;
  font-size: 35px;
  position: absolute;
  top: 10px;
  left: 580px;
}
.update_btn:hover {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.644), 0 0 6px rgba(0, 0, 0, 0.658);
  border-radius: 4px;
}
.editor_area {
  position: absolute;
  top: 70px;
  left: 20px;
  width: 600px;
  height: 800px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.644), 0 0 6px rgba(0, 0, 0, 0.658);
  border-radius: 4px;
  background-color: white;
}
.editor_area_input {
  overflow: hidden;
  width: 550px;
  height: 100px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.644), 0 0 6px rgba(0, 0, 0, 0.658);
  border-radius: 30px;
  margin: 0 auto;
  margin-top: 30px;
  text-align: center;
}
.editor_area_input_title {
  font-size: 20px;
  margin: 0;
  margin-top: 10px;
}
.editor_area_input_area {
  width: 500px;
  margin: 0 auto;
  margin-top: 5px;
}
.editor_area_text {
  overflow: hidden;
  width: 550px;
  height: 600px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.644), 0 0 6px rgba(0, 0, 0, 0.658);
  border-radius: 30px;
  margin: 0 auto;
  margin-top: 30px;
}
.editor_area_text_title {
  font-size: 20px;
  margin: 0;
  margin-top: 10px;
  text-align: center;
}
.main {
  position: absolute;
  top: 20px;
  left: 650px;
  width: 600px;
  height: 850px;
}
.btn_area {
  width: 600px;
  height: 50px;
  /* background-color:purple; */
}
.date_time {
  margin: 0;
  text-align: right;
  font-size: 20px;
  line-height: 50px;
}
.box {
  cursor: pointer;
  width: 600px;
  height: 800px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.644), 0 0 6px rgba(0, 0, 0, 0.658);
  border-radius: 4px;
  background-color: white;
}
.box_header {
  overflow: hidden;
  width: 100%;
  height: 5%;
  background-color: rgb(255, 183, 88);
}
.box_header_title {
  margin: 0;
  margin-left: 10px;
  margin-top: 8px;
  font-size: 18px;
}
.box_center {
  overflow: hidden;
  width: 100%;
  height: 80%;
}
.box_center_left {
  /* overflow: hidden; */
  overflow-y: auto;
  width: 30%;
  height: 100%;
  float: left;
  background-color: rgb(230, 165, 80);
}
.box_center_right {
  overflow-y: auto;
  width: 70%;
  height: 100%;
  float: left;
  background-color: rgb(207, 149, 72);
}
.box_footer {
  overflow-y: auto;
  width: 100%;
  height: 15%;
  background-color: rgb(255, 169, 56);
}
</style>