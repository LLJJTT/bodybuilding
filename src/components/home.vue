<template>
  <div id="home">
    <!-- 轮播图 -->
    <div class="block">
      <el-carousel height="150px"
      arrow="hover" >
        <el-carousel-item v-for="item in swiper" :key="item.index">
          <img :src="item.src" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 搜索 -->
    <div class="search">
      <el-input @focus="goSearch" prefix-icon="el-icon-search" placeholder="搜索健身运动名字"></el-input>
    </div>
    <!-- 排行榜 -->
    <div class="rank">
      <img class="longhu" src="static/img/longhubang.png" alt="">
      <div>
        <el-table
        :data="rankList"
        style="width: 100%"
        max-height="260"
        >
        <el-table-column
          type="index"
          label="排名"
        align="center"
          >
        </el-table-column>
        <el-table-column
          prop="nick_name"
          label="账号"
        align="center"

          >
        </el-table-column>
        <el-table-column
          prop="points"
          label="积分"
        align="center"
          >
        </el-table-column>
      </el-table>
      </div>
    </div>
    <!-- 推荐 -->
    <div class="recommend">
      <div class="wrapper">
        <h1>饮食指南：</h1>
        <p>早餐：全麦面包 2片，牛奶 1杯，水煮蛋 2个 </p>
        <img src="static/img/9.jpeg" alt="">
      </div>
      <div class="wrapper">
        <h1>健身器械：</h1>
        <p>卧式自行车、台阶机</p>
        <img src="static/img/8.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { Swipe, SwipeItem } from 'mint-ui';
export default {
  data () {
    return {
      rankList:[],
      arr:[],
      swiper:[{
          src:'static/img/1.jpg'
        },{
          src:'static/img/2.jpg',
        },{
          src:'static/img/3.jpg',
        },{
          src:'static/img/4.jpg',
      }],
      urlRankList:'http://112.74.63.14/BodyPratice/bodybuilding_php/rankingList.php'
    }
  },
  methods:{
    // 搜索
    goSearch(){
      this.$router.push({
        path:'/index/search'
      })
    },
    getRankList(){
      axios({
        method:'GET',
        url:this.urlRankList,
        config: { 
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded' 
          }
        }
      })
      .then((res)=>{

        // 排行榜,按照降序排列
        function compare(property){
            return function(a,b){
                var value1 = a[property];
                var value2 = b[property];
                return value2 - value1;
            }
        }
        // 按照points积分大小排序 
        this.rankList = res.data.sort(compare('points'))
        console.log(this.rankList)
      })
    }
  },
  created(){
    this.getRankList()
  }
}
</script>

<style scoped>
  #home{
    max-height: 38rem;
    overflow: auto;
  }
  .block img{
    background-size: cover;
    width: 100%;
    height: 100%;
  }
  .longhu{
    height: 110px;
    width: 100%;
  }
  .wrapper {
    color: #fff;
    margin-bottom: .6rem;
    /* padding: 1rem 0; */
    position: relative;
  }
  .wrapper h1{
    font-size: .8rem;
    z-index: 999;
    position: absolute;
    left: 2rem;
    top: 2rem;
  }
  .wrapper p{
    font-weight: 400;
    text-indent: 5rem;
    position: absolute;
    z-index: 999;
    top: 4rem;

  }
  .wrapper img{
    width: 98%;
    margin: 0 auto;
    display: block;
    height: 7rem;
  }
  .search{
    width: 98%;
    margin: .5rem auto;
  }
  .recommend{
  }
</style>
