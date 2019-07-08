<template>
  <div>
    <div id="co">
      <input type="text" placeholder="图片 影视 小说 " />
      <img src="../../static/img/ic_chat_white.png" />
      <img src="../../static/img/ic_search_gray.png" id="cl" />
      <img src="../../static/img/ic_scan_gray.png" id="ss" />
    </div>
    <banner></banner>
    <ul>
      <li v-for="(item,i) in arr" :key="i">
        <div id="left">
          <p>{{item.title}}</p>
          <p>{{item.target.desc}}</p>
          <p>作者：{{item.target.author.name}}</p>
        </div>
        <img :src="item.target.cover_url" alt />
        <div class="clearfix"></div>
      </li>
    </ul>
    <fool></fool>
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
import banner from "./banner";
import fool from "./fool";
import axios from "axios";

export default {
  data() {
    return {
      arr: ""
    };
  },
  components: {
    banner,
    fool
  },
  mounted() {
    axios
      .get("../../static/data/homeData.json")
      .then(re => {
        console.log(re);
        this.arr = re.data.recommend_feeds;
        console.log(this.arr);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style >
* {
  margin: 0;
  padding: 0;
}
.clearfix {
  clear: both;
}
.qqqq img {
  width: 100%;
  height: 100%;
}
ul li {
  padding: 10px;
  list-style: none;
  /* border: 1px red solid; */
}
#left {
  line-height: 22px;
  font-size: 15px;
  width: 60%;
  float: left;
}
ul li img {
  float: right;
  width: 35%;
  height: 30%;
}
ul li p:nth-of-type(2) {
  color: gray;
  font-size: 12px;
}
ul li p:nth-of-type(3) {
  color: gray;
  font-size: 10px;
}
#co {
  width: 100%;
  height: 2.5rem;
  background: #90ef90;
  position: fixed;
  top: 0;
  z-index: 9999;
}

input {
  text-indent: 3em;
  font-size: 0.7rem;
  width: 80%;
  height: 1.6rem;
  border-radius: 0.4rem;
  border: 0;
  margin-left: 0.6rem;
  margin-top: 0.4rem;
}

#co img {
  width: 7%;
  /* border: 1px red solid; */
  vertical-align: middle;
}
#ss {
  position: absolute;
  top: 0.5rem;
  right: 4.2rem;
}
#cl {
  position: absolute;
  top: 0.5rem;
  left: 1.5rem;
}
</style>