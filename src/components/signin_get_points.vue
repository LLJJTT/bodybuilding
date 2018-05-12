<template>
  <div id="signin_get_points"
  v-loading="loading2"
    element-loading-text="签到中,请稍后"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)">
    <div id="title">
      签到积分
    </div>
    <!-- 点击签到 -->
    <div id="all">总积分:&nbsp;&nbsp;&nbsp;<i>{{all_points}}</i></div>
    <div id="sign">
      <el-row  :gutter="1">
        <el-col @click.native="getPoints" v-for="item in colList" :key="item.id" :span="4.8">
          <el-card shadow="always">
            <img class="img_points" :src="item.imgUrl" alt="">
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div id="alll"><i>规则：</i>每日8:00-24:00签到;签到获得 20 积分;每日只可签到一次</i></div>
  </div>
</template>

<script>
import axios from 'axios'
import { Toast } from 'mint-ui';

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
      loading2: false,
      all_points:'0.00',
      sign_in_today:'',
      sign_in_number:'',
      urlQuery:'http://112.74.63.14/BodyPratice/bodybuilding_php/queryMyInfomation.php',
      urlSignPoints:'http://112.74.63.14/BodyPratice/bodybuilding_php/signInPoints.php',

    }
  },
  methods:{
    showSignMany(){
      var a  = Number(this.sign_in_number)
      for(var i=0;i<a;i++){
        this.colList[i].imgUrl = 'static/img/shixinyesc.png'
      }
    },
    // 点击按钮签到
    getPoints(){
      this.loading2 = true
      if (this.sign_in_today==0) {
        this.sign_in_today = '1'
        this.signGetPoints()
      }
      else{
        this.loading2 = false
        Toast({
          message: '今日已签到',
          position: 'middle',
          duration:1000
        });
      }
    },
    // 查询我的信息
    queryMyInfo(){
      var formdata = new FormData()
      const user_id = JSON.parse(sessionStorage.loginUser).data.user_id
      formdata.append('user_id',user_id)
      axios({
        method:"POST",
        url:this.urlQuery,
        data:formdata,
        config: { headers: {'Content-Type': 'application/x-www-form-urlencoded' }}
      })
      .then((res) =>{ 
        this.all_points = res.data[0].points
        this.sign_in_today = res.data[0].sign_in_today
        this.sign_in_number = res.data[0].sign_in_number
        if (this.all_points==0) {
          this.all_points ="0"
        }
        else{
          this.all_points = res.data[0].points
        }
        // 查询签到数量
        this.showSignMany()
      })
      .catch(err =>{
        console.log(err)
      })
    },
    // 签到领取积分
    signGetPoints(){
      var formdata = new FormData()
      const user_id = JSON.parse(sessionStorage.loginUser).data.user_id
      formdata.append('user_id',user_id)
      formdata.append('sign_in_today',this.sign_in_today)
      axios({
        method:"POST",
        url:this.urlSignPoints,
        data:formdata,
        config: { headers: {'Content-Type': 'application/x-www-form-urlencoded' }}
      })
      .then((res) =>{ 
        if (res.data.status==1) {
          Toast({
            message: '签到成功',
            position: 'middle',
            duration:1000,
          });
          this.loading2 = false
          this.queryMyInfo()
        }
        else{
          Toast({
            message: '签到失败',
            position: 'middle',
            duration:1000
          });
        }
      })
      .catch(err =>{
        console.log(err)
      })
    },
  },
  created(){
    this.queryMyInfo()
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
  #alll{
    background: #fff;
    padding: 2rem 0 1rem 0;
    font-size: .8rem;
    color: #000;
    font-weight: bolder;
  }
  #alll i{
    color: #333;
    font-weight: 400;
    letter-spacing:2px;
  }
  #all i{
    color: #333;
    font-weight: 400;
    letter-spacing:2px;
  }
</style>
