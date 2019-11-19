<template>
  <div class>

    <el-container>

      <el-header>
        <div class="reg">
          <el-button type="primary" round>注册</el-button>
          <el-button type="success" round>登录</el-button>
        </div>
      </el-header>

      <el-main>Main</el-main>

    </el-container>

  </div>
</template>
<script>
export default {
  name: "Index",
  data() {
    return {
      
    };
  },
  methods: {
    
  },
  components: {

  },
  mounted() {}
};
</script>

<style scoped src=''>

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }

  .reg{
    margin-left: 80%;
  }
</style>
