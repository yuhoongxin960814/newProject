<template>
  <div>
    <General maa=2></General>
    <ul id="xzz">
      <li v-for="(it,i) in ar" :key="i" >
        <h3>{{it.title}}</h3>
        <div>
          <img :src="it.group_list[0].img_url" alt />
          <span>{{it.group_list[0].group_name}}</span>
          <p>{{it.group_list[0].topic_title}}</p>
        </div>
        <div>
          <img :src="it.group_list[1].img_url" alt />
          <span>{{it.group_list[1].group_name}}</span>
          <p>{{it.group_list[1].topic_title}}</p>
        </div>
        <div>
          <img :src="it.group_list[2].img_url" alt />
          <span>{{it.group_list[2].group_name}}</span>
          <p>{{it.group_list[2].topic_title}}</p>
        </div>
        <p>更多相关小组</p>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios"
import General from './General head'
export default {
  // [{[{}{}{}]}{[{}{}{}]}{[{}{}{}]}]
  data() {
    return {
      ar: ""
    };
  
  },
   components: {
   General
  },
  mounted() {
    axios
      .get("../../../static/data/groupData.json")
      .then(res => {
        // console.log(res);
        this.ar = res.data.group;
        console.log(this.ar);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
ul li {
  list-style: none;
}
 #xzz li img {
  margin-right: 0.5rem;
  vertical-align: middle;
  width: 10%;
  height: 10%;
}
#xzz li div p {
  margin-top: 1rem;
  font-size: 0.6rem;
  line-height: 1.3rem;
  color: gray;
}
#xzz li div {
  border-bottom: 1px gainsboro solid;
  padding: 1rem;
}
 #xzz li h3 {
  text-indent: 1rem;
  margin-top:3rem;
  color: purple

}
#xzz li>p {
  margin:1rem 0 2rem 0;
  text-align: center;
  color: #42BD56;

}
</style>
