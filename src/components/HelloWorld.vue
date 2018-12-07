<template>
  <div class="main">
    <div class="main-header">
      <section class="search-box">
        <div class="select-box">
          <zjw-select :options="years" @selected="yearSelected"></zjw-select>
        </div>
        <div class="select-box">
          <zjw-select :options="months" @selected="monthSelected"></zjw-select>
        </div>
        <div class="select-box">
          <zjw-select :options="types" @selected="typeSelected"></zjw-select>
        </div>
        <div class="select-box">
          <input type="text" @blur="inputtext">
        </div>
        <div class="btn-box">
          <!-- <img src="@/assets/p03.png"> -->
          <a href="#">
            <img src="@/assets/p3_03.png">
            <span>销项发票导出</span>
          </a>
          <i></i>
          <a href="#">
            <img src="@/assets/p3_05.png">
            <span>发票上传</span>
          </a>
          <a href="#">
            <img src="@/assets/p3_07.png">
            <span>查看明细</span>
          </a>
          <a href="#">
            <img src="@/assets/p3_09.png">
            <span>核对</span>
          </a>
          <i></i>
          <a href="#">
            <img src="@/assets/p3_11.png">
            <span>格式</span>
          </a>
          <a href="#" class="active" @click="tcbox = true">
            <img src="@/assets/p3_13.png">
            <span>统计</span>
          </a>
          <a href="#" class="active" @click="sbox = true">
            <img src="@/assets/p3_15.png">
            <span>查找</span>
          </a>
          <a href="#">
            <img src="@/assets/p3_17.png">
            <span>打印</span>
          </a>
          <i></i>
          <a href="#" class="active" @click="back">
            <img src="@/assets/p3_19.png">
            <span>退出</span>
          </a>
        </div>
      </section>
    </div>
    <div class="table-box">
      <el-table :data="bills" border height="100%" header-row-class-name="table-header" highlight-current-row stripe :row-class-name="rowstyle" highlight-current-row>
        <el-table-column label="发票种类" prot="zfbz" :formatter="typeformat" width="100"></el-table-column>
        <el-table-column label="发票代码" prop="fpdm" width="100"></el-table-column>
        <el-table-column label="发票号码" prop="fphm" width="100" show-overflow-tooltip></el-table-column>
        <el-table-column label="开票机号" prop="ivcdevice" width="100">
          <template slot-scope="scope">0</template>
        </el-table-column>
        <el-table-column label="购方名称" prop="cstn" width="100" show-overflow-tooltip></el-table-column>
        <el-table-column label="购方税号" prop="gmfnsrsbh" width="100" show-overflow-tooltip></el-table-column>
        <el-table-column label="购方地址电话" prop="cstp" width="180" show-overflow-tooltip></el-table-column>
        <el-table-column label="购方银行账号" prop="cstb" width="180" show-overflow-tooltip></el-table-column>
        <el-table-column label="开票日期" prop="kprq" width="100" show-overflow-tooltip></el-table-column>
        <el-table-column label="报送状态" prop="closedesc" width="100">
          <template slot-scope="scope">已报送</template>
        </el-table-column>
        <el-table-column label="报送日志" width="100"></el-table-column>
        <el-table-column label="所属月份" prop="kprq" :formatter="monthformat" width="100" show-overflow-tooltip></el-table-column>
        <el-table-column label="合计金额" prop="je" width="100"></el-table-column>
        <el-table-column label="税率" prop="rate" width="100">
        </el-table-column>
        <el-table-column label="合计税额" prop="se" width="100"></el-table-column>
        <el-table-column label="主要商品名称" prop="goods" width="120" show-overflow-tooltip></el-table-column>
        <el-table-column label="商品税目" prop="closedesc" width="100"></el-table-column>
        <el-table-column label="备注" prop="closedesc" width="100"></el-table-column>
        <el-table-column label="开票人" prop="closedesc" width="100">
          <template slot-scope="scope">
            <span v-if="scope.row.ps1">{{scope.row.ps1}}</span>
            <span v-else>王春丽</span>
          </template>
        </el-table-column>
        <el-table-column label="收款人" prop="closedesc" width="100"></el-table-column>
        <el-table-column label="打印标志" prop="closedesc" width="100">
          <template slot-scope="scope">是</template>
        </el-table-column>
        <el-table-column label="作废标志" prop="closedesc" width="100">
          <template slot-scope="scope">否</template>
        </el-table-column>
        <el-table-column label="清单标志" prop="closedesc" width="100">
          <template slot-scope="scope">否</template>
        </el-table-column>
        <el-table-column label="修复标志" prop="closedesc" width="100">
          <template slot-scope="scope">否</template>
        </el-table-column>
        <el-table-column label="复核人" prop="closedesc" width="100">
          <template slot-scope="scope">
            <span v-if="scope.row.ps1">{{scope.row.ps1}}</span>
            <span v-else>包芳芳</span>
          </template>
        </el-table-column>
        <el-table-column label="作废日期" prop="closedesc" width="100"></el-table-column>
        <el-table-column label="操作" prop="closedesc" width="100" fixed="left">
          <template slot-scope="scope">
            <el-button size="mini" @click="click(scope.row)">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="dialog" v-show="sbox">
      <header>
        <img src="@/assets/p01.png">
        <span>查询条件</span>
        <div class="close" @click="sbox = false">
          <img src="@/assets/pc_03.png">
        </div>
      </header>
      <section class="content">
        <div class="sc">
          <div class="container">
            <header>按购方信息查询</header>
            <div class="form-item">
              <label>购方名称</label>
              <div class="input-box">
                <input type="text" v-model="form.cstn">
              </div>
            </div>
            <div class="form-item">
              <label>购方税号</label>
              <div class="input-box">
                <input type="text" v-model="form.gmfnsrsbh">
              </div>
            </div>
          </div>
          <div class="container">
            <header>按开票日期查询</header>
            <div class="form-item">
              <label>开始日期</label>
              <div class="input-box">
                <input type="date" name="name" value="2018-12-1" @change="datech1">
              </div>
            </div>
            <div class="form-item">
              <label>结束日期</label>
              <div class="input-box">
                <input type="date" name="name" value="2018-12-31" @change="datech2">
              </div>
            </div>
          </div>
          <div class="container">
            <header>发票种类</header>
            <div class="form-item">
              <label>发票种类</label>
              <div class="input-box" style="border: 0;">
                <zjw-select :options="types"></zjw-select>
              </div>
            </div>
          </div>
          <div class="container">
            <header>查询方式设置</header>
            <div class="form-item">
              <label>支持模糊查找</label>
              <div class="input-box" style="border: 0">
                <input class="checkbox" type="checkbox" checked @change="stchange">
              </div>
            </div>
          </div>
          <div class="sc-btn-box">
            <a href="#">组合查询条件</a>
            <a href="#" @click="submit">确定</a>
            <a href="#" @click="sbox = false">取消</a>
          </div>
        </div>
      </section>
    </div>
    <div class="dialog" v-show="tcbox">
      <header>
        <img src="@/assets/p01.png">
        <span>统计选项</span>
        <div class="close" @click="tcbox = false">
          <img src="@/assets/pc_03.png">
        </div>
      </header>
      <section class="content">
        <div class="tc">
          <div class="con">
            <div class="box">
              <el-table :data="totals" border header-row-class-name="table-header" :row-class-name="rowstyle">
                <el-table-column label="" prop="fpdm" width="40">
                  <template slot-scope="scope">
                    <input type="checkbox" :name="scope.$index + '-text'" checked>
                  </template>
                </el-table-column>
                <el-table-column label="汇总栏目" prop="text" width="100"></el-table-column>
                <el-table-column label="求和(Sum)" prop="fpdm" width="100">
                  <template slot-scope="scope">
                    <input type="checkbox" :name="scope.$index + '-sum'">
                  </template>
                </el-table-column>
                <el-table-column label="平均值(Svg)" prop="fphm" width="100" show-overflow-tooltip>
                  <template slot-scope="scope">
                    <input type="checkbox" :name="scope.$index + '-avg'" checked>
                  </template>
                </el-table-column>
                <el-table-column label="最大值(Max)" prop="ivcdevice" width="100">
                  <template slot-scope="scope">
                    <input type="checkbox" :name="scope.$index + '-max'">
                  </template>
                </el-table-column>
                <el-table-column label="最小值(Min)" prop="ivcdevice" width="100">
                  <template slot-scope="scope">
                    <input type="checkbox" :name="scope.$index + '-min'" checked>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
          <div class="tc-btn-box">
            <a href="#" @click="caculate">统计</a>
            <a href="#" @click="tcbox = false">取消</a>
          </div>
        </div>
      </section>
    </div>
    <div class="dialog" v-show="tbox">
      <header>
        <img src="@/assets/p01.png">
        <span>统计选项</span>
        <div class="close" @click="tbox = false">
          <img src="@/assets/pc_03.png">
        </div>
      </header>
      <section class="content">
        <div class="tcc">
          <img src="@/assets/p06.png">
          <div class="box">
            <el-table :data="totaldatas" border header-row-class-name="table-header" :row-class-name="rowstyle">
              <el-table-column label="统计列" prop="text" width="100"></el-table-column>
              <el-table-column label="总和" prop="sum" width="140"></el-table-column>
              <el-table-column label="平均值" prop="avg" width="100" :formatter="fixedformat"></el-table-column>
              <el-table-column label="最大值" prop="max" width="100"></el-table-column>
              <el-table-column label="最小值" prop="min" width="100"></el-table-column>
            </el-table>
          </div>
        </div>
      </section>
    </div>
    <el-dialog
      title="修改"
      :visible.sync="showDialog"
      width="700px">
      <el-form label-position="right" label-width="120px" :model="bform">
        <el-form-item label="发票代码">
          <el-input v-model="bform.fpdm"></el-input>
        </el-form-item>
        <el-form-item label="发票号码">
          <el-input v-model="bform.fphm"></el-input>
        </el-form-item>
        <el-form-item label="购方税号">
          <el-input v-model="bform.gmfnsrsbh"></el-input>
        </el-form-item>
        <el-form-item label="购方名称">
          <el-input v-model="bform.cstn"></el-input>
        </el-form-item>
        <el-form-item label="购方银行账号">
          <el-input v-model="bform.cstb"></el-input>
        </el-form-item>
        <el-form-item label="购方地址电话">
          <el-input v-model="bform.cstp"></el-input>
        </el-form-item>
        <el-form-item label="主要商品名称">
          <el-input v-model="bform.goods"></el-input>
        </el-form-item>
        <el-form-item label="金额">
          <el-input v-model="bform.je"></el-input>
        </el-form-item>
        <el-form-item label="税额">
          <el-input v-model="bform.se"></el-input>
        </el-form-item>
        <el-form-item label="开票人">
          <el-input v-model="bform.ps1"></el-input>
        </el-form-item>
        <el-form-item label="复核人">
          <el-input v-model="bform.ps2"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="update">修改</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import ZjwSelect from './zjw-select/ZjwSelect'
