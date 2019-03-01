<template>
  <ul class="clearfix">
    <li v-for="(item,index) in data" :key="index" class="goods" :class="{'last-child':(index+1)%4 == 0}">
      <a :href="item.href">
        <img class="goods-img" :src="item.goodsUrl" alt="">
        <div class="goods-name">{{item.goodsName}}</div>
        <div class="goods-desc">{{item.goodsDesc}}</div>
        <div class="goods-price">
          <i>¥</i>{{item.goodsPrice}}<span v-if="item.lower" class="lower">起</span><span v-if="item.oldPrice" class="old-price">¥{{item.oldPrice}}</span>
        </div>
      </a>
      <div v-if="item.newProduct" class="goods-news">新品</div>
    </li>
  </ul>
</template>

<script type="text/javascript">
  export default {
    data () {
      return {};
    },
    props: {
      data: {
        type: Array,
        default () {
          return [];
        }
      }
    },
    components: {}
  };
</script>

<style lang="less" scoped>
  .goods{
    width: 303px;
    height: 400px;
    margin-top: 10px;
    margin-right: 9px;
    float: left;
    background-color: #fff;
    cursor: pointer;
    transition: all .3s ease;
    position: relative;
    overflow: hidden;
    text-align: center;
    &:hover{
      box-shadow: 0 15px 30px rgba(0,0,0,0.1);
    }
    &.last-child{
      margin-right: 0;
    }
  }
  .goods-img{
    height: 230px;
    margin-top: 30px;
  }
  .goods-name{
    margin-top: 30px;
    margin-bottom: 2px;
    font-size: 16px;
    color: #333;
  }
  .goods-desc{
    color: #999;
    font-size: 14px;
  }
  .goods-price{
    display: inline-block;
    font-size: 22px;
    color: #c00;
    padding-left: 14px;
    position: relative;
    i{
      font-style: normal;
      font-size: 14px;
      position: absolute;
      top: 5px;
      left: 0;
    }
    .lower{
      font-size: 16px;
    }
    .old-price{
      text-decoration: line-through;
      color: #666;
      font-size: 14px;
      margin-left: 8px;
    }
  }
  .goods-news{
    position: absolute;
    top: 30px;
    left: 30px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border-radius: 50%;
    background: linear-gradient(120deg,#2e74f6,#56bdf9);
    color: white;
  }
</style>
