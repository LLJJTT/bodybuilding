<template>
  <div id="my" >
  	<div id="title">
      我的
    </div>

    <div>
      <el-row>
        <el-col  class="wrapper" :span="24">
          <el-card shadow="always">
            <i>{{account}}</i>
          </el-card>
        </el-col>
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

    <button  id="logout" @click="goLogin">{{loginWord}}</button>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
import axios from 'axios'
export default {
  data () {
    return {
      points:'',
      account:'未登录',
      loginWord:'登录',
    }
  },
  methods:{
  	goLogin(){
      if (this.loginWord=="登录") {
        this.$router.push({path:'/login'})
      }
      else if (this.loginWord=="退出登录") {
        this.loginWord = '登录'
        sessionStorage.removeItem('account')
        this.account = '未登录'
        Toast({
          message: '退出成功',
          position: 'middle',
          duration:3000,
        });
      }
    },
    goMyInfo(){
      if (this.account==''||this.account==undefined||this.account==null||this.account=="未登录") {
        Toast({
          message: '请先登录',
          position: 'middle',
          duration:1000,
        });
      }
      else{
        this.$router.push({path:'/index/myinfo'})
      }
    },
    goMyPoints(){
      if (this.account==''||this.account==undefined||this.account==null||this.account=="未登录") {
        Toast({
          message: '请先登录',
          position: 'middle',
          duration:1000,
        });
      }
      else{
        this.$router.push({path:'/index/mypoints'})
      }
    },
    goSignInPoints(){
      if (this.account==''||this.account==undefined||this.account==null||this.account=="未登录") {
        Toast({
          message: '请先登录',
          position: 'middle',
          duration:1000,
        });
      }
      else{
      this.$router.push({path:'/index/signin_get_points'})
      }
    }
  },
  created(){
    this.account = sessionStorage.getItem('account')
    if (this.account==''||this.account==undefined||this.account==null) {
      this.loginWord = '登录'
      this.account = '未登录'
    }
    else{
      this.loginWord = '退出登录'
    }
  }
  
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









