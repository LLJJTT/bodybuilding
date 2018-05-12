<template>
  <div id="search_fa">
     <div id="title">
        搜索
    </div>
    <div id="search">
        <el-input ref="inp"   placeholder="请输入关键字搜索" v-model="searchVal" class="input-with-select">
          <el-button  @click="goSearch" slot="append" icon="el-icon-search"></el-button>
        </el-input>
    </div>
    <!-- 搜索列表 -->
    <div :style="showResult" id="search_result">
      <ul>
        <li @click="goDetails(item)" class="scenery_name" v-for="item in listData">{{item.obj_name}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import { Toast } from 'mint-ui'
  export default{
    data(){
      return{
       searchVal:'',
       searchAjaxUrl:'http://112.74.63.14/BodyPratice/bodybuilding_php/search.php',
       listData:[],
       showResult:'display:block'
      }
    },
    methods:{
      // 判断是否显示list
      showResultList(){
        if(this.listData.length==0){
          this.showResult = 'display:none'
        }
        else{
          this.showResult = 'display:block'
        }
      },
      goSearch(){
        if (this.searchVal=='') {
          Toast({
            message:'请输入内容',
            duration:3000,
          })
        }
        else{
          var bodybormdata = new FormData();
          bodybormdata.append('searchVal',this.searchVal);
          axios({
            method:'POST',
            url:this.searchAjaxUrl,
            data:bodybormdata,
            config: { 
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded' 
              }
            }
          })
          .then((res)=>{
            if (res.status==200) {
              this.listData = res.data
              this.showResultList()
              console.log(res.data)
              if (res.data.length==0) {
                Toast({
                  message:'无搜索结果',
                  duration:3000,
                })
              }
            }
          })
        }
      },
      goDetails(item){
        this.$router.push({
          name:'zhishi_details',
          params:{
            detailData:item,
          },
        })
      }
    },
    created:function(){
      this.showResultList()
    },
    mounted() {
      this.$refs['inp'].focus()
    }
  }
</script>

<style scoped>
  #search_fa{
    height:90%;
    overflow:auto;
   
  }
  #title{
      background: #eeb172;
      padding:1rem 0;
      font-size:1rem;
      font-weight:bold;
      letter-spacing:.12rem;
      color:#fff;

    }
    #search{
      margin-top: .6rem;
      padding:0 .8rem;
    }
    #search_result{
      padding: .4rem .8rem;
    }
    .scenery_name{
      border-bottom: 1px solid #f5f5f5;
      text-align: left;
      text-indent: 1rem;
      background:#f3f3f3;
      padding: .2rem .8rem;
      font-size: .8rem;
      color: #9e92ae;
    }
</style>








