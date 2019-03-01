<template>
  <!--绑定样式设置开关，根据传过来type的值决定用哪一个样式-->
    <div class="img-wrapper" :class="{'img-wrapper': type === 'small', 'img-wrapper': type === 'big'}">
      <img class="img" :src="data[activeIndex]" alt="">
      <ul class="imgs">
        <li class="img-item" :class="{active:activeIndex === index}" v-for="(item, index) in data" :key="index" @click="changeIndex(index)">
          <img class="small-img" :src="item" alt="">
        </li>
      </ul>
    </div>
</template>

<script type="text/javascript">
  export default {
    name: 'img-list',
    props: {
      data: {
        type: Array,
        default () {
          return [];
        }
      },
      // 用于判断img-wrapper 用哪一个样式值
      type: {
        type: String,
        default: 'small'
      }
    },
    data () {
      return {
        activeIndex: 0
      };
    },
    components: {},
    methods: {
      changeIndex (index) {
        this.activeIndex = index;
      }
    }
  };
</script>

<style lang="less" scoped>
  .img-wrapper{
    text-align: center;
    .img{
      height: 230px;
      margin-top: 20px;
    }
    .imgs{
      overflow: hidden;
      margin:13px auto 15px;
      .img-item{
        display: inline-block;
        width: 40px;
        height: 40px;
        border: 1px solid #efefef;
        border-radius: 4px;
        margin-right: 8px;
        cursor: pointer;
        &.active{
          border-color: #bdbdbd;
        }
        .small-img{
          height: 38px;
        }
      }
    }
  }
  .img-wrapper_big{
    text-align: center;
    .img{
      height: 375px;
      margin: 20px auto;
    }
    .imgs{
      overflow: hidden;
      margin-top:10px;
      .img-item{
        display: inline-block;
        width: 75px;
        height: 75px;
        border: 1px solid transparent;
        border-radius: 4px;
        margin-right: 10px;
        cursor: pointer;
        &.active{
          border-color: #bcdcdc;
        }
        .small-img{
          height: 75px;
        }
      }
    }
  }
</style>
