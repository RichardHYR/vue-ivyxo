<template>
  <div class="wrap">
    <div class="box">
      <div class="content">
        <div class="homeBtn" @click="homeBtn">
          <i class="el-icon-s-home"></i>
        </div>
        <div class="content_title">站点信息</div>
        <div class="content_main">
          <div class="content_item" v-for="(item, index) in list" :key="index">
            <p class="content_item_title">{{item.sysTitle}}:</p>
            <p class="content_item_result">{{item.sysValue}}</p>
          </div>
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
.box{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 500px;
  margin: 0 auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.644), 0 0 6px rgba(0, 0, 0, 0.658);
}
.homeBtn{
  font-size: 50px;
  position: absolute;
  left: 20px;
  top: 5px;
}
.content_title{
  font-size: 30px;
  text-align: center;
  margin-top: 20px;
}
.content_main{
  margin-top: 60px;
  margin-left: 60px;
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
