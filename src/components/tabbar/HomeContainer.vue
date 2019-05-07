<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item, i) in lunboList" :key="i">
        <img :src="item.img" alt>
      </mt-swipe-item>
    </mt-swipe>
    <!-- 六宫格 -->
    <div class="mui-content">
      <div class="mui-row">
        <div class="mui-col-sm-3 mui-col-xs-4">
          <li class="mui-table-view-cell mui-media">
            <router-link to="/home/newslist">
              <img src="../../images/menu1.png" alt>
              <div class="mui-media-body">新闻资讯</div>
            </router-link>
          </li>
        </div>
        <div class="mui-col-sm-3 mui-col-xs-4">
          <li class="mui-table-view-cell mui-media">
            <router-link to="/home/photolist">
              <img src="../../images/menu2.png" alt>
              <div class="mui-media-body">图片分享</div>
            </router-link>
          </li>
        </div>
        <div class="mui-col-sm-3 mui-col-xs-4">
          <li class="mui-table-view-cell mui-media">
            <router-link to="/home/goodslist">
              <img src="../../images/menu3.png" alt>
              <div class="mui-media-body">商品购买</div>
            </router-link>
          </li>
        </div>
        <div class="mui-col-sm-3 mui-col-xs-4">
          <li class="mui-table-view-cell mui-media">
            <a href="#">
              <img src="../../images/menu4.png" alt>
              <div class="mui-media-body">留言反馈</div>
            </a>
          </li>
        </div>
        <div class="mui-col-sm-3 mui-col-xs-4">
          <li class="mui-table-view-cell mui-media">
            <a href="#">
              <img src="../../images/menu5.png" alt>
              <div class="mui-media-body">视频专区</div>
            </a>
          </li>
        </div>
        <div class="mui-col-sm-3 mui-col-xs-4">
          <li class="mui-table-view-cell mui-media">
            <a href="#">
              <img src="../../images/menu6.png" alt>
              <div class="mui-media-body">联系我们</div>
            </a>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lunboList: []
    }
  },
  created() {
    this.getLunbotu()
  },
  methods: {
    getLunbotu() {
      this.$http.get('/api/getlunbo').then(result => {
        if (result.status === 200) {
          this.lunboList = result.data.message
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    text-align: center;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
.mui-content {
  background-color: #fff;
  border: none;
  font-size: 13px;
  text-align: center;
  img {
    height: 60px;
  }
}
</style>
