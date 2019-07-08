
<template>
  <div id="dibu">
    <!-- <xzheader aaa=2></xzheader> -->
    <!-- 在父组件中引用子组件向显示的内容 -->
    <!-- 在父组件中使用template并写入对应的slot值来指定该内容在子组件中现实的位置（当然也不用必须写到template），没有对应值的其他内容会被放到子组件中没有添加name属性的slot中 -->
    <Item txt="首页" mark="1" cc="HelloWorld" @change="fn2" :mess="sele" >
      <img slot="normalImg" src="../../static/img/ic_tab_home_normal.png" />
      <img slot="activeImg" src="../../static/img/ic_tab_home_active.png" />
    </Item>
    <Item txt="书影音" mark="2" cc="shuyingyin" @change="fn2" :mess="sele" >
      <img slot="normalImg" src="../../static/img/ic_tab_subject_normal.png" />
      <img slot="activeImg" src="../../static/img/ic_tab_subject_active.png" />
    </Item>
    <Item txt="广播" mark="3" cc="guangbo" @change="fn2" :mess="sele" >
      <img slot="normalImg" src="../../static/img/ic_tab_status_normal.png" />
      <img slot="activeImg" src="../../static/img/ic_tab_status_active.png" />
    </Item>
    <Item txt="小组" mark="4" ma="1" cc="xiaozu" @change="fn2" :mess="sele" >
      <img slot="normalImg" src="../../static/img/ic_tab_group_normal.png" />
      <img slot="activeImg" src="../../static/img/ic_tab_group_active.png" />
    </Item>

    <Item txt="我的" mark="5" cc="wd" @change="fn2" :mess="sele">
      <img slot="normalImg" src="../../static/img/ic_tab_profile_normal.png" />
      <img slot="activeImg" src="../../static/img/ic_tab_profile_active.png" />
    </Item>
  </div>
</template>

<script>
import Item from "./item";
// import xzheader from './dibu/xzheader'
export default {
  data() {
    return {
      // arr: [
      //   { src: "../../static/img/1.png", name: "首页" },
      //   { src: "../../static/img/2.png", name: "书影音" },
      //   { src: "../../static/img/3.png", name: "广播" },
      //   { src: "../../static/img/4.png", name: "小组" },
      //   { src: "../../static/img/5.png", name: "我的" }
      // ],
    };
  },
  components: {
    Item
    // xzheader
  },

  data: function() {
    return {
      sele: 1
    };
  },

  methods: {
    fn2: function(val) {
      // console.log(val);
      this.sele = val;
      // 使用 sessionStorage 创建一个本地存储 name/value
      // name = isSelect  ; 值 = val
      // sessionStorage 用于临时保存同一窗口(或标签页)的数据，在关闭窗口或标签页之后将会删除这些数据。
      // 如果你想在浏览器窗口关闭后还保留数据，可以使用 localStorage 属性，
      // sessionStorage.setItem("isSelect", val);
    }
  },
  mounted() {
    // 挂载之后把存储的val 赋给selected就实现了刷新后选中状态不消失。
    // this.sele = sessionStorage.getItem("isSelect");
  }
};
</script>
<style scoped>

* {
  margin: 0;
  padding: 0;
}
#dibu {
  background: white;
padding: 0 0 1rem ;
  position: fixed;
  bottom: 0px;
  /* padding: 0 0 10px 0; */
  text-align: center;
}
</style>
