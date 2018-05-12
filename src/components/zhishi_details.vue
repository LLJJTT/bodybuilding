<template>
  <div id="zhishi_details">
    <div id="title">
      知识详情
    </div>
    <div class="details">
      <h1>{{title}}</h1>
      <div id="content">
        <div><img :src="imgUrl" alt=""></div>
        <div class="des">{{content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      title:'健身人士必备的4种经典营养补剂',
      imgUrl:'static/img/news3.jpg',
      content:'',
      detailData:{}
    }
  },
  methods:{
   getData(){
    this.detailData = this.$route.params.detailData
    this.title = this.detailData.obj_name
    this.content = this.detailData.introduce
    this.imgUrl = this.detailData.img
   }
  },
  created(){
    this.getData()
  }
}
</script>

<style scoped>
  #zhishi_details{
max-height: 38rem;
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
  .details h1{
    padding: .8rem 0;
    font-size: .8rem;
    background: #fff;
  }
  #content img{
    display: block;
    width: 98%;
    height: 10rem;
    margin: 0 auto;
  }
  .des{
    max-height: 20rem;
    overflow: auto;
    padding: 1rem .2rem;
    line-height: 1.8rem;

  }
</style>







