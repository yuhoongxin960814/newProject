<template>
  <div>
    <div id="header">
      <p>{{tex}}</p>
      <div class="prc">
        <img src="../../../static/img/Broadcast/img/ic_status_search_user.png" alt />
        <img src="../../../static/img/Broadcast/img/ic_chat_green.png" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["maa"],
  data() {
    return {
      tex: "",
      arr: ["书影音", "广播", "小说", "我的"]
    };
  },
  mounted() {
    var s = Number(this.maa);
    // console.log(typeof s)
    // if(this.maa==2){
    this.tex = this.arr[s];
    // }
  }
};
</script>
<style >
#header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 3rem;
  background: #f7f7f7;
  text-align: center;
  line-height: 3rem;
}
#header p {
  font-size: 1.3rem;
  margin: 0;
  padding: 0;
}
#header img {
  width: 15%;
}
#header .prc {
  /* float: right; */
  position: absolute;
  top: 0.5rem;
  right: -2rem;
}
</style>