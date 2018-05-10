<template>
  <div class="nav">
  	<mt-tabbar class="bar" v-model="selected">
		  <mt-tab-item id="首页">
		  	<img slot="icon" src="../../static/img/shouye.png">
		    首页
		  </mt-tab-item>
		  <mt-tab-item id="健身">
		  	<img slot="icon" src="../../static/img/jianshen.png">
		    健身
		  </mt-tab-item>
		  <mt-tab-item id="知识">
		  	<img slot="icon" src="../../static/img/zhishiku.png">
		    知识
		  </mt-tab-item>
		  <mt-tab-item id="我的">
		  	<img slot="icon" src="../../static/img/my.png">
		    我的
		  </mt-tab-item>
		</mt-tabbar>
</div>
</template>
<script>
import { Toast } from 'mint-ui';
import axios from 'axios'
import { Tabbar, TabItem } from 'mint-ui'
export default {
  data () {
    return {
    	selected:'首页',
    }
  },
  methods:{
  	
  },
  watch:{
  	selected: function (val, oldVal) {
      // 这里就可以通过 val 的值变更来确定，你当前点的是哪个
      if (val=='首页') {
      	this.$router.push({
      		path:'/index/home'
      	})
      }
      else if (val=='健身') {
      	this.$router.push({
      		path:'/index/jianshen'
      	})
      }
      else if (val=='知识') {
      	this.$router.push({
      		path:'/index/zhishi'
      	})
      }
      else if (val=='我的') {
      	this.$router.push({
      		path:'/index/my'
      	})
      }
    }
  }
}
</script>

<style scoped>
	.nav{
	}
	.bar{
		background: #e6e6e6;
	}
	.mint-tabbar > .mint-tab-item.is-selected{
		    background-color: #cccdd2;
	}
</style>









