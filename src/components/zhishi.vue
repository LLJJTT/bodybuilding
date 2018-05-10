<template>
  <div id="zhishi">
    <div id="title">
      知识
    </div>
    <div id="listDiv">
      <div @click="goZhishiDetails(item)" v-for="item in listData" class="wrapper">
        <span class="biaoti">{{item.title}}</span><span class="tupian"><img :src="item.imgurl" alt=""><div style="clear:both;"></div></span>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
import axios from 'axios'
export default {
  data () {
    return {
      listData:[{
        title:'为什么晚饭要吃的少？',
        imgurl:'static/img/news1.jpg'
      },{
        title:'为什么晚饭要吃的少？',
        imgurl:'static/img/news1.jpg'
      },{
        title:'为什么晚饭要吃的少？',
        imgurl:'static/img/news1.jpg'
      },{
        title:'为什么晚饭要吃的少？',
        imgurl:'static/img/news1.jpg'
      },{
        title:'为什么晚饭要吃的少？',
        imgurl:'static/img/news1.jpg'
      },{
        title:'为什么晚饭要吃的少？',
        imgurl:'static/img/news1.jpg'
      },{
        title:'为什么晚饭要吃的少？',
        imgurl:'static/img/news1.jpg'
      },{
        title:'为什么晚饭要吃的少？',
        imgurl:'static/img/news1.jpg'
      }]
    }
  },
  methods:{
  	goZhishiDetails(item){
      console.log(item)
      this.$router.push({
        path:'/index/zhishi_details'
      })
    }
  },
  
}
</script>

<style scoped>
#zhishi{
  height: 36rem;
    overflow: auto;
}
  #title{
    background: #eeb172;
    padding:1rem 0;
    font-size:1rem;
    font-weight:bold;
    letter-spacing:.12rem;
    color:#fff;
  }
  .wrapper{
    background: #eee;
    border-bottom: 1px solid #d7d6d6;
  }
  .biaoti{
    font-size: 1rem;
    height: 4.4rem;
    line-height: 4.4rem;
    display: inline-block;
    float: left;
    text-indent: 3rem;
  }
  .tupian{

  }
  .tupian img{
    padding: .4rem;
    float: right;
    display: inline-block;
    width: 4.4rem;
    height: 4.4rem;

  }
</style>









