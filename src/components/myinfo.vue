<template>
  <div id="myinfo">
    <div id="title">
      我的信息
    </div>
    <!-- 修改信息 -->
    <div id="modify">
      <ul>
        <li class="wrapper">
          <span>昵称</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <el-input type="text" v-model="nick_name" placeholder="请输入昵称"></el-input>
        </li>
        <li class="wrapper">
          <span>身高</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><i>单位 cm</i>
          <el-input type="number" v-model="height" placeholder="请输入身高"></el-input>
        </li>
        <li class="wrapper">
          <span>体重</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>单位 kg</i>
          <el-input type="number" v-model="weight" placeholder="请输入体重"></el-input>
        </li>
        <li class="wrapper">
          <span>年龄</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>单位 year</i>
          <el-input type="number" v-model="age" placeholder="请输入年龄"></el-input>
        </li>
        <li class="wrapper">
          <span style="float:left;margin-left:4rem">性别</span>
          <el-radio v-model="sex" label="男">男</el-radio>
          <el-radio v-model="sex" label="女">女</el-radio>
        </li>
      </ul>
      <button id="sureModify" @click="modifyMyInfo">确定修改</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { Toast } from 'mint-ui';
export default {
  data () {
    return {
      nick_name:'',
      height:'',
      weight:'',
      age:'',
      sex: '男',
      urlModify:'http://112.74.63.14/BodyPratice/bodybuilding_php/modifyInfomation.php',
      urlQuery:'http://112.74.63.14/BodyPratice/bodybuilding_php/queryMyInfomation.php',

    }
  },
  methods:{
    modifyMyInfo(){
      if (this.nick_name=='') {
        Toast({
          message: '请输入昵称',
          position: 'middle',
          duration:1000
        });
      }
      else if (this.height=='') {
        Toast({
          message: '请输入身高',
          position: 'middle',
          duration:1000
        });
      }
      else if (this.height>251||this.height<140) {
        Toast({
          message: '身高在140-251之间',
          position: 'middle',
          duration:1500
        });
      }
      else if (this.weight=='') {
        Toast({
          message: '请输入体重',
          position: 'middle',
          duration:1000
        });
      }
      else if(this.weight>200||this.weight<30){
        Toast({
          message: '体重在30-200之间',
          position: 'middle',
          duration:1500
        });
      }
      else if (this.age=='') {
        Toast({
          message: '请输入年龄',
          position: 'middle',
          duration:1000
        });
      }
      else if (this.age<15||this.age>60) {
        Toast({
          message: '年龄在15-60岁之间',
          position: 'middle',
          duration:1500
        });
      }
      else{
        this.modifyMes()
      }
    },
    // 修改我得信息
    modifyMes(){
      var formdata = new FormData()
      const user_id = JSON.parse(sessionStorage.loginUser).data.user_id
      formdata.append('user_id',user_id)
      formdata.append('nick_name',this.nick_name)
      formdata.append('height',this.height)
      formdata.append('weight',this.weight)
      formdata.append('age',this.age)
      formdata.append('sex',this.sex)
      axios({
        method:"POST",
        url:this.urlModify,
        data:formdata,
        config: { headers: {'Content-Type': 'application/x-www-form-urlencoded' }}
      })
      .then((res) =>{ 
        if (res.data.status==1) {
          Toast({
            message: '修改成功',
            position: 'middle',
            duration:1000
          });
        }
        else{
          Toast({
            message: '修改失败',
            position: 'middle',
            duration:1000
          });
        }
      })
      .catch(err =>{
        console.log(err)
      })
    },// 查询我的信息
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
        this.nick_name = res.data[0].nick_name
        this.height = res.data[0].height
        this.weight = res.data[0].weight
        this.age = res.data[0].age
        this.sex = res.data[0].sex
      })
      .catch(err =>{
        console.log(err)
      })
    }
  },
  created(){
    this.queryMyInfo()
  }
}
</script>

<style scoped>
  #myinfo{
    height: 100%;
  }
  #title{
    background: #eeb172;
    padding:1rem 0;
    font-size:1rem;
    font-weight:bold;
    letter-spacing:.12rem;
    color:#fff;
  }
  #sureModify{
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
  .wrapper{
    padding: .4rem .2rem;
    margin-top: .6rem;
  }
  .el-input__inner{
    height: 30px;
    line-height: 30px;
    width: 50%;
  }
</style>
