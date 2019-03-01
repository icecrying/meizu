<template>
    <div>
      <v-header></v-header>
      <div class="swiper-wrapper">
        <swiper :data = "swiperData"></swiper>
        <ul class="swiper-nav clearfix">
          <li v-for="(item,index) in menuData" :key="index">
            <a :href="item.href">{{item.name}}</a>
          </li>
        </ul>
      </div>
      <div class="swiper-advert">
        <ul>
          <li v-for="(item,index) in advertData" :key="index">
            <img :src="item.imgUrl" alt="">
          </li>
        </ul>
      </div>
      <div class="index-container">
        <div class="sale">
          <h3 class="title">热卖商品</h3>
          <!--将hotGoods数据传递给子组件-->
          <goods-list :data="hotGoods"></goods-list>
        </div>
        <div class="sale">
          <h3 class="title">手机</h3>
          <advert-list :data="phoneRecommend"></advert-list>
          <goods-list :data="phoneSale"></goods-list>
        </div>
        <div class="sale">
          <h3 class="title">智能配件</h3>
          <advert-list :data="smartRecommend"></advert-list>
          <goods-list :data="smartSale"></goods-list>
        </div>
      </div>
      <v-footer></v-footer>
    </div>
</template>

<script>
  import axios from 'axios';
  // 引入头部header组件
  import vHeader from '../components/header';
  // 引入轮播图swiper组件
  import swiper from '@/components/swiper';
  // 引入热卖商品组件
  import goodsList from '@/components/goodsList';
  import advertList from '@/components/advertList';
  import vFooter from '@/components/vFooter';
  export default {
    name: 'index',
    data () {
      return {
        // 存放轮播图的数据
        swiperData: [],
        // 存放轮播图旁的导航菜单
        menuData: [],
        // 存放广告数据
        advertData: [],
        // 存放热卖商品的数据
        hotGoods: [],
        phoneSale: [],
        smartSale: [],
        // 存放广告数据
        phoneRecommend: [],
        smartRecommend: []
      };
    },
    mounted () {
      this.getSwiperData();
      this.getMenuData();
      this.getAdvertData();
      this.getHotGoodsData();
      this.getPhoneSale();
      this.getSmartSale();
      this.getPhoneRecommend();
      this.getSmartRecommend();
    },
    components: {
      vHeader,
      swiper,
      goodsList,
      advertList,
      vFooter
    },
    methods: {
      // 获取轮播图的数据
      async getSwiperData () {
        const {data} = await axios.get('/api/advertise');
        this.swiperData = data;
      },
      // 获取轮播图导航栏的数据
      async getMenuData () {
        const {data} = await axios.get('/api/menu');
        this.menuData = data;
      },
      // 获取轮播图下面广告栏的数据
      async getAdvertData () {
        const {data} = await axios.get('./api/post');
        this.advertData = data;
      },
      // 获取热卖商品的数据
      async getHotGoodsData () {
        const {data} = await axios.get('./api/hotSale');
        this.hotGoods = data;
      },
      async getPhoneSale () {
        const {data} = await axios.get('./api/phoneSale');
        this.phoneSale = data;
      },
      async getSmartSale () {
        const {data} = await axios.get('./api/smartSale');
        this.smartSale = data;
      },
      async getPhoneRecommend () {
        const {data} = await axios.get('./api/phoneRecommend');
        this.phoneRecommend = data;
      },
      async getSmartRecommend () {
        const {data} = await axios.get('./api/smartRecommend');
        this.smartRecommend = data;
      }
    }
  };
</script>

<style lang="less" scoped>
.swiper-wrapper{
  width: 1240px;
  height: 500px;
  position: relative;
  margin: 0 auto;
  .swiper-nav{
    width: 303px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.5);
    padding-top: 17px;
    li{
      padding-left: 40px;
      height: 57px;
      line-height: 57px;
      a{
        font-size: 16px;
        color: #fff;
        transition: color .3s;
        cursor: pointer;
        &:hover{
          color: #31a5e7;
        }
      }
    }
  }
}
.swiper-advert{
  width: 1240px;
  height: 180px;
  margin: 10px auto 50px;
  li{
    float: left;
    margin-right: 9px;
  }
  li:last-child{
    margin-right: 0;
  }
}
  .index-container{
    width: 1240px;
    margin: 0 auto;
    .sale{
      margin-bottom: 50px;
      .title{
        height: 45px;
        font-size: 30px;
        line-height: 45px;
        font-weight: 400;
        margin-bottom: 10px;
      }
    }
  }
</style>
