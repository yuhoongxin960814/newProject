<template>
    <div>
    <div id="head">
      <p>我的</p>
      <div class="prc">
        <img src="../../../static/img/Mine/img/ic_settings.png" alt="">
      </div>
    </div>
    </div>
</template>
<script>

export default {
 
}
</script>
<style>
#head {
  position: fixed;
  top: 0;
  width: 100%;
  height: 3rem;
  background: #f7f7f7;
  text-align: center;
  line-height: 3rem;
}
#head p {
  font-size: 1.3rem;
}   
#head img {
  width: 40%;
}
#head .prc {
  /* float: right; */
  position: absolute;
  top: 0.6rem;
  right: 0rem;
}
</style>
