<template>
  <div>
    <div v-if="data.length>0">
      <ul class="clearfix">
        <li v-for="(item,index) in data" :key="index" class="goods" :class="{'last-child':(index+1)%4 == 0}">
          <a :href="item.href">
            <img-list :data="item.colorImageUrls"></img-list>
            <div class="goods-name">{{item.goodsName}}</div>
            <div class="goods-desc">{{item.goodsDesc}}</div>
            <div class="goods-price">
              <i>¥</i>{{item.goodsPrice}}<span v-if="item.lower" class="lower">起</span><span v-if="item.oldPrice" class="old-price">¥{{item.oldPrice}}</span>
            </div>
          </a>
          <div v-if="item.newProduct" class="goods-news">新品</div>
        </li>
      </ul>
    </div>
    <div v-if="data.length<=0 && isGetData" class="clearfix empty">
      <div class="pull-left empty-img"></div>
      <div class="pull-right empty-cont">
        <h3>抱歉没有找到相关商品</h3>
        <p>建议您：<br>
        1.适当减少筛选条件<br>
        2.尝试其他条件
        </p>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import imgList from '@/components/imgList';
  export default {
    name: 'category-list',
    props: {
      data: {
        type: Array,
        default () {
          return [];
        }
      },
      isGetData: {
        type: Boolean,
        default () {
          return false;
        }
      }
    },
    data () {
      return {};
    },
    components: {
      imgList
    }
  };
</script>

<style lang="less" scoped>
  .goods{
    width: 303px;
    height: 416px;
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
    margin-bottom: 2px;
    font-size: 14px;
    color: #333;
  }
  .goods-desc{
    color: #999;
    font-size: 12px;
  }
  .goods-price{
    display: inline-block;
    font-size: 18px;
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
      font-size: 12px;
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
  .empty{
    width: 335px;
    margin: 120px auto 380px;
    .empty-img{
      width: 105px;
      height: 135px;
      background: url("../assets/img/xiongmao.png") no-repeat;
      margin-right: 30px;
    }
    .empty-cont{
      h3{
        margin: 15px 0;
        font-size: 18px;
        line-height: 18px;
        color: #00c3f5;
      }
    }
  }
</style>
