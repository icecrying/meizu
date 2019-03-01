<template>
    <div class="header">
      <div class="header-wrapper clearfix">
        <!--logo区域-->
        <div class="header-logo pull-left"></div>
        <!--购物车图标-->
        <div class="header-cart pull-right">
          <span class="icon-moon icon-cart"></span>
        </div>
        <!--用户图标-->
        <div class="header-user pull-right">
          <span class="icon-moon icon-user"></span>
        </div>
        <!--搜索框-->
        <div class="header-search pull-right">
          <input class="search-input" type="text" placeholder="购物车">
          <span class="icon-moon icon-search search-span"></span>
        </div>
        <!--导航区域-->
        <ul class="header-nav pull-right">
          <li v-for="(item,index) in navData" :key="index" @mouseenter="showChildren(item)">
            <a class="nav-item" href="javascript:;" @click="goToCategory">{{item.name}}</a>
          </li>
        </ul>
      </div>
      <!--导航区下拉框-->
      <!--设置过渡效果-->
      <transition name = "nav">
        <div class="nav-children" v-show="childrenShow" @mouseleave="hideChildren">
          <div class="children-wrapper">
            <transition-group tag="ul" @enter="enter">
              <li class="children-item" v-for="(item,index) in childrenData" :key="item.skid" :data-index="index">
                <img :src="item.pic" alt="">
                <p>{{item.name}}</p>
                <p>{{item.price}}</p>
              </li>
            </transition-group>
          </div>
        </div>
      </transition>
    </div>
</template>

<script>
  import axios from 'axios';
  import Velocity from 'velocity-animate';
  export default {
    name: 'vheader',
    data () {
      return {
        //  存放导航菜单数据
        navData: [],
        //  存放导航下拉菜单数据
        childrenData: [],
        childrenShow: false
      };
    },
    mounted () {
      // mounted ()，这是一个钩子函数，getNavData函数要执行，必须执行钩子函数
      // 钩子函数完成对getNavData函数的调用
      this.getNavData();
    },
    methods: {
      async getNavData () {
        //  通过axios获取数据
        const {data} = await axios.get('/api/nav');
        //  把数据存在navData数组中
        this.navData = data;
      },
      showChildren (item) {
        this.childrenData = item.children;
        this.childrenShow = true;
      },
      hideChildren () {
        this.childrenShow = false;
        this.childrenData = [];
      },
      enter (el) {
        const timeOut = el.dataset.index * 150;
        setTimeout(function () {
          Velocity(el, {
            'opacity': 1,
            'translateX': '-150px'
          });
        }, timeOut);
      },
      goToCategory () {
        this.$router.push({
          name: 'Category'
        });
      }
    }
  };
</script>

<style lang="less" scoped>
.header{
  width: 100%;
  background-color: white;
  position: relative;
}
  .header-wrapper{
    width: 1240px;
    margin: 0 auto;
    .header-logo{
      width: 140px;
      height: 26px;
      margin: 28px 0;
      background: url("../assets/img/logo.png") no-repeat center;
    }
    .header-user,.header-cart{
      padding: 29px 10px 0 20px;
      font-size: 24px;
      cursor: pointer;
      line-height: 1;
    }
    .header-search{
      width: 172px;
      height: 32px;
      border: 1px solid #ddd;
      border-radius: 2px;
      position: relative;
      margin: 25px 0;

      .search-input{
        width: 127px;
        height: 20px;
        border: 0;
        outline: none;
        font-size: 12px;
        position: absolute;
        top: 6px;
        left: 5px;
      }
      .search-span{
        font-size: 16px;
        position: absolute;
        top: 8px;
        right: 10px;
      }
    }
    ul.header-nav{
      li{
        display: inline-block;
      }
      a.nav-item{
        display: inline-block;
        padding: 33px 20px;
        font-size: 16px;
        line-height: 1;
        color: #515151;
        cursor: pointer;
        transition: color .1s ease;
        &:hover{
          color: #31a5e7;
        }
      }
    }
  }
  .nav-children{
    width: 100%;
    height: 156px;
    background-color: #ffffff;
    position: absolute;
    left: 0;
    top: 82px;
    border-bottom: 1px solid #e9e9e9;
    z-index: 1;
    .children-wrapper{
      width: 1240px;
      padding-left: 150px;
      margin: 0 auto;
      .children-item{
        width: 136px;
        height: 145px;
        display: inline-block;
        text-align: center;
        font-size: 12px;
        cursor: pointer;
        opacity: 0;
        img{
          width: 100px;
          height: 100px;
        }
      }
    }
    /*设置导航的过渡效果v-enter-active 这里的v被html中的定义类名name=nav替代了
      v-enter 进入过渡状态前    v-enter-active 进入过渡状态时  v-enter-to 进入过渡状态后
      v-leave 离开过渡状态前    v-leave-active 离开过渡状态时  v-leave-to 离开过渡状态后
    */
    .nav-enter-active{
      height: 156px;
      transition: height .3s ease-in-out;
    }
    .nav-enter{
      height: 0;
    }
  }
</style>
