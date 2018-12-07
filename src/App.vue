<template>
  <div id="app">
    <el-container style="width: 100vw; height: 100vh;">
      <el-header class="header" height="155px">
        <header>
          <img src="@/assets/p01.png">
          增值税发票税控开票软件(金税盘版) v2.1.30.180728
        </header>
        <nav class="menu">
          <img src="@/assets/p02.png">
          <ul class="clearfix">
            <li>报税管理</li>
            <li>金税设备管理</li>
            <li>发票资料统计</li>
            <li>帮助</li>
          </ul>
        </nav>
        <nav class="options clearfix">
          <ul>
            <li>
              <div class="img-box">
                <img src="@/assets/p1.png">
              </div>
              <span>系统设置</span>
            </li>
            <li>
              <div class="img-box">
                <img src="@/assets/p2.png">
              </div>
              <span style="color: #888">发票管理</span>
            </li>
            <li>
              <div class="img-box">
                <img src="@/assets/p3.png">
              </div>
              <span>报税处理</span>
            </li>
            <li>
              <div class="img-box">
                <img src="@/assets/p4.png">
              </div>
              <span>系统维护</span>
            </li>
          </ul>
          <ul style="margin-right: 120px">
            <li>
              <div class="img-box">
                <img src="@/assets/p5.png">
              </div>
              <span>诺诺客服</span>
            </li>
            <li>
              <div class="img-box">
                <img src="@/assets/p6.png">
              </div>
              <span>查看我的企业名片</span>
            </li>
            <li>
              <div class="img-box">
                <img src="@/assets/p7.png">
              </div>
              <span>智能编码</span>
            </li>
          </ul>
          <ul>
            <li>
              <div class="img-box">
                <img src="@/assets/p8.png">
              </div>
              <span>在线帮助</span>
            </li>
            <li>
              <div class="img-box">
                <img src="@/assets/p9.png">
              </div>
              <span>帮助</span>
            </li>
            <li>
              <div class="img-box">
                <img src="@/assets/p10.png">
              </div>
              <span>锁屏</span>
            </li>
            <li @click="back">
              <div class="img-box">
                <img src="@/assets/p11.png">
              </div>
              <span>{{backname}}</span>
            </li>
            <li @click="create" v-show="false">
              导入
            </li>
          </ul>
        </nav>
      </el-header>
      <el-main style="position: relative;">
        <router-view/>
      </el-main>
      <el-footer height="20px" style="position: relative;">
        <div class="footer">
          <img src="@/assets/p05.png">
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
// import data from '@/assets/data.json'
// import custom from '@/assets/custom'
export default {
  name: 'App',
  data () {
    return {

    }
  },
  computed: {
    backname () {
      return this.$route.path === '/' ? '退出' : '关闭'
    }
  },
  methods: {
    back () {
      if (this.$route.path !== '/') {
        this.$router.go(-1)
      }
    },
    create () {
      var arr = custom.custom.split('\n').map(function (item) {
        return item.split('~').filter(function(item) {
          return item;
        });
      });
      (function create(n) {
        if (n >= data.length) return
        var d = data[n]
        var a = arr.find(function (c, i) {
          return d.gmfnsrsbh == c[2]
        })
        if (!a) a = []
        Object.assign(d, {
          cstn: a[1],
          cstp: a[3] == 'False'? '' : a[3],
          cstb: a[4],
          cstbo: a[5],
          date: d.kprq.substring(0, 8)
        })

        $.ajax({
            type: "POST",
            url: "/invoice/create",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(d),
            dataType: "json",
            success: function (data) {
                console.log('success', n)
                create(n + 1)

            },
            error: function (err) {
                console.log('error', n)
                create(n + 1)
            }
        });
      })(0)
    }
  },
  created () {
    
    // var arr = custom.custom.split('\n').map(function (item) {
    //   return item.split('~').filter(function(item) {
    //     return item;
    //   });
    // });
    // var arr2 = data.sbbZzsfpkjmx.body.zyfpkjmx.mxxx.map( function(item, i) {

    //   var a = arr.find(function (d, i) {
    //     return item.gmfnsrsbh == d[2]
    //   })
    //   return Object.assign(item, {
    //     cstn: a[1],
    //     cstp: a[3],
    //     cstb: a[4],
    //     cstbo: a[5]
    //   })
    // });
    // console.log(JSON.stringify(arr2))
  }
}
</script>

<style lang="less">
*{margin:0;padding:0}

li{list-style:none}
body {
  overflow: hidden;
}
input{  
  background:none;  
  outline:none;  
  border:0px;
}

img{vertical-align:top;border:none}

.gradient(@angle:top,@start:#000,@stop:#ff050e){

  background: -webkit-linear-gradient(@angle,@start,@stop);
  background: -moz-linear-gradient(@angle,@start,@stop);
  background: -o-linear-gradient(@angle,@start,@stop);
  background: linear-gradient(@angle,@start,@stop);
  
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  min-width: 1200px;
}

.header {
  background-color: #cde2f3;
  text-align: center;
  position: relative;
  min-width: 1000px;

  header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 28px;
    line-height: 28px;
    text-align: left;
    background-color: #7f9de3;
    color: #fff;

    img {
      vertical-align: middle;
      margin-top: -2px;
      width: 18px;
    }
  }

  .menu {
    position: absolute;
    top: 28px;
    left: 0;
    width: 100%;
    background-color: #aecbf7;

    img {
      float: left;
      height: 30px;
      margin-top: 2px;
    }

    ul {
      padding: 2px 10px;

      li {
        float: left;
        padding: 0 10px;
        line-height: 30px;

        &:hover {
          line-height: 28px;
          padding: 0 9px;
          border: 1px solid #000;
          cursor: default;
          background-color: #fff0ac;
        }
      }
    }
  }



  .options {
    position: absolute;
    top: 64px;
    left: 0;
    width: 100%;
    padding: 4px 0;
    height: 83px;
    overflow: hidden;
    background: -webkit-linear-gradient(top, #b3d8e8 0%, #fff 30%, #fff 40%, #7dc7ec 100%);
    background: -moz-linear-gradient(top, #b3d8e8 0%, #fff 30%, #fff 40%, #7dc7ec 100%);
    background: -o-linear-gradient(top, #b3d8e8 0%, #fff 30%, #fff 40%, #7dc7ec 100%);
    background: linear-gradient(top, #b3d8e8 0%, #fff 30%, #fff 40%, #7dc7ec 100%);

    ul {
      float: left;
      border-left: 1px solid #f2f2f2;
      box-shadow: -1px 0 0 #999;
      margin-left: 5px;

      &:first-of-type {
        border-left-style: dashed;
      }

      li {
        float: left;
        border: 1px solid transparent;
        margin-left: 10px;
        padding: 5px;

        &:hover {
          background-color: #fff0ac;
          border-color: #888;
        }

        .img-box {
          min-width: 50px;
          height: 50px;

          img {
            height: 100%;
          }
        }
      }
    }
  }
}

.main {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.footer {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  vertical-align: middle;
  background-color: #ece9d8;
}


.clearfix:after {
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}

</style>
