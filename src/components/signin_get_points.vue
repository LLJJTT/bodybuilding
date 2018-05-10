<template>
  <div id="signin_get_points">
    <div id="title">
      签到积分
    </div>
    <!-- 点击签到 -->
    <div id="all">总积分:&nbsp;&nbsp;&nbsp;<i>{{all_points}}</i></div>
    <div id="sign">
      <el-row  :gutter="1">
        <el-col @click.native="getPoints(item)" v-for="item in colList" :key="item.id" :span="4.8">
          <el-card shadow="always">
            <img class="img_points" :src="item.imgUrl" alt="">
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      colList:[{
        id:1,
        imgUrl:'static/img/shixinnoc.png',
      },{
        id:2,
        imgUrl:'static/img/shixinnoc.png',
      },{
        id:3,
        imgUrl:'static/img/shixinnoc.png',
      },{
        id:4,
        imgUrl:'static/img/shixinnoc.png',
      },{
        id:5,
        imgUrl:'static/img/shixinnoc.png',
      },{
        id:6,
        imgUrl:'static/img/shixinnoc.png',
      },{
        id:7,
        imgUrl:'static/img/shixinnoc.png',
      },{
        id:8,
        imgUrl:'static/img/shixinnoc.png',
      },{
        id:9,
        imgUrl:'static/img/shixinnoc.png',
      },{
        id:10,
        imgUrl:'static/img/shixinnoc.png',
      },{
        id:11,
        imgUrl:'static/img/shixinnoc.png',
      },{
        id:12,
        imgUrl:'static/img/shixinnoc.png',
      },{
        id:13,
        imgUrl:'static/img/shixinnoc.png',
      },{
        id:14,
        imgUrl:'static/img/shixinnoc.png',
      },{
        id:15,
        imgUrl:'static/img/shixinnoc.png',
      },{
        id:16,
        imgUrl:'static/img/shixinnoc.png',
      },{
        id:17,
        imgUrl:'static/img/shixinnoc.png',
      },{
        id:18,
        imgUrl:'static/img/shixinnoc.png',
      },{
        id:19,
        imgUrl:'static/img/shixinnoc.png',
      },{
        id:20,
        imgUrl:'static/img/shixinnoc.png',
      },{
        id:21,
        imgUrl:'static/img/shixinnoc.png',
      },{
        id:22,
        imgUrl:'static/img/shixinnoc.png',
      },{
        id:23,
        imgUrl:'static/img/shixinnoc.png',
      },{
        id:24,
        imgUrl:'static/img/shixinnoc.png',
      },{
        id:25,
        imgUrl:'static/img/shixinnoc.png',
      }],
      all_points:'234'
    }
  },
  methods:{
    getPoints(item){
      item.imgUrl = 'static/img/shixinyesc.png'
    }
  },
  created(){
    
  }
}
</script>

<style scoped>
  #signin_get_points{
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
  .img_points{
    width: 2rem;
    height: 2rem;
    vertical-align: middle;
    text-align: center;
  }
  #sign{
    margin-top: .5rem;
  }
  #all{
    background: #fff;
    padding: 2rem 0 1rem 0;
    font-size: 1rem;
    color: #000;
    font-weight: bolder;
  }
  #all i{
    color: #333;
    font-weight: 400;
    letter-spacing:2px;
  }
</style>
