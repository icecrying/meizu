<template>
    <div class="advert-list clearfix">
      <div class="advert-left pull-left">
        <a :href="data[0] && data[0].href">
          <img class="advert-img" :src="data[0] && data[0].imgUrl" alt="">
        </a>
      </div>
      <div class="advert-right pull-right">
        <div class="right-top">
          <a :href="data[1] && data[1].href">
            <img class="advert-img" :src="data[1] && data[1].imgUrl" alt="">
          </a>
        </div>
        <div class="clearfix">
          <div class="right-bottom pull-left">
            <a :href="data[2] && data[2].href">
              <img class="advert-img" :src="data[2] && data[2].imgUrl" alt="">
            </a>
          </div>
          <div class="right-bottom pull-right">
            <a :href="data[3] && data[3].href">
              <img class="advert-img" :src="data[3] && data[3].imgUrl" alt="">
            </a>
          </div>
        </div>
      </div>
    </div>
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
  .advert-list{
    width: 1240px;
    height: 450px;
    margin: 0 auto;
    overflow: hidden;
    .advert-left{
      height: 450px;
      width: 615px;
    }
    .right-top{
      width: 616px;
      height: 220px;
      margin-bottom: 10px;
    }
    .right-bottom{
      width: 303px;
      height: 220px;
    }
  }
  .advert-img{
    width: 100%;
    height: 100%;
  }
</style>
