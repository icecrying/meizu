<template>
    <div class="page">
      <v-header></v-header>
      <div class="category-wrapper">
        <div class="bread">
          <span>首页</span>
          <span class="arrow"> > </span>
          <span>全部</span>
          <span class="arrow"> > </span>
          <span class="last-bread">手机</span>
        </div>
        <query-list :data="queryListData" @filter="getQuery"></query-list>
        <sort-box @getKey="getSortKey" @getStock="getSortStock"></sort-box>
        <category-list :data="categoryListData" :isGetData="isGetData"></category-list>
      </div>
      <v-footer></v-footer>
    </div>
</template>

<script type="text/javascript">
  import axios from 'axios';
  import vHeader from '../components/header';
  import vFooter from '@/components/vFooter';
  import categoryList from '../components/categoryList';
  import queryList from '@/components/queryList';
  import sortBox from '@/components/sortBox';
  export default {
    name: 'category',
    data () {
      return {
        categoryListData: [],
        queryListData: [],
        categoryListCopy: [],
        currentQuery: null,
        currentSortKey: null,
        currentSortStock: null,
        isGetData: false
      };
    },
    components: {
      vHeader,
      vFooter,
      categoryList,
      queryList,
      sortBox
    },
    mounted () {
      this.getCategoryListData();
      this.getQueryListData();
    },
    methods: {
      async getCategoryListData () {
        const {data} = await axios.get('/api/categoryList');
        this.categoryListData = data;
        // 复制一份初始的数据
        this.categoryListCopy = [...data];
        this.isGetData = true;
      },
      async getQueryListData () {
        const {data} = await axios.get('/api/queryList');
        this.queryListData = data;
      },
      getQuery (val) {
        this.currentQuery = val;
        this.goodsFilter();
      },
      goodsFilter () {
        // 将之前复制的初始数据再重置
        this.categoryListData = [...this.categoryListCopy];
        // 对列表进行排序筛选
        if (this.currentQuery) {
          Object.keys(this.currentQuery).forEach((key) => {
            if (this.currentQuery[key]) {
              this.categoryListData = this.categoryListData.filter((item) => {
                return item.features.indexOf(this.currentQuery[key]) >= 0;
              });
            }
          });
        }
        // 推荐排序栏进行筛选
        if (this.currentSortKey) {
          if (this.currentSortKey === 'tuijian') {
            this.categoryListData.sort((a, b) => {
              return b.shelveTime - a.shelveTime;
            });
          } else if (this.currentSortKey === 'xinpin') {
            this.categoryListData.sort((a, b) => {
              return b.publishedTime - a.publishedTime;
            });
          } else if (this.currentSortKey === 'high') {
            this.categoryListData.sort((a, b) => {
              return b.goodsPrice - a.goodsPrice;
            });
          } else if (this.currentSortKey === 'low') {
            this.categoryListData.sort((a, b) => {
              return a.goodsPrice - b.goodsPrice;
            });
          }
        }
        // 对有货商品排序
        if (this.currentSortStock) {
          this.categoryListData = this.categoryListData.filter((item) => {
            return item.available;
          });
        };
      },
      getSortKey (key) {
        this.currentSortKey = key;
        this.goodsFilter();
      },
      getSortStock (val) {
        this.currentSortStock = val;
        this.goodsFilter();
      }
    }
  };
</script>

<style lang="less" scoped>
  .category-wrapper{
    width: 1240px;
    margin: 0 auto;
    .bread{
      height: 40px;
      line-height: 40px;
      .arrow,.last-bread{
        color: #999;
      }
    }
  }
</style>
