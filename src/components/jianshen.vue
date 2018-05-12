<template>
  <div id="jianshen">
     <div id="title">
      健身
    </div>
    <div id="bodylist">
        <div @click="goJianshenDetails(item)" v-for="item in listData" class="wrapper">
          <h1>{{item.obj_name}}</h1><span class="unlocked">完成人数&nbsp;<i>{{item.locked_number}}</i></span><span class="need_points">积分要达到&nbsp;<i>{{item.go_lock_points}}</i></span>
          <img class="bg" :src="item.img" alt="">
          <!-- <img class="lock_img" :src="lockurl" alt=""> -->
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
      listData:[],
      lockurl:'static/img/lock.png',
      points:'',
      account:'',
      locked_number:'0',
      urlJian:'http://localhost/biye/BodyPratice/php/queryJianshenList.php',
      urlQuery:'http://localhost/biye/BodyPratice/php/queryMyInfomation.php',
    }
  },
  methods:{
  	goJianshenDetails(item){
      if (this.account==''||this.account==null||this.account==undefined) {
        Toast({
            message: '请先登录',
            position: 'middle',
            duration:1000,
          });
      }
      else{
        if (this.points>=item.go_lock_points) {
          this.$router.push({
            name:'jianshen_details',
            query:{
              id:item.id
            },
            params:{
              listData:item
            }
          })
        }
        else{
          Toast({
            message: '积分不足',
            position: 'middle',
            duration:1000,
          });
        }
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
        this.points = res.data[0].points
      })
      .catch(err =>{
        console.log(err)
      })
    },
    queryJianshenList(){
      axios({
        method:"GET",
        url:this.urlJian,
        config: { headers: {'Content-Type': 'application/x-www-form-urlencoded' }}
      })
      .then((res) =>{ 
       this.listData = res.data
      })
      .catch(err =>{
        console.log(err)
      })
    }
  },
  created(){
    this.queryMyInfo()
    this.queryJianshenList()
    this.account = sessionStorage.getItem('account')
  }
  
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
    background: #ac7979;
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









