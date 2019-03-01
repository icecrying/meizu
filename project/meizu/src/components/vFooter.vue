<template>
    <div class="footer">
      <div class="footer-list">
        <div class="clearfix">
          <div class="service-left pull-left">
            <ul>
              <li v-for="(item,index) in serviceLink" :key="index">
                <a :href="item.href">
                  <img :src="item.icon" alt=""><span>{{item.name}}</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="service-right pull-right">
            <p class="time">周一至周日 7:30-24:00</p>
            <a class="call" href="">400-788-3333</a>
            <p>在线客服</p>
          </div>
        </div>
        <hr class="hr-style">
        <div class="clearfix">
          <div class="external-left pull-left">
            <ul>
              <li v-for="(item,index) in externalLink" :key="index">
                <a :href="item.href">{{item.name}}</a>
              </li>
            </ul>
            <p class="message">@2018 Meizu Telecom Equipment Co.,Ltd.All rights reserved. 粤ICP备13003602号 合字B2-20170010 营业执照 法律声明</p>
          </div>
          <div class="external-right pull-right">
            <a href=""><span class="icon-moon icon-weibo"></span></a>
            <a href=""><span class="icon-moon icon-weixin"></span></a>
            <a href=""><span class="icon-moon icon-qqzone"></span></a>
          </div>
        </div>
      </div>
    </div>
</template>

<script type="text/javascript">
  import axios from 'axios';
  export default {
    data () {
      return {
        serviceLink: [],
        externalLink: []
      };
    },
    mounted () {
      this.getServiceData();
      this.getExternalData();
    },
    methods: {
      async getServiceData () {
        const {data} = await axios.get('./api/serviceLink');
        this.serviceLink = data;
      },
      async getExternalData () {
        const {data} = await axios.get('./api/externalLink');
        this.externalLink = data;
      }
    },
    components: {}
  };
</script>

<style lang="less" scoped>
  .footer{
    background-color: #fff;
    padding: 48px 0 20px;
    border-bottom: 1px solid #efefef;
    .footer-list{
      width: 1240px;
      margin: 0 auto;
      .service-left{
        width: 1000px;
        li{
          display: inline-block;
          width: 240px;
          height: 57px;
          img,span{
            vertical-align: middle;
          }
          img{
            width: 30px;
            height: 29px;
          }
          span{
            font-size: 12px;
            color: #999;
          }
        }
      }
      .service-right{
        text-align: right;
        p.time{
          font-size: 12px;
          color: #999;
        }
        a.call{
          color: #00c3f5;
          font-size: 30px;
          font-weight: 400;
        }
      }
    }
    .hr-style{
      margin-top: 20px;
      margin-bottom: 28px;
      height: 1px;
      border: 0;
      border-top: 1px solid #eee;
    }
    .external-left{
      li{
        display: inline-block;
        padding-right: 15px;
        border-right: 1px solid #d6d6d6;
        margin-right: 15px;
        color: #999;
        font-size: 12px;
      }
      li:last-child{
        border-right: none;
      }
      p.message{
        padding-top: 8px;
        color: #999;
        font-size: 12px;
      }
    }
    .external-right{
      margin-top: 18px;
      a{
        padding-right: 10px;
        border-right: 1px solid #eee;
        margin-right: 10px;
        &:last-child{
          border-right: none;
        }
      }
    }
  }
</style>
