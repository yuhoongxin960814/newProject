<template>
  <div class="item" @click="fn()">
    <span v-show="bool">
      <slot name="normalImg"></slot>
    </span>
    <span v-show="!bool">
      <slot name="activeImg"></slot>
    </span>
    <span id="font">{{txt}}</span>
  </div>
</template>

<script>
// 1、父组件将 txt mark mess 传给子组件。同时v-show 因为第一个图标的mark值等于默认的1所以第一个就选中
// 2、当点击某一个图标时候，调用子组件的fn()方法。并向父组件change传入当前图片的mark值。
// 3、父组件change调用fn2方法(此方法形参val 就是子传给父组件的值)，将传过来的mark值赋给mess
// 4、子组件v-show 进行判断  如果当前mark的值和接收的mess 值相等时 返回false 则bool为false 所以显示选中图标。
export default {
  props: ["txt", "mark", "mess", "cc"],
  computed: {
    bool: function() {
      if (this.mark == this.mess) {
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
    fn: function() {
      console.log(this.mark);
      this.$router.push("/" + this.cc);
      this.$emit("change", this.mark);
    }
  }
};
</script>
 
<style>
.item {
  width: 20%;
  height: 60px;
  float: left;
}

.item span {
  display: inline-block;
  text-align: center;
}

.item img {
  width: 40px;
}
#font {
  /* color: red; */
  text-align: center;
}
</style>