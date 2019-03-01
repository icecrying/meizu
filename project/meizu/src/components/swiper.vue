<template>
    <div class="swiper" :style="swiperSize">
      <ul class="swiper-ul" :style="listWrapper" @transitionend="setDuration">
        <li class="swiper-list" v-for="(item,index) in data" :key="index">
          <a :href="item.herf"><img :src="item.imgUrl" alt="" :style="swiperSize"></a>
        </li>
        <li class="swiper-list" :key="data.length+1" v-if="data.length > 1">
          <a :href="data[0].herf"><img :src="data[0].imgUrl" alt="" :style="swiperSize"></a>
        </li>
      </ul>
      <ul class="swiper-button">
        <li v-for="(item,index) in data" :key="index" @click="changeImg(index)" :class="{'active': index == activeIndex}"></li>
      </ul>
    </div>
</template>

<script type="text/javascript">
  export default {
    name: 'swiper',
    props: {
      // 父组件向子组件传递数据 在父组件上绑定:data=""即可传递
      data: {
        type: Array,
        default () {
          return [];
        }
      },
      height: {
        type: Number,
        // 默认数据
        default: 500
      },
      width: {
        type: Number,
        default: 1240
      },
      //  延迟时间
      delay: {
        type: Number,
        default: 5000
      }
    },
    computed: {
      // 轮播图的宽高
      swiperSize () {
        return {
          width: `${this.width}px`,
          height: `${this.height}px`
        };
      },
      listWrapper () {
        return {
          width: `${(this.data.length + 1) * this.width}px`,
          height: `${this.height}px`,
          transform: `translateX(${-this.activeIndex * this.width}px)`,
          transitionDuration: this.haveDuration ? '0.3s' : ''
        };
      }
    },
    data () {
      return {
      //  当前显示图片的下标
        activeIndex: 0,
        timer: null,
        haveDuration: true
      };
    },
    mounted () {
      this.setTimer();
    },
    methods: {
      setTimer () {
        clearInterval(this.timer);
        this.timer = setInterval(() => {
          if (this.activeIndex === this.data.length) {
            this.activeIndex = 0;
            this.haveDuration = false;
          } else {
            this.activeIndex++;
            this.haveDuration = true;
          }
        }, this.delay);
      },
      changeImg (index) {
        // this.$options.methods.setTimer();  调用setTimer方法
        clearInterval(this.timer);
        this.timer = setInterval(() => {
          if (this.activeIndex === this.data.length) {
            this.activeIndex = 0;
            this.haveDuration = false;
          } else {
            this.activeIndex++;
            this.haveDuration = true;
          }
        }, this.delay);
        this.activeIndex = index;
        this.haveDuration = true;
      },
      // 设置过渡时间
      setDuration () {
        if (this.activeIndex === this.data.length) {
          this.activeIndex = 0;
          this.haveDuration = false;
        }
      }
    },
    components: {}
  };
</script>

<style lang="less" scoped>
  .swiper{
    position: relative;
    overflow: hidden;
    .swiper-ul{
      font-size: 0;
    }
    .swiper-list{
      display: inline-block;
    }
    .swiper-button{
      position: absolute;
      left: 30%;
      bottom: 20px;
      li{
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: white;
        margin: 0 8px;
        display: inline-block;
        cursor: pointer;
        &.active{
          background-color: transparent;
          border: 1px solid white;
        }
      }
    }
  }
</style>
