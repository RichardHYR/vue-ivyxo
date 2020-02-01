<template>
  <div class="wrap">
    <!-- 主页按钮 -->
    <div class="homeBtn" @click="homeBtn">
      <i class="el-icon-s-home"></i>
    </div>
    <!-- 添加按钮 -->
    <div class="addBtn" @click="addBtn">
      <i class="el-icon-circle-plus"></i>
    </div>
    <!-- 左 -->
    <div class="main_left">
      <p class="main_left_title">目录</p>

      <div class="main_left_select">
        <el-input
          size="small"
          placeholder="请输入内容"
          @change="handleSelectValue"
          v-model="searchValue">
          <i slot="suffix" @click="handleSelectValue(searchValue)" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
      
      <div v-if="!emptyList" class="main_left_list" v-loading="listLoading">

        <div class="main_left_list_item" v-for="(item, index) in noteList" :key="index">
          <div class="main_left_list_item_del" @click="delBtn(item)">
            <i class="el-icon-delete"></i>
          </div>
          <div class="main_left_list_item_target" @click="noteItem(index)">
            <p class="main_left_list_item_title">{{ item.title }}</p>
            <p class="main_left_list_item_date">{{ item.date }}</p>
          </div>
        </div>

      </div>

      <div class="main_left_page" v-if="!emptyList">
        <el-pagination
          small
          layout="prev, pager, next"
          :pager-count="5"
          :page-size="5"
          :total="50"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          @prev-click="handlePrevClick"
          @next-click="handleNextClick">
        </el-pagination>
      </div>

      <p v-if="emptyList" class="main_left_list_emptyItem">木有找到~</p>

    </div>

    <!-- 右 -->
    <div class="main_right">
      <div class="main_right_head" @click="handleTitle">
        {{ noteDetail.title }}
      </div>
      <div class="main_right_center">
        <div class="main_right_center_left" @click="handleKeyword">
          {{ noteDetail.keyword }}
        </div>
        <div class="main_right_center_right" @click="handleMain">
          <div v-html="noteDetail.main"></div>
        </div>
      </div>
      <div class="main_right_footer" @click="handleSummary">
        {{ noteDetail.summary }}
      </div>
    </div>

    <el-drawer
      size="30%"
      title="正文编辑"
      :visible.sync="drawer"
      direction="ltr"
      :before-close="handleClose"
      @opened="handleOpen(swtichDrawer)">
      <editor ref="editor"></editor>
      <el-button type="primary" round class="editorBtn" @click="editorConfirm">确定</el-button>
    </el-drawer>

    <el-dialog
      title="编辑"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleDialogClose">
      <el-input v-model="editorValue" placeholder="请输入内容"></el-input>
      <div class="dialog_button">
        <el-button @click="editCancelBtn">取消</el-button>
        <el-button @click="editConfirmBtn" type="primary">确定</el-button>
      </div>
    </el-dialog>
    
  </div>
