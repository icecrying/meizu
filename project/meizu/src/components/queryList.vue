<template>
    <div class="page">
      <ul class="wrapper">
        <li class="wrapper-item clearfix" v-for="(item, index) in data" :key="index">
          <div class="title pull-left">{{item.name}}:</div>
          <ul class="pull-left">
            <li class="options" :class="{'active': activeFilter[item.key] === info.value}" v-for="(info, i) in item.queryList" :key="i" @click="changeFilter(item.key,info.value)">{{info.name}}</li>
          </ul>
        </li>
      </ul>
    </div>
</template>

<script type="text/javascript">
  export default {
    name: 'queryList',
    props: {
      data: {
        default () {
          return [];
        }
      }
    },
    data () {
      return {
        activeFilter: {}
      };
    },
    components: {},
    methods: {
      changeFilter (key, val) {
        // vm.$set 方法：添加响应式样式。
        this.$set(this.activeFilter, key, val);
        this.$emit('filter', this.activeFilter);
      }
    }
  };
</script>

<style lang="less" scoped>
  .wrapper{
    background-color: #ffffff;
    padding: 15px 10px;
    border: 1px solid #efefef;
    .wrapper-item{
      line-height: 46px;
      .title{
        width: 85px;
        padding-left: 10px;
        white-space: nowrap;
        overflow: hidden;
        color: #333;
      }
      .options{
        cursor: pointer;
        display: inline-block;
        margin-right: 62px;
        &.active{
          color: #00c3f5;
        }
      }
    }
  }
</style>
