<template>
  <div class="wrap">
    <loginInfo></loginInfo>
    <div class="box">
      <div
        class="add_btn"
        @click="dialogVisibleAddNote = true"
      >
        <i class="el-icon-circle-plus"></i>
      </div>
      <div
        class="home_btn"
        @click="handleHome"
      >
        <i class="el-icon-s-home"></i>
      </div>
      <p class="title">笔记列表</p>
      <div class="main">
        <div class="main_list">

          <div
            class="main_list_item"
            v-for="(item, index) in pagination.list"
            :key="index"
          >
            <p
              class="main_list_item_title"
              @click="handleSelected(item)"
            >{{ item.title }}</p>
            <p class="main_list_item_date">{{ item.gmtModified }}</p>
            <el-popconfirm
              @onConfirm="handleItemDel(item)"
              confirmButtonText='是哒'
              cancelButtonText='算了'
              icon="el-icon-info"
              iconColor="red"
              title="是否删除？"
            >
              <div
                slot="reference"
                class="main_list_item_del"
              >
                <i class="el-icon-delete"></i>
              </div>
            </el-popconfirm>

          </div>

        </div>
      </div>

      <div class="page_select">
        <el-pagination
          background
          layout="prev, pager, next"
          :current-page.sync=pagination.page
          :pager-count="5"
          :page-size="pagination.pageSize"
          :total="pagination.total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          @prev-click="handlePrevClick"
          @next-click="handleNextClick"
        >
        </el-pagination>
      </div>

    </div>

    <!-- 添加笔记组件 -->
    <el-dialog
      title="添加笔记"
      :visible.sync="dialogVisibleAddNote"
      width="500px"
      center
      :close-on-click-modal="false"
    >
      <span style="display: inline-block;">标题:</span>
      <el-input
        style="width:300px;margin-left:10px;"
        v-model="addNote.title"
        placeholder="请输入标题"
      ></el-input>
      <el-button
        style="margin-left:10px;"
        type="primary"
        round
        @click="handleAddNote"
      >确定</el-button>
    </el-dialog>

  </div>
</template>

<script>
import { notePageApi, noteAddApi, noteDeleteApi } from "@/utils/api_url_utils.js"; // 导入我们的api接口
export default {
  data() {
    return {
      addNote: {
        title: ""
      },
      dialogVisibleAddNote: false,
      pagination: {
        page:1,
        list: [],
        pageSize: 5,
        total: 0
      }
    };
  },

  methods: {
    handleHome() {
      this.$router.push({ path: "/", query: {} });
    },
    handleAddNote() {
      console.log("添加笔记");
      this.addNoteMethod();
    },
    handleSelected(item) {
      console.log("被选中的文章:" + item);
      this.$router.push({ path: `/noteDetail/${item.id}`});
    },
    //删除单个列表数据
    handleItemDel(item) {
      console.log("被删除的文章:" + item);
      //接口调用时通用的加载遮罩方法
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      this.handleNoteDelete(item.id, ()=>{
        loading.close();
        //设置为首页
        this.pagination.page = 1;
        this.handleGetNotePage();
      });

    },
    // 翻页事件
    handleSizeChange(val) {
      console.log("pageSize 改变时会触发:" + val);
    },

    handleCurrentChange(val) {
      console.log("currentPage 改变时会触发:" + val);
      this.handleGetNotePage(val);
    },

    handlePrevClick(val) {
      console.log("用户点击上一页按钮改变当前页后触发:" + val);
    },

    handleNextClick(val) {
      console.log("用户点击下一页按钮改变当前页后触发:" + val);
    },

    addNoteMethod(){
      //接口调用时通用的加载遮罩方法
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      //添加笔记
      let params = {
        'title':this.addNote.title
      }
      this.handleNoteAdd(params, ()=>{
        loading.close();
        this.dialogVisibleAddNote = false;
        //设置为首页
        this.pagination.page = 1;
        this.handleGetNotePage();
      });
    },

    handleGetNotePage(page = 1){

      this.getNotePageData(page, this.pagination.pageSize, (data)=>{
        console.log("成功回调拿到的数据:" + data);
        this.pagination.list = data.list;
        this.pagination.total = data.total;
      });

    },

    getNotePageData(page, pageSize, handleSuccess){
      notePageApi(page, pageSize).then(res => {
        // 获取数据成功后的其他操作
        // console.log("获取notePageApi接口数据" + JSON.stringify(res));
        if (res.code == 200) {
          handleSuccess(res.data);
          //成功
        }else{
          //失败
        }
      });
    },

    handleNoteAdd(params, handleSuccess){
      noteAddApi(params).then(res => {
        // 获取数据成功后的其他操作
        console.log("获取noteAddApi接口数据" + JSON.stringify(res));
        if (res.code == 200) {
          handleSuccess(res.data);
          //成功
        }else{
          //失败
        }
      });
    },

    handleNoteDelete(id, handleSuccess){
      noteDeleteApi(id).then(res => {
        // 获取数据成功后的其他操作
        console.log("获取noteDeleteApi接口数据" + JSON.stringify(res));
        if (res.code == 200) {
          handleSuccess(res.data);
          //成功
        }else{
          //失败
        }
      });
    }

  },

  computed: {},

  components: {},

  mounted(){
    this.handleGetNotePage();
  }
};
</script>
<style lang='css' scoped>
.box {
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
.add_btn {
  cursor: pointer;
  font-size: 50px;
  display: inline-block;
  position: absolute;
  top: 10px;
  right: 30px;
}
.home_btn {
  cursor: pointer;
  font-size: 50px;
  display: inline-block;
  position: absolute;
  top: 10px;
  left: 30px;
}
.title {
  width: 100%;
  height: 30px;
  font-size: 30px;
  line-height: 30px;
  text-align: center;
}
.main {
  width: 700px;
  height: 350px;
  margin: 0 auto;
}
.page_select {
  width: 600px;
  height: 35px;
  margin: 0 auto;
}
.main_list {
  width: 600px;
  height: 350px;
  margin: 0 auto;
}
.main_list_item {
  overflow: hidden;
  position: relative;
  width: 600px;
  height: 50px;
  margin-top: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5), 0 0 6px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
}
.main_list_item:hover {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.9), 0 0 6px rgba(0, 0, 0, 0.9);
}
.main_list_item_title {
  margin: 0;
  position: absolute;
  top: 5px;
  left: 10px;
  display: inline-block;

  cursor: pointer;
  font-size: 20px;
  width: 400px;
}
.main_list_item_date {
  margin: 0;
  position: absolute;
  top: 22px;
  right: 45px;
  display: inline-block;
}
.main_list_item_del {
  cursor: pointer;
  font-size: 20px;
  position: absolute;
  top: 20px;
  right: 10px;
  display: inline-block;
}
</style>