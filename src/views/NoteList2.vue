<template>
  <div class="wrap">
     <div class="box">
      <div class="add_btn">
         <i class="el-icon-circle-plus"></i>
      </div>
      <p class="title">笔记列表</p>
      <div class="main">
         <div class="main_list">

            <div class="main_list_item" v-for="(item, index) in 5" :key="index">
               <p class="main_list_item_title">item{{ index+1 }}</p>
               <p class="main_list_item_date">2020-2-2 21:18:35</p>
               <div class="main_list_item_del">
                  <i class="el-icon-delete"></i>
               </div>
            </div>

         </div>
      </div>

      <div class="page_select">
         <el-pagination
         background
         layout="prev, pager, next"
         :total="1000">
         </el-pagination>
      </div>

     </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {},

  computed: {},

  components: {}
};
</script>
<style lang='css' scoped>
*{
   /* border: 1px solid red; */
}
.wrap{
   width: 100%;
   height: 100vh;
   background-color: rgb(255, 196, 86);
}
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
.add_btn{
   cursor: pointer;
   font-size: 50px;
   display:inline-block;
   position:absolute;
   top: 10px;
   left: 30px;
}
.title{
   width: 100%;
   height: 30px;
   font-size: 30px;
   line-height: 30px;
   text-align: center;
}
.main{
   width: 700px;
   height: 350px;
   margin: 0 auto;
}
.page_select{
   width: 600px;
   height: 35px;
   margin: 0 auto;
}
.main_list{
   width: 600px;
   height: 350px;
   margin: 0 auto;
}
.main_list_item{
   overflow: hidden;
   position: relative;
   width: 600px;
   height: 50px;
   margin-top: 20px;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.500), 0 0 6px rgba(0, 0, 0, 0.500);
   border-radius: 4px;
}
.main_list_item:hover{
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.900), 0 0 6px rgba(0, 0, 0, 0.900);
}
.main_list_item_title{
   margin: 0;
   position: absolute;
   top: 5px;
   left: 10px;
   display: inline-block;

   cursor: pointer;
   font-size: 20px;
   width: 400px;
}
.main_list_item_date{
   margin: 0;
   position: absolute;
   top: 22px;
   right: 45px;
   display: inline-block;
}
.main_list_item_del{
   cursor: pointer;
   font-size: 20px;
   position: absolute;
   top: 20px;
   right: 10px;
   display: inline-block;
}
</style>