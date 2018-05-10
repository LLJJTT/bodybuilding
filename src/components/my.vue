<template>
  <div id="my">
  	<div id="title">
      我的
    </div>

    <div>
      <el-row>
        <el-col @click.native="goMyInfo" class="wrapper" :span="24">
          <el-card shadow="always">
            我的信息
          </el-card>
        </el-col>
        <el-col @click.native="goMyPoints" class="wrapper" :span="24">
          <el-card shadow="always">
            我的积分
          </el-card>
        </el-col>
        <el-col @click.native="goSignInPoints" class="wrapper" :span="24">
          <el-card shadow="always">
            签到领取积分
          </el-card>
        </el-col>
      </el-row>
    </div>

    <button id="logout" @click="goLogin">登录</button>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
import axios from 'axios'
export default {
  data () {
    return {
      points:''
    }
  },
  methods:{
  	goLogin(){
      this.$router.push({path:'/login'})
    },
    goMyInfo(){
      this.$router.push({path:'/index/myinfo'})
    },
    goMyPoints(){
      this.$router.push({path:'/index/mypoints'})
    },
    goSignInPoints(){
      this.$router.push({path:'/index/signin_get_points'})
    }
  },
  
}
</script>

<style scoped>
  #title{
    background: #eeb172;
    padding:1rem 0;
    font-size:1rem;
    font-weight:bold;
    letter-spacing:.12rem;
    color:#fff;
  }
  .wrapper{
    margin-top: .4rem;
  }
  #logout{
      width:90%;
      margin: 0 auto;
      background: #a76cf5;
      color:#fff;
      padding:.5rem 0;
      border-radius:5px;
      margin-top: 6rem;
      box-shadow:none;
      border:none;
      font-size:.8rem;
      font-weight:bold;
  }
  .ps{
    font-size: 1rem;
    margin-left: 1rem;
  }
</style>









