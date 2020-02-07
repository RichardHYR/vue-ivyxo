<template>

  <quill-editor
    
    v-model="content"
    ref="myQuillEditor"
    :options="editorOption"
    @blur="onEditorBlur($event)"
    @focus="onEditorFocus($event)"
    @change="onEditorChange($event)"
  >
  </quill-editor>
</template> 
<script>
export default {
  name:"Editor",
  data() {
    return {
      content: null,
      editorOption: {
        modules:{
          toolbar:[
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block']
          ]
        }

      }
    };
  },
  methods: {
    onEditorBlur() {
      //失去焦点事件
      console.log("失去焦点事件" + this.content);
    },
    onEditorFocus() {
      //获得焦点事件
      console.log("获得焦点事件" + this.content);
    },
    onEditorChange() {
      //内容改变事件
      console.log("内容改变事件" + this.content);
      this.$emit("sendMsg", this.content);
    },

    getContent(){
      return this.content;
    },

    setContent(content){
      this.content = content;
    }

  },

  mounted(){
    
  }
};
</script>   

<style scoped src=''>
</style>