</template>
<script>
export default {
  name: "NoteList",
  data() {
    return {
      "swtichEdit":0,
      "editorValue":"",
      "dialogVisible":false,
      "swtichDrawer":0,
      "drawer":false,
      "emptyList":false,
      "listLoading":false,
      "searchValue":"",
      "noteDetail":{
        "title":"titleInfo",
        "keyword":"keywordInfo",
        "main":"mainInfo",
        "summary":"summaryInfo"
      },
      "noteList":[{"title":"hehe","date":"2020-1-5 19:09:00","keywordContent":"2","mainContent":"3","summaryContent":"4"}
                  ,{"title":"dada","date":"2020-1-8 22:01:51","keywordContent":"6","mainContent":"7","summaryContent":"8"}
                  ,{"title":"lala","date":"2020-1-8 22:01:58","keywordContent":"10","mainContent":"11","summaryContent":"12"}]
    };
  },
  methods: {

    editCancelBtn(){
      this.swtichEdit = 0;
      this.dialogVisible = false;
    },

    editConfirmBtn(){
      console.log("编辑确定");
      switch (this.swtichEdit) {
        case 1:
          this.noteDetail.title = this.editorValue;
          break;
        case 2:
          this.noteDetail.keyword = this.editorValue;
          break;
        case 3:
          this.noteDetail.summary = this.editorValue;
          break;
      
        default:
          break;
      }
      this.swtichEdit = 0;
      this.dialogVisible = false;
    },

    getNoteContent(){
      return this.noteDetail.title;
    },

    noteItem(val){
      console.log("笔记列表:" + val);
      let data = this.noteList[val];
      this.noteDetail.title = data.title;
      this.noteDetail.keyword = data.keywordContent;
      this.noteDetail.main = data.mainContent;
      this.noteDetail.summary = data.summaryContent;
    },

    delBtn(item){
      console.log("删除:" + JSON.stringify(item));
    },

    editorConfirm(){
      console.log("编辑确定:" + this.$refs.editor.getContent());
      this.drawer = false;
      switch (this.swtichDrawer) {
        case 1:
          this.noteDetail.title = this.$refs.editor.getContent();
          break;
        case 2:
          this.noteDetail.keyword = this.$refs.editor.getContent();
          break;
        case 3:
          this.noteDetail.main = this.$refs.editor.getContent();
          break;
        case 4:
          this.noteDetail.summary = this.$refs.editor.getContent();
          break;
        default:
          break;
      }
    },

    handleOpen(val){
      console.log("打开" + val);
      switch (val) {
        case 1:
          this.$refs.editor.setContent(this.noteDetail.title);
          break;
        case 2:
          this.$refs.editor.setContent(this.noteDetail.keyword);
          break;
        case 3:
          this.$refs.editor.setContent(this.noteDetail.main);
          break;
        case 4:
          this.$refs.editor.setContent(this.noteDetail.summary);
          break;
        default:
          break;
      }
    },

    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(() => {
          done();
        })
      .catch(() => {});
    },

    handleDialogClose(done) {
      this.$confirm('确认关闭？')
        .then(() => {
          done();
        })
        .catch(() => {});
    },

    handleTitle(){
      console.log("点击了标题");
      this.swtichEdit = 1;
      this.dialogVisible = true;
      this.editorValue = this.noteDetail.title;
    },

    handleKeyword(){
      console.log("点击了关键词列表");
      this.swtichEdit = 2;
      this.dialogVisible = true;
      this.editorValue = this.noteDetail.keyword;
    },

    handleMain(){
      this.drawer = true;
      this.swtichDrawer = 3;
    },

    handleSummary(){
      console.log("点击了总结");
      this.swtichEdit = 3;
      this.dialogVisible = true;
      this.editorValue = this.noteDetail.summary;
    },
    
    // 翻页事件
    handleSizeChange(val){
      console.log("pageSize 改变时会触发:" + val);
    },

    handleCurrentChange(val){
      console.log("currentPage 改变时会触发:" + val);
    },

    handlePrevClick(val){
      console.log("用户点击上一页按钮改变当前页后触发:" + val);
    },

    handleNextClick(val){
      console.log("用户点击下一页按钮改变当前页后触发:" + val);
    },

    // 搜索框
    handleSelectValue(val){
      console.log("搜索框变化:" + val);
      // 将列表清空，并显示加载图标
      this.noteList = [];
      this.listLoading = true;
      this.emptyList = false;
      // 等待数据请求完成，设置列表，隐藏加载按钮
      setTimeout(()=>{
        this.listLoading = false;
        this.noteList = [];
        this.emptyList = (this.noteList.length == 0);
      },1000);

    },

    homeBtn(){
      this.$router.push({path:'/',query:{}});
    },

    addBtn(){
      console.log("添加按钮");
    },

  },
  components: {},
  mounted() {
    
  }
};
</script>

<style scoped src=''>
*{
  /* border:1px solid red; */
}
.wrap{
  width: 100%;
  height: 100%;
}
.homeBtn{
  font-size: 50px;
  position: absolute;
  left: 5%;
  top: 5%;
}
.addBtn{
  font-size: 50px;
  position: absolute;
  left: 25%;
  top: 5%;
}
.main_left, .main_right{
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.644), 0 0 6px rgba(0, 0, 0, 0.658);
  margin-bottom: 50px;
}
.main_left{
  width: 250px;
  height: 550px;
  position: absolute;
  top: 15%;
  left: 5%;
}
.main_right{
  overflow: hidden;
  width: 700px;
  height: 550px;
  position: absolute;
  top: 15%;
  left: 30%;
}
.main_right_head{
  overflow: hidden;
  padding-left: 10px;
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 10%;
}
.main_right_center{
  overflow: hidden;
  background-color: red;
  width: 100%;
  height: 65%;
}
.main_right_center_left{
  float: left;
  background-color: rgb(160, 160, 160);
  width: 30%;
  height: 100%;
}
.main_right_center_right{
  float: left;
  background-color: rgb(120, 120, 120);
  width: 70%;
  height: 100%;
}
.main_right_footer{
  background-color: rgb(60, 60, 60);
  width: 100%;
  height: 25%;
}
.main_left_list{
  width: 200px;
  height: 420px;
  margin: 0 auto;
  margin-top: 5px;
}
.main_left_list_item{
  margin-top: 10px;
  overflow: hidden;
  width: 200px;
  height: 90px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.644), 0 0 6px rgba(0, 0, 0, 0.658);
}
.main_left_list_item_target{
  cursor: pointer;
}
.main_left_list_item_title{
  margin: 0;
  margin-left: 20px;
  /* margin-top: 20px; */
  width: 150px;
  /* word-wrap: break-word; */
  text-overflow:ellipsis;
  overflow:hidden;

}
.main_left_list_item_date{
  width: 150px;
  margin: 0;
  margin-left: 20px;
  margin-top: 15px;
}
.main_left_list_item_del{
  margin-left: 170px;
  display:inline-block;
  font-size: 20px;
}

.main_left_title{
  margin: 0;
  margin-top: 10px;
  line-height: 30px;
  font-size: 30px;
  text-align: center;
}
.main_left_select{
  width: 200px;
  margin: 0 auto;
  margin-top: 10px;
}
.main_left_page{
  width: 200px;
  margin: 0 auto;
}
.main_left_list_emptyItem{
  width: 200px;
  /* margin: 0 auto; */
  margin-left: 25px;
}
.editorBtn{
  margin-top: 50px;
  margin-left: 20px;
}
.dialog_button{
  margin-top: 20px;
}
</style>
