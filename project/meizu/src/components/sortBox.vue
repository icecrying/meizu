<template>
    <div class="sort-box clearfix">
      <div class="sort-order pull-left">
        <a href="javascript:;" @click="setSortKey('tuijian')" :class="{'active': activeSortKey === 'tuijian'}">推荐</a>
        <a href="javascript:;" @click="setSortKey('xinpin')" :class="{'active': activeSortKey === 'xinpin'}">新品</a>
        <a href="javascript:;" @click="changePrice" :class="{'active': activeSortKey === 'high'|| activeSortKey === 'low'}">价格 <i class="icon-font arrow" :class="aortArrow"></i> </a>
      </div>
      <div class="pull-right">
        <input v-model="haveStock" type="checkbox"><span>仅显示有货商品</span>
      </div>
    </div>
</template>

<script type="text/javascript">
  export default {
    name: 'sort-box',
    data () {
      return {
        activeSortKey: '',
        activePrice: 'high',
        haveStock: false
      };
    },
    watch: {
      haveStock (val) {
        this.$emit('getStock', val);
      }
    },
    computed: {
      aortArrow () {
        if (this.activePrice === 'high') {
          return 'icon-down';
        } else {
          return 'icon-up';
        }
      }
    },
    components: {},
    mounted () {
      this.setSortKey('tuijian');
    },
    methods: {
      setSortKey (val) {
        this.activeSortKey = val;
        this.$emit('getKey', this.activeSortKey);
      },
      changePrice () {
        this.setSortKey(this.activePrice);
        if (this.activeSortKey === this.activePrice) {
          this.activePrice = this.activePrice === 'high' ? 'low' : 'high';
        }
      }
    }
  };
</script>

<style lang="less" scoped>
  .sort-box{
    margin: 30px auto 20px;
    color: #666;
    .sort-order a{
      margin-right: 50px;
      .arrow{
        display: none;
      }
      &:hover, &.active{
        color: #00c3f5;
        transition: all .2s;
      }
      &:hover .arrow{
        display: inline;
      }
    }
  }
</style>
