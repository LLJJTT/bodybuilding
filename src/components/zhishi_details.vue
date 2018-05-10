<template>
  <div id="zhishi_details">
    <div id="title">
      知识详情
    </div>
    <div class="details">
      <h1>{{title}}</h1>
      <div id="content">
        <div><img :src="imgUrl" alt=""></div>
        <div class="des">所有的热爱健身的人都渴望拥有发达的肌肉体积和清晰的肌肉线条，然而这些都是通过都是长时间超负荷的大强度力量训练的结果，同时也离不开科学合理的营养，合理的营养能够增强力量训练的增肌效果，而营养来自于食物中。

那为什么我们需要补剂呢？

很多人认为吃补剂练肌肉好像会变成科学怪人，认为补剂是有害的！认为补剂历练出来的肌肉是假的，其实这些想法用一句话可以概括：没文化、真可怕

确实存在有人吃药练肌肉、那些都是兴奋剂，激素，类固醇。而我们所说的营养补剂和那些不是一个概念。

其实补剂就是利用现代科技从食物中提取的产物，增肌健身需要吃大量食物，科技把食物缩小了，变得更加容易吸收了，更有针对性，去掉了不要的物质！让我们更方便了。不用每天再吃40几个鸡蛋还要去掉蛋黄！

下面就是影响健美运动肌肉增长4种经典营养补剂

1、肌酸

肌酸是一种天然的在肉类和鱼类食品中存在的物质，人体当中也正常含有，由肌酸和磷酸共同合成的磷酸肌酸是人体内主要的能量物质之一。平常人肌酸的日需要量为2至3克，其中一半从食物中获得，另一半可以由精氨酸、甘氨酸和蛋氨酸在人体肝脏、肾脏和胰脏合成。

关于肌酸对运动能力影响的研究有很多，补充肌酸能够提高运动能力、促进训练后恢复。有研究报道每天服用肌酸20克（或0.3克/天/公斤体重），连续补充4至7天，肌肉内肌酸和磷酸肌酸的浓度可增加10~30%。

个人建议如果你不是专业的健美运动员没有太大的必要补充肌酸，如果你感觉前期训练的时候力量跟不上可以是适量的按照肌酸说明书吃一点。

提醒各位现在的营养补剂的牌子有很多，东西多了证明买的人多，买的人多难免会有一些人造假，现在的营养补剂作假的很多尤其是网上的便宜货。大家要小心营养品跟衣服不一样大不了扔了从买。</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      title:'健身人士必备的4种经典营养补剂',
      imgUrl:'static/img/news3.jpg'
    }
  },
  methods:{
   
  },
  created(){
    
  }
}
</script>

<style scoped>
  #zhishi_details{

  }
  #title{
    background: #eeb172;
    padding:1rem 0;
    font-size:1rem;
    font-weight:bold;
    letter-spacing:.12rem;
    color:#fff;
  }
  .details h1{
    padding: .8rem 0;
    font-size: .8rem;
    background: #fff;
  }
  #content img{
    display: block;
    width: 98%;
    height: 10rem;
    margin: 0 auto;
  }
  .des{
    max-height: 20rem;
    overflow: auto;
    padding: 1rem .2rem;
    line-height: 1.8rem;

  }
</style>







