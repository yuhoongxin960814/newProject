<template>
  <div id="app">
    <router-view></router-view>
   <fool></fool>
  </div>
</template>

<script>
import fool from '../src/components/fool'
export default {
  name: "App",
  components:{
    fool,
  }
};
</script>

<style>
#app {
  color: #2c3e50;
}
</style>
