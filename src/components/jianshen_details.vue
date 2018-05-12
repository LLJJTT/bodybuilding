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
             <div v-if="showP">
              <li class="word">{{points}}</li>
              <li class="name">获得积分</li>
             </div>
             <div v-if="showGetP">
               <li @click="receivePoints"  class="word btn">领取</li>
               <li class="name">{{points}}&nbsp;积分</li>
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
                <button :disabled="startStatus" id="start" @click="goStart">开始</button>
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
import { Toast } from 'mint-ui';
export default {
  data () {
    return {
      imgUrl:'static/img/news1.jpg',
      title:"俯卧撑",
      keep_time:'10',
      points:'20',
      level:'L1',
      introduce:'健美操也属于有氧运动，运动强度和燃脂效果不亚于跑步，如果觉得跑步过于枯燥，那么可以用健美操来代替，健美操一般指搏击操、杠铃操、健身操等健身房的公共课目运动，适合各个年龄层练习',
      active_time:'6',
      listData:{},
      startStatus:false,
      showGetP:false,
      showP:true,
      jianshen_id:'',
      ls:'0',
      urlLingPoints:'http://112.74.63.14/BodyPratice/bodybuilding_php/successLingPoints.php',
      urlLingInsert:'http://112.74.63.14/BodyPratice/bodybuilding_php/successLingInserLock.php',
      urlQueryLingStatus:'http://112.74.63.14/BodyPratice/bodybuilding_php/queryLingStatus.php',

    }
  },
  methods:{
    receivePoints(){
      // 根据领取状态，判断可否点击
      if (this.ls==0) {
        var formdata = new FormData()
        const user_id = JSON.parse(sessionStorage.loginUser).data.user_id
        formdata.append('user_id',user_id)
        formdata.append('obj_points',this.points)
        formdata.append('jianshen_id',this.listData.id)
        formdata.append('yes_get_points','1')
        axios({
          method:"POST",
          url:this.urlLingPoints,
          data:formdata,
          config: { headers: {'Content-Type': 'application/x-www-form-urlencoded' }}
        })
        .then((res) =>{ 
          if (res.data.status==1) {
            this.ls = 1
            Toast({
              message: '领取成功',
              position: 'middle',
              duration:1000
            });
          }
        })
        .then((res) =>{
          axios({
            method:"POST",
            url:this.urlLingInsert,
            data:formdata,
            config: { headers: {'Content-Type': 'application/x-www-form-urlencoded' }}
          })
          .then((res) =>{ 
            console.log(res.data)
          })
          .catch(err =>{
            console.log(err)
          })
        })
        .catch(err =>{
          console.log(err)
        })
      }
      else{
        Toast({
          message: '你已经领取过了',
          position: 'middle',
          duration:1000
        });
      }
    },

    // 点击开始
   goStart(){
      this.startStatus = true
      var that = this
      var timer = setInterval(function(){
        that.active_time --
        if (that.active_time==1) {
          clearInterval(timer)
          that.active_time = "已完成"
          that.showGetP = true
          that.showP = false
        }
      },1000)
    },
    // 加载详情页面数据源
    getData(){
      this.listData = this.$route.params.listData
      this.imgUrl = this.listData.img
      this.title = this.listData.obj_name
      this.keep_time = this.listData.keep_time
      this.active_time = this.keep_time*60
      this.level = this.listData.level
      this.points = this.listData.success_get_points
      this.introduce= this.listData.introduce
      var formdata = new FormData()
      const user_id = JSON.parse(sessionStorage.loginUser).data.user_id
      formdata.append('user_id',user_id)
      formdata.append('jianshen_id',this.listData.id)
      // 查询领取状态
      axios({
        method:"POST",
        url:this.urlQueryLingStatus,
        data:formdata,
        config: { headers: {'Content-Type': 'application/x-www-form-urlencoded' }}
      })
      .then((res) =>{ 
        console.log(res.data)
        if (res.data.length==0) {
          this.showGetP = false
          this.showP = true
          this.ls = 0
        }
        else if (res.data[0].yes_get_points==1) {
          this.ls = 1
          this.showGetP = true
          this.showP = false
          this.startStatus = true
          this.active_time = "已完成"
        }
      })
      .catch(err =>{
        console.log(err)
      })
      // console.log()
    },
  },
  created(){
    this.getData()
  }
}
</script>

<style scoped>
  #jianshen_details{
    max-height: 38rem;
    overflow: auto;
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
  .btn{
    background: #fb3b1f;
    border-radius: 4px;
    color: #fff;
  }
  .btn:hover{
    background: #aaa;
  }
</style>







