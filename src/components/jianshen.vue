<template>
  <div id="jianshen">
     <div id="title">
      健身
    </div>
    <div id="bodylist">
        <div @click="goJianshenDetails(item)" v-for="item in listData" class="wrapper">
          <h1>{{item.name}}</h1><span class="unlocked">解锁人数&nbsp;<i>{{item.unlocked_number}}</i></span><span class="need_points">需要积分&nbsp;<i>{{item.points}}</i></span>
          <img class="bg" :src="item.imgurl" alt="">
          <img class="lock_img" :src="lockurl" alt="">
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
        name:'俯卧撑',//名称
        unlocked_number:'2',//解锁人数
        points:'20',//需要积分
        imgurl:'static/img/1.jpg'//图片路径
      },{
        name:'大众健身操',
        unlocked_number:'2',
        points:'30',
        imgurl:'static/img/2.jpg'
      },{
        name:'有氧舞蹈',
        unlocked_number:'2',
        points:'40',
        imgurl:'static/img/3.jpg'
      },{
        name:'健身球',
        unlocked_number:'2',
        points:'50',
        imgurl:'static/img/4.jpg'
      },{
        name:'俯卧撑',//名称
        unlocked_number:'2',//解锁人数
        points:'20',//需要积分
        imgurl:'static/img/5.jpg'//图片路径
      },{
        name:'大众健身操',
        unlocked_number:'2',
        points:'30',
        imgurl:'static/img/6.jpg'
      },{
        name:'有氧舞蹈',
        unlocked_number:'2',
        points:'40',
        imgurl:'static/img/7.jpg'
      },{
        name:'健身球',
        unlocked_number:'2',
        points:'50',
        imgurl:'static/img/8.jpg'
      }],
      lockurl:'static/img/lock.png'
    }
  },
  methods:{
  	goJianshenDetails(item){
      this.$router.push({
        path:'/index/jianshen_details'
      })
    }
  },
  
}
</script>

<style scoped>
  #bodylist{
    height: 30rem;
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
    position: relative;
    margin-top:.2rem;
  }
  .wrapper .bg{
    width: 100%;
    height: 8rem;
  }
  .wrapper h1{
    position: absolute;
    color: #fff;
    font-size: 1rem;
    top:2rem;
    left: 3rem;
  }
  .unlocked{
    position: absolute;
    color: #fff;
    font-size: .8rem;
    top:2rem;
    right: 3rem;
  }
  .unlocked i{
    color: #fff;
    font-weight: bolder;
    font-size: 1.4rem;
  }
  .need_points {
    position: absolute;
    color: #fff;
    font-size: .8rem;
    top:4rem;
    right: 3rem;
  }
  .need_points i{
    color: #fff;
    font-weight: bolder;
    font-size: 1.4rem;
  }
  .lock_img{
    width: 2.8rem;
    height: 2.8rem;
    position: absolute;
    top:2.5rem;
    left:11rem;
  }
</style>









