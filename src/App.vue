<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  created(){
    this.$store.dispatch('actionSetIsLogin');
  }
}
</script>

<style>
body, html{ 
  margin:0;
  padding: 0; 
  height:100%;
  width: 100%;
}
.router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
}
.router-fade-enter, .router-fade-leave-active {
    opacity: 0;
}
</style>
