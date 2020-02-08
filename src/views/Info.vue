<template>
  <div class="wrap">
    <div class="box">
      <div class="home_btn" @click="homeBtn">
        <i class="el-icon-s-home"></i>
      </div>
      <p class="content_title">站点信息</p>
      <div class="content_main">
        <div class="content_item" v-for="(item, index) in list" :key="index">
          <p class="content_item_title">{{item.sysTitle}}:</p>
          <p class="content_item_result">{{item.sysValue}}</p>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import { infoApi } from '@/utils/api_url_utils.js';// 导入我们的api接口
export default {
  name: "Info",
  data() {
    return {
      "list":[]
    };
  },
  methods: {

    homeBtn(){
      this.$router.push({path:'/',query:{}});
    },

    settingInfo(data){
      this.list = data;
    },

    getInfo(){
      // 调用api接口，并且提供了两个参数
      // let _this = this;                
      infoApi().then(res => {
        // 获取数据成功后的其他操作
        console.log("获取info接口数据" + JSON.stringify(res));
        if(res.code == 200){
          this.settingInfo(res.data);
        }                 
      });          
    }

  },
  components: {},
  mounted() {
    this.getInfo();
    
  }
};
</script>

<style scoped src=''>
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
.content_title{
  font-size: 30px;
  text-align: center;
  margin: 0;
  margin-top: 20px;
}
.content_main{
  width: 650px;
  height: 300px;
  margin: 0 auto;
  margin-top: 50px;
}
.content_item{
  margin-top: 20px;
  margin-left: 20px;
}
.content_item_title{
  display: inline;
}
.content_item_result{
  display: inline;
  margin-left: 20px;
}
</style>
