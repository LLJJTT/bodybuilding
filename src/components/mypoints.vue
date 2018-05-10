<template>
  <div id="mypoints">
    <div id="title">
      我的积分
    </div>
    <div id="points">
      <el-row >
        <el-col :span="24">
          <el-card shadow="always">
            <div class="inner_div">
              <h1>剩余积分</h1>
              <span class="left">{{left_points}}</span>
            </div>
          </el-card>
        </el-col>
        <el-col :span="24">
          <el-card shadow="always">
            <button id="getPoints" @click="goGetPoints">去得积分</button>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { Swipe, SwipeItem } from 'mint-ui';
export default {
  data () {
    return {
      left_points:'100'
    }
  },
  methods:{
    goGetPoints(){
       this.$router.push({path:'/index/jianshen'})
    }
  },
  created(){
    
  }
}
</script>

<style scoped>
  #mypoints{
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
  #points{
    width: 98%;
    margin: 0 auto;
  }
  .inner_div h1{
    font-size: .4rem;
    color: #b8b6b6;
  }
  .left{
    display: block;
    color: #000;
    font-size: 1.6rem;
    font-weight: bolder;
    letter-spacing: 6px;
    margin-top: .4rem;
  }
  #getPoints{
    width:90%;
    margin: 0 auto;
    background: #a76cf5;
    color:#fff;
    padding:.5rem 0;
    border-radius:5px;
    box-shadow:none;
    border:none;
    font-size:.8rem;
    font-weight:bold;
  }
</style>