// import data from '@/assets/data.json'

export default {
  name: 'HelloWorld',
  data () {
    return {
      bills: [],
      totals: [{text: '合计金额'}, {text: '合计税额'}],
      totaldatas: [],
      years: [],
      months: [],
      types: [{text: '全部发票', value: 1}, {text: '专项发票', value: 2}, {text: '普通发票', value: 3}],
      year: 2018,
      month: 12,
      zfbz: '',
      text: '',
      form: {
        begin: '20181201',
        end: '20181231',
        st: true
      },
      sbox: false,
      tcbox: false,
      tbox: false,
      bform: {
        ps1: '王春丽',
        ps2: '包芳芳'
      },
      showDialog: false
    }
  },
  watch: {
    form (f) {
      console.log(f)
    }
  },
  components: {ZjwSelect},
  methods: {
    datech1 (e) {
      this.form.begin = e.target.value.replace(/-/g, '')
      console.log(this.form)
    },
    datech2 (e) {
      this.form.end = e.target.value.replace(/-/g, '')
      console.log(this.form)
    },
    stchange (e) {
      this.form.st = e.target.checked
    },
    submit () {
      var obj = {}
      for (var key in this.form) {
        if (this.form[key]) {
          obj[key] = this.form[key]
        }
      }
      this.select()
      this.sbox =false
    },
    back () {
      this.$router.go(-1)
    },
    yearSelected (item) {
      this.year = item.value
      this.select()
    },
    monthSelected (item) {
      if (item.value == 100) {
        this.month = ''
      } else if (String(item.value).length == 1) {
        this.month = '0' + item.value
      } else {
        this.month = item.value
      }
      this.select()
    },
    typeSelected (item) {
      if (item.value === 1) {
        this.zfbz = ''
      } else if (item.value === 2) {
        this.zfbz = 'N'
      } else {
        this.zfbz = 'Y'
      }
      this.select()
    },
    inputtext (e) {
      this.text = e.target.value
      this.select()
    },
    select () {
      var obj = {}
      if (this.zfbz !== '') {
        obj.zfbz = this.zfbz;
      }
      if (this.text !== '') {
        obj.text = this.text;
      }
      obj.kprq = '' + this.year + this.month
      this.getList(obj)
    },
    monthformat (row, clumn, cellValue, index) {
      if (cellValue) {
        return cellValue.substring(0, 6)
      } else {
        return ''
      }
    },
    typeformat (row, clumn, cellValue, index) {
      if (row.zfbz === 'N') {
        return '专用发票'
      } else {
        return '普通发票'
      }
    },
    fixedformat (row, clumn, cellValue) {
      return cellValue ? cellValue.toFixed(2) : ''
    },
    rate(a, b) {
      return (a / b).toFixed(2).toString().substring(2, 4) + '%'
    },
    rowstyle (a, b) {
      if (a.rowIndex % 2 == 0) {
        return 'obb'
      } else {
        return 'env'
      }
    },
    caculate () {
      var array = []
      $('.tc').find('input').each((i, checkbox) => {
        var arr = checkbox.name.split('-')
        if (!array[arr[0]]) {
          array[arr[0]] = {}
        }
        array[arr[0]][arr[1]] = checkbox.checked
      })

      console.log(array)

      $.get('/invoice/caculate', {json: JSON.stringify(array)}, (data) => {
        this.totaldatas = data
        this.tbox = true
      });
    },
    getList (data = {}) {
      $.get('/invoice/list', data, data => {
        this.bills = data
      });
    },
    addGoods (row) {
      $.get('/invoice/update', {fphm: row.fphm, update: JSON.stringify({})}, data => {
        this.select()
      })
    },
    click (row) {
      this.$set(this.bform, 'fpdm', row.fpdm)
      this.$set(this.bform, 'fphm', row.fphm)
      this.$set(this.bform, 'cstn', row.cstn)
      this.$set(this.bform, 'cstb', row.cstb)
      this.$set(this.bform, 'cstp', row.cstp)
      this.$set(this.bform, 'gmfnsrsbh', row.gmfnsrsbh)
      this.$set(this.bform, 'goods', row.goods)
      this.$set(this.bform, 'je', row.je)
      this.$set(this.bform, 'se', row.se)
      this.$set(this.bform, 'ps1', row.ps1 ? row.ps1 : '王春丽')
      this.$set(this.bform, 'ps2', row.ps2 ? row.ps2 : '包芳芳')
      this.$set(this.bform, 'fphm', row.fphm)
      this.showDialog = true
    },
    update () {
      this.showDialog = false
      $.get('/invoice/update', {fphm: this.bform.fphm, update: JSON.stringify(this.bform)}, (data) => {
        console.log(data)
        this.select()
      });
    }
  },
  created () {
    for (var i = new Date().getFullYear(); i > 2015; i--) {
      this.years.push({
        text: i + '年',
        value: i
      })
    }
    this.year = this.years[0].value
    for (var i = 12; i > 0; i--) {
      this.months.push({
        text: i + '月',
        value: i
      })
    }
    this.months.push({
      text: '全部',
      value: 100
    })
    this.month = this.months[0].value
      this.select()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">

  .gradient(@angle:top,@start:#000,@stop:#ff050e){

    background: -webkit-linear-gradient(@angle,@start,@stop);
    background: -moz-linear-gradient(@angle,@start,@stop);
    background: -o-linear-gradient(@angle,@start,@stop);
    background: linear-gradient(@angle,@start,@stop);
    
  }
  .main-header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    background-color: #275689;
    min-width: 1000px;

    .search-box {
      margin-left: 10px;
      height: 100%;
      background-color: #fff;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;

      box-sizing: border-box;
      padding: 14px;

      .select-box {
        width: 120px;
        float: left;
        margin-left: 10px;

        input {
          height: 30px;
          font-size: 18px;
          border: 1px solid #ccc;
          width: 140px;
        }
      }
      .btn-box {
        float: right;

        // img {
        //   height: 32px;
        // }

        margin-left: -500px;

        a {
          float: left;
          line-height: 30px;
          text-decoration: none;
          color: #000;
          padding: 0 4px;
          margin: 0 5px;
          border: 1px solid transparent;
          color: #ccc;

          &.active {
            color: #000;

            &:hover {
              border-color: #999;
              .gradient(top, #fff, #fff0ac)
            }
          }

          img {
            vertical-align: middle;
            height: 20px;
          }
          span {
            vertical-align: middle;
          }
        }
        i {
          float: left;
          content: '';
          width: 0;
          height: 32px;
          border-left: 1px solid #666;
        }
      }
    }
  }
  .table-box {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;

    .table-header th{
      background-color: #055ba4;
      color: #fff;
      text-align: center;
      font-weight: normal;
    }

    .el-table {
      .evn {
        background-color: #dce6f0
      }

      .obb {
        background-color: #f2f9ff
      }

      .el-table--striped .el-table__body tr.el-table__row--striped.current-row td, .el-table__body tr.current-row>td {
        background-color: #7d97bc !important;
        color: #fff;
      }
    }

  }
  .sc {
    padding: 10px;

    .container {
      position: relative;
      padding: 10px 15px;
      margin-top: 25px;
      margin-right: 40px;
      border: 1px solid #ccc;
      border-radius: 5px;
      min-height: 30px;

      &>header {
        position: absolute;
        top: -12px;
        color: #0f429e;
        background-color: #fff;
        padding: 0 5px;
      }
      .form-item {
        margin-top: 5px;

        &:after {
          content: "";
          display: block;
          height: 0;
          clear: both;
          visibility: hidden;
        }
        label {
          float: left;
          padding: 0 10px;
          height: 30px;
          line-height: 30px;
        }
        .input-box {
          margin-left: 100px;
          height: 28px;
          line-height: 28px;
          border: 1px solid #ccc;

          input {
            width: 100%;
            height: 100%;
            font-size: 16px;
            text-indent: 5px;

            &.checkbox {
              float: right;
              width: 16px;
              height: 16px;
              margin: 7px;
            }
          }
        }
      }
    }
    .sc-btn-box {
      text-align: center;

      a {
        display: inline-block;
        margin: 5px;
        height: 40px;
        min-width: 70px;
        padding: 0 5px;
        color: #fff;
        background-color: #1d75cc;
        font-weight: bold;
        line-height: 40px;
        text-align: center;
        text-decoration: none;
        border-radius: 5px;
      }
    }
  }
  .tc {
    .con {
      padding: 10px 0;
      margin-top: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      width: 600px;
      height: 400px;

      .box {
        width: 100%;
        height: 100%;
        background-color: #ece9d8;


        .el-table {
          background-color: #ece9d8;
        }
        .table-header th{
          background-color: #ece9d8;
          color: #333;
          text-align: center;
          font-weight: normal;
        }
      }
    }
    .tc-btn-box {
      text-align: center;

      a {
        display: inline-block;
        margin: 5px;
        height: 40px;
        min-width: 70px;
        padding: 0 5px;
        color: #fff;
        background-color: #1d75cc;
        font-weight: bold;
        line-height: 40px;
        text-align: center;
        text-decoration: none;
        border-radius: 5px;
      }
    }
  }
  .tcc {
    .box {
      height: 400px;
      background-color: #ece9d8;


      .el-table {
        background-color: #ece9d8;
      }
      .table-header th{
        background-color: #ece9d8;
        color: #333;
        text-align: center;
        font-weight: normal;
      }
    }
  }
  .dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 200px;
    background-color: #7a96e0;
    border-radius: 5px;
    padding: 4px;

    &>header {
      line-height: 30px;
      color: #fff;
      &>img {
        vertical-align: middle;
      }
      span {
        vertical-align: middle;
      }
      .close {
        float: right;
        width: 30px;
        height: 30px;

        img {
          width: 26px;
          height: 26px;
          margin: 2px;
          margin-top: 1px;
        }
      }
    }
    .content {
      background-color: #fff;
      overflow: hidden;
    }
  }
</style>
