<template>
  <div class="wrap">
    <div class="box">
      <div class="homeBtn" @click="homeBtn">
          <i class="el-icon-s-home"></i>
      </div>
      <div class="title">康奈尔笔记</div>
      <div class="main_left">
        <el-image
          style="width: 200px; height: 300px"
          src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
          fit="scale-down"></el-image>
      </div>
      <div class="main_right">
        <pre>
    5R笔记法，又叫做康奈尔笔记法，是用产生这种笔记法的大学校名命名的。这一方法几乎适用于一切讲授或阅读课，特别是对于听课笔记，5R笔记法应是最佳首选。这种记与学，思考与运用相结合的有效方法，初用时，可以以一科为例进行训练，在这一科不断熟练的基础上，然后再用于其他科目。
具体包括以下几个步骤：
    记录（Record）。在听讲或阅读过程中，在主栏（将笔记本的一页分为左小右大两部分，左侧为副栏，右侧为主栏）内尽量多记有意义的论据、概念等讲课内容。
    简化（Reduce）。下课以后，尽可能及早将这些论据、概念简明扼要地概括（简化）在回忆栏，即副栏。
    背诵（Recite）。把主栏遮住，只用回忆栏中的摘记提示，尽量完满地叙述课堂上讲过的内容。
    思考（Reflect）。将自己的听课随感、意见、经验体会之类的内容，与讲课内容区分开，写在卡片或笔记本的某一单独部分，加上标题和索引，编制成提纲、摘要，分成类目。并随时归档。
    复习（Review）。每周花十分钟左右时间，快速复习笔记，主要是先看回忆栏，适当看主栏。这种做笔记的方法初用时，可以以一科为例进行训练。在这一科不断熟练的基础上，然后再用于其他科目。
    (摘自百度百科)</pre>
      </div>
      
      <el-button type="primary" plain class="enterBtn" @click="startBtn">开始使用</el-button>

    </div>
  </div>
</template>
<script>
export default {
  name: "NoteInfo",
  data() {
    return {
      
    };
  },
  methods: {

    homeBtn(){
      this.$router.push({path:'/',query:{}});
    },

    startBtn(){
      this.$router.push({path:'/noteList',query:{}});
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
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}
.wrap{
  width: 100%;
  height: 100%;
}
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
  font-size: 30px;
  text-align: center;
  margin-top: 20px;
}
.main_left{
  display: inline-block;
  width: 200px;
  height: 300px;
  position: absolute;
  left: 5%;
  top: 20%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.644), 0 0 6px rgba(0, 0, 0, 0.658);
}
.main_right{
  display: inline-block;
  width: 500px;
  height: 300px;
  position: absolute;
  right: 5%;
  top: 20%;
}
.enterBtn{
  position: absolute;
  left: 45%;
  bottom: 10%;
}

</style>
