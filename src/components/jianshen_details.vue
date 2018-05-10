<template>
  <div id="jianshen_details">
    <div>
      <h1 class="title">{{title}}</h1>
      <img class="showimg" :src="imgUrl" alt="">
      <div class="cla">
        <el-row >
          <el-col :span="8">
            <el-card shadow="always">
             <div>
               <li class="word">{{level}}</li>
               <li class="name">难度</li>
             </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="always">
             <div>
               <li class="word">{{keep_time}}</li>
               <li class="name">时长 / 分钟</li>
             </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="always">
             <div>
              <li class="word">{{points}}</li>
              <li class="name">积分</li>
             </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div class="intro">
        <el-row :gutter="12">
          <el-col :span="24">
            <el-card shadow="never">
              {{introduce}}
            </el-card>
          </el-col>
        </el-row>
      </div>

      <!-- 立即开始 -->
      <div>
        <div>
          <el-row :gutter="1">
            <el-col :span="16">
              <el-card shadow="never">
                <i class="left_time">{{active_time}}</i>
              </el-card>
            </el-col>
            <el-col :span="8">
              <el-card shadow="never">
                <button id="start" @click.native="goStart">开始</button>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      imgUrl:'static/img/news1.jpg',
      title:"俯卧撑",
      keep_time:'10',
      points:'20',
      level:'L1',
      introduce:'健美操也属于有氧运动，运动强度和燃脂效果不亚于跑步，如果觉得跑步过于枯燥，那么可以用健美操来代替，健美操一般指搏击操、杠铃操、健身操等健身房的公共课目运动，适合各个年龄层练习',
      active_time:'600  秒'
    }
  },
  methods:{
   goStart(){

   }
  },
  created(){
    
  }
}
</script>

<style scoped>
  #jianshen_details{
    
  }
  .title{
    position: absolute;
    font-size: 1rem;
    color: #fff;
    font-weight: 500;
    left: 0;
    right: 0;
    top: 3rem;
    letter-spacing: 4px;
  }
  .showimg{
    width: 98%;
    margin: 0 auto;
    display: block;
    height: 10rem;
  }
  .name{
    margin-top: .4rem;
  }
  .word{
    font-weight: bolder;
    color: #333;
    font-size: 1.4rem;
  }
  .intro{

  }
  #start{
    width:90%;
    margin: 0 auto;
    background: #fb3b1d;
    color:#fff;
    padding:.5rem 0;
    border-radius:5px;
    box-shadow:none;
    border:none;
    font-size:.8rem;
    font-weight:bold;
  }
  .left_time{
    display: block;
    padding:.5rem 0;
    background: #a76cf5;
    color: #fff;
    font-weight: bolder;
    border-radius:5px;
  }
</style>







