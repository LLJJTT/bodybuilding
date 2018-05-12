<template>
  <div id="zhishi">
    <div id="title">
      知识
    </div>
    <div id="listDiv">
      <div @click="goZhishiDetails(item)" v-for="item in listData" class="wrapper">
        <span class="biaoti">{{item.obj_name}}</span><span class="tupian"><img :src="item.img" alt=""><div style="clear:both;"></div></span>
      </div>
    </div>
    <div style="margin-top:100px;font-size:1rem;" v-if="showStatus">无数据</div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
import axios from 'axios'
export default {
  data () {
    return {
      listData:[],
      showStatus:false,
      urlZhishi:'http://112.74.63.14/BodyPratice/bodybuilding_php/zhishiList.php'
    }
  },
  methods:{
  	goZhishiDetails(item){
      console.log(item)
      this.$router.push({
        name:'zhishi_details',
        params:{
          detailData:item
        }
      })
    },
    getData(){
      axios({
        method:'GET',
        url:this.urlZhishi,
        config: { 
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded' 
          }
        }
      })
      .then((res)=>{
          this.listData = res.data
          if (this.listData.length==0) {
            this.showStatus = true
          }
      })
    }
  },
  created(){
    this.getData()
  }
  
}
</script>

<style scoped>
#zhishi{
  max-height: 38rem;
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
    background: #eee;
    border-bottom: 1px solid #d7d6d6;
  }
  .biaoti{
    font-size: 1rem;
    height: 4.4rem;
    line-height: 4.4rem;
    display: inline-block;
    float: left;
    text-indent: 3rem;
  }
  .tupian{

  }
  .tupian img{
    padding: .4rem;
    float: right;
    display: inline-block;
    width: 4.4rem;
    height: 4.4rem;

  }
</style>









