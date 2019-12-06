<template>
  <div>
    <div class="dashboard-editor-container">

      <el-row :gutter="32" style="margin-bottom:32px;">
        <el-col :xs="24" :sm="24" :lg="19">
          <div class="bgWhite">
            <h1 class="titleHeader">数据采集监控</h1>
            <div style="padding: 20px">
              <card-panel />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="5">
          <div class="bgWhite columnFlex">
            <h1 class="titleHeader">数据采集统计</h1>
            <div class="columnFlex" style="flex: 1;">
              <dwm-statics type="日" :file-num="112" :message-num="23" color="rgba(71, 153, 235, 1)" />
              <dwm-statics type="周" :file-num="112" :message-num="83" color="rgba(69, 161, 100, 1)" />
              <dwm-statics type="月" :file-num="112" :message-num="23" color="rgba(209, 103, 103, 1)" />
            </div>
          </div>
        </el-col>
      </el-row>

      <el-row :gutter="32" style="margin-bottom:32px;">
        <el-col :xs="24" :sm="24" :lg="17">
          <div style="height: 400px;display: flex;flex-direction: column">
            <h1 style="height: 50px;background: #ccc;line-height: 50px;color: #fff; padding-left: 20px;font-size: 16px;margin: 0">实况</h1>
            <div style="padding: 10px;position: relative; flex: 1;display: flex;flex-direction: row">
              <div :style="getOpcity" style="flex: 2; height: 100%;background: #000" />
              <div style="height: 100%;background: #000;flex: 1;">
                <div ref="gauge" style="width: 200px; height: 200px;position: absolute;top: 0px;right: 50px;z-index: 10" />
              </div>
              <!-- <div style="width: 200px; height: 200px;position: absolute;top: 0px;right: 50px;z-index: 10" ref="gauge"></div>
              <div style="height: 50px;line-height: 50px;">
                <i class="move ar-animated ar-delay-4s  el-icon-d-arrow-right"></i>
                <i class="move ar-animated ar-delay-3s  el-icon-d-arrow-right"></i>
                <i class="move ar-animated ar-delay-2s  el-icon-d-arrow-right"></i>
                <i class="move ar-animated ar-delay-1s  el-icon-d-arrow-right"></i>
              </div> -->
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="7">
          <div>
            <el-button-group style="display: flex;">
              <el-button :class="{'activeHeader': activeIndex === 0}" style="flex: 1;height: 50px;background: #ccc;border-color: #ccc;border-radius: 0" type="primary">自观数据</el-button>
              <el-button :class="{'activeHeader': activeIndex === 1}" style="flex: 1;height: 50px;background: #ccc;border-color: #ccc;border-radius: 0" type="primary">雷达拼图</el-button>
              <el-button :class="{'activeHeader': activeIndex === 2}" style="flex: 1;height: 50px;background: #ccc;border-color: #ccc;border-radius: 0" type="primary">卫星云图</el-button>
            </el-button-group>
            <el-carousel height="350px" :initial-index="0" @change="loopChange">
              <el-carousel-item v-for="(item, index) in images" :key="index" style="flex: 1">
                <img style="width: 100%; height:100%" :src="item">
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-col>
      </el-row>

      <el-row :gutter="32" style="margin-bottom:32px;">
        <el-col :xs="24" :sm="24" :lg="12">
          <div style="background: #fff;">
            <h1 style="height: 50px;background: #ccc;line-height: 50px;color: #fff; padding-left: 20px;font-size: 16px;margin: 0">本地气候概况</h1>
            <div style="padding: 10px">
              <div v-for="(item, index) in climateLists" :key="index" style="padding: 26px 10px; display: flex;flex-direction: row;align-items: center;box-shadow: rgba(0,0,0,0.1) 0px 5px 10px 0px">
                <img style="width: 125px; height: 100px; margin-right: 15px" :src="item.img">
                <div style="flex: 1; height: 99px;align-items: center;display: flex;font-size: 14px;line-height: 120%">{{ item.content }}</div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <div style="background: #fff">
            <h1 style="height: 50px;background: #ccc;line-height: 50px;color: #fff; padding-left: 20px;font-size: 16px;margin: 0">月气候概况</h1>
            <div style="padding: 10px">
              <el-table
                :cell-style="{padding: '6px 0', textAlign: 'center'}"
                :header-cell-style="{padding: '6px 0', textAlign: 'center'}"
                :data="tableData.filter((item, index) => index < 5)"
                stripe
                style="width: 100%"
              >
                <el-table-column
                  prop="date"
                  label="要素"
                  width="180"
                />
                <el-table-column
                  prop="name"
                  label="最大出现概率"
                  width="180"
                />
                <el-table-column
                  prop="address"
                  label="次出现概率"
                />
              </el-table>
            </div>
          </div>
          <div style="background: #fff">
            <h1 style="height: 50px;background: #ccc;line-height: 50px;color: #fff; padding-left: 20px;font-size: 16px;margin: 0">极端天气要素</h1>
            <div style="padding: 10px">
              <el-table
                :cell-style="{padding: '6px 0', textAlign: 'center'}"
                :header-cell-style="{padding: '6px 0', textAlign: 'center'}"
                :data="tableData"
                stripe
                style="width: 100%"
              >
                <el-table-column
                  prop="date"
                  label="要素"
                  width="180"
                />
                <el-table-column
                  prop="name"
                  label="历史最低"
                  width="140"
                />
                <el-table-column
                  prop="address"
                  label="历史最高"
                  width="220"
                />
                <el-table-column
                  prop="average"
                  label="平均"
                />
              </el-table>
            </div>
          </div>
        </el-col>
      </el-row>

      <el-row :gutter="32" style="margin-bottom:32px;">
        <el-col :xs="24" :sm="24" :lg="12">
          <div style="height: 220px; background: #fff;display: flex; flex-direction: column">
            <h1 style="height: 50px;background: #ccc;line-height: 50px;color: #fff; padding-left: 20px;font-size: 16px;margin: 0">数据库服务监控(5分钟内)</h1>
            <div style="display: flex;flex-direction: row;flex: 1">
              <circle-chart circle-title="正在查询" style="flex: 1" :show-value="100" color="#299bcd" />
              <circle-chart circle-title="查询结束" style="flex: 1" :show-value="300" color="#fdc30d" />
              <circle-chart circle-title="全部接口" style="flex: 1" :show-value="100" color="#12cd5c" />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <div style="height: 220px; background: #fff;display: flex; flex-direction: column">
            <h1 style="height: 50px;background: #ccc;line-height: 50px;color: #fff; padding-left: 20px;font-size: 16px;margin: 0">服务接口监控(5分钟内)</h1>
            <div style="display: flex;flex-direction: row;flex: 1">
              <circle-chart circle-title="调用者" style="flex: 1" :show-value="100" color="#299bcd" />
              <circle-chart circle-title="调用服务数" style="flex: 1" :show-value="200" color="#fdc30d" />
              <circle-chart circle-title="调用次数" style="flex: 1" :show-value="100" color="#12cd5c" />
            </div>
          </div>
        </el-col>
      </el-row>

      <el-row :gutter="32" style="margin-bottom:32px;">
        <el-col :xs="24" :sm="24" :lg="12">
          <div style="background: #fff;">
            <h1 style="height: 50px;background: #ccc;line-height: 50px;color: #fff; padding-left: 20px;font-size: 16px;margin: 0">基础设施监控-采集服务器</h1>
            <div style="height: 500px; ">
              <img style="width: 100%; height: 100%" :src="serverClusterImg">
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <div style="background: #fff;">
            <h1 style="height: 50px;background: #ccc;line-height: 50px;color: #fff; padding-left: 20px;font-size: 16px;margin: 0">全国</h1>
            <div style="padding: 10px;height: 500px">
              <div id="china" ref="map" style="height: 100%;" />
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import PanelGroup from './components/PanelGroup'
import CardPanel from './components/CardPanel'
import CircleChart from './components/CircleChart'
import DwmStatics from './components/dwmStatics'
import RaddarChart from './components/RaddarChart'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'
import TransactionTable from './components/TransactionTable'
import TodoList from './components/TodoList'
import BoxCard from './components/BoxCard'
import Footer from './components/Footer'

import echarts from 'echarts'
import china from '@/utils/china.js'
import climateLists from '../climate.js'

const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}

export default {
  name: 'DashboardAdmin',
  components: {
    PanelGroup,
    CardPanel,
    CircleChart,
    DwmStatics,
    Footer,
    RaddarChart,
    PieChart,
    BarChart,
    TransactionTable,
    TodoList,
    BoxCard
  },
  data() {
    return {
      activeIndex: 0,
      climateLists: climateLists,
      serverClusterImg: require('@/assets/sys_images/u1095.jpg'),
      testImg: require('@/assets/sys_images/u748.png'),
      testImg2: require('@/assets/sys_images/u1353.png'),
      dataStatistic: [
        { type: 'day', fileNum: 112, messageNum: 99 },
        { type: 'week', fileNum: 112, messageNum: 99 },
        { type: 'month', fileNum: 112, messageNum: 99 }
      ],
      images: [
        require('@/assets/sys_images/u550.png'),
        require('@/assets/sys_images/u554.png'),
        require('@/assets/sys_images/u1044.png')
      ],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        average: 2
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        average: 2
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        average: 6
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        average: 6
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        average: 2
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        average: 6
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        average: 6
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        average: 6
      }],
      lineChartData: lineChartData.newVisitis,
      gaugeOption: {
        // backgroundColor: '#1b1b1b',
        tooltip: {
          formatter: '{a} <br/>{c} {b}'
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            name: '速度',
            type: 'gauge',
            min: 0,
            max: 220,
            splitNumber: 11,
            radius: '80%',
            axisLine: { // 坐标轴线
              lineStyle: { // 属性lineStyle控制线条样式
                color: [[0.09, 'lime'], [0.82, '#1e90ff'], [1, '#ff4500']],
                width: 3,
                shadowColor: '#fff', // 默认透明
                shadowBlur: 10
              }
            },
            axisLabel: { // 坐标轴小标记
              textStyle: { // 属性lineStyle控制线条样式
                // fontWeight: 'bolder',
                color: '#fff',
                shadowColor: '#fff', // 默认透明
                shadowBlur: 10,
                fontSize: 8
              }
            },
            axisTick: { // 坐标轴小标记
              length: 15, // 属性length控制线长
              lineStyle: { // 属性lineStyle控制线条样式
                color: 'auto',
                shadowColor: '#fff', // 默认透明
                shadowBlur: 10
              }
            },
            splitLine: { // 分隔线
              length: 25, // 属性length控制线长
              lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                width: 3,
                color: '#fff',
                shadowColor: '#fff', // 默认透明
                shadowBlur: 10
              }
            },
            pointer: { // 分隔线
              shadowColor: '#fff', // 默认透明
              shadowBlur: 5
            },
            title: {
              offsetCenter: [0, -10], // x, y，单位px
              textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                fontSize: 12,
                fontStyle: 'italic',
                color: '#fff',
                shadowColor: '#fff', // 默认透明
                shadowBlur: 10
              }
            },
            detail: {
              // backgroundColor: 'rgba(30,144,255,0.8)',
              // borderWidth: 1,
              borderColor: '#fff',
              shadowColor: '#fff', // 默认透明
              shadowBlur: 5,
              offsetCenter: [0, '50%'], // x, y，单位px
              textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                color: '#fff',
                fontSize: 14
              }
            },
            data: [{ value: 40, name: '跑道视程' }]
          }
        ]
      },
      mapOption: {
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        },
        visualMap: {
          show: false,
          min: 1,
          max: 34,
          inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
          }
        },
        series: [{
          type: 'map',
          mapType: 'china',
          label: {
            normal: {
              show: true,
              textStyle: {
                color: 'blue'
              }
            },
            emphasis: {
              show: false,
              textStyle: {
                color: '#800080'
              }
            }
          },
          aspectScale: 0.75,
          zoom: 1.2,
          itemStyle: {
            normal: {
              borderWidth: 0.5,
              borderColor: '#009fe8',
              areaColor: '#ffefd5'
            },
            emphasis: {
              borderWidth: 0.5,
              borderColor: '#4b0082',
              areaColor: '#ffdead'
            }
          },
          data: [
            { name: '北京', selected: false, value: 1 },
            { name: '天津', selected: false, value: 2 },
            { name: '上海', selected: false, value: 3 },
            { name: '重庆', selected: false, value: 4 },
            { name: '河北', selected: false, value: 5 },
            { name: '河南', selected: false, value: 6 },
            { name: '云南', selected: false, value: 7 },
            { name: '辽宁', selected: false, value: 8 },
            { name: '黑龙江', selected: false, value: 9 },
            { name: '湖南', selected: false, value: 10 },
            { name: '安徽', selected: false, value: 11 },
            { name: '山东', selected: false, value: 12 },
            { name: '新疆', selected: false, value: 13 },
            { name: '江苏', selected: false, value: 14 },
            { name: '浙江', selected: false, value: 15 },
            { name: '江西', selected: false, value: 16 },
            { name: '湖北', selected: false, value: 17 },
            { name: '广西', selected: false, value: 18 },
            { name: '甘肃', selected: false, value: 19 },
            { name: '山西', selected: false, value: 20 },
            { name: '内蒙古', selected: false, value: 21 },
            { name: '陕西', selected: false, value: 22 },
            { name: '吉林', selected: false, value: 23 },
            { name: '福建', selected: false, value: 24 },
            { name: '贵州', selected: false, value: 25 },
            { name: '广东', selected: false, value: 26 },
            { name: '青海', selected: false, value: 27 },
            { name: '西藏', selected: false, value: 28 },
            { name: '四川', selected: false, value: 29 },
            { name: '宁夏', selected: false, value: 30 },
            { name: '海南', selected: false, value: 31 },
            { name: '台湾', selected: false, value: 32 },
            { name: '香港', selected: false, value: 33 },
            { name: '澳门', selected: false, value: 34 }
          ]
        }]
      }
    }
  },
  computed: {
    getOpcity() {
      return { filter: `opacity(${Number((this.gaugeOption.series[0].data[0].value / 220).toFixed(2))})` }
    }
  },
  mounted() {
    const chinaMap = echarts.init(this.$refs.map)
    chinaMap.setOption(this.mapOption)

    const gauge = echarts.init(this.$refs.gauge)
    gauge.setOption(this.gaugeOption)
    setInterval(() => {
      this.gaugeOption.series[0].data[0].value = Number((Math.random() * 200 + 10).toFixed(2))
      debugger
      gauge.setOption(this.gaugeOption)
    }, 2000)
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    },
    loopChange(value) {
      this.activeIndex = value
    }
  }
}
</script>

<style lang="scss" scoped>
.titleHeader {
  height: 50px;
  background: #ccc;
  line-height: 50px;
  color: #fff;
  padding-left: 20px;
  font-size: 16px;margin: 0
}
.bgWhite {
  background: #fff;
}
.columnFlex {
  display: flex;
  flex-direction: column
}
.dashboard-editor-container {
  padding: 32px 80px;
  background-color: rgb(240, 242, 245);
  position: relative;
  color: #666;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}
.activeHeader {
  color: green
}

#arrow {
  position: relative;
  color: #fff;
  font-size: 18px;
  animation:mymove 10s infinite;
  -webkit-animation:mymove 10s infinite;
}

@keyframes mymove
{
  from {left:0px;}
  to {left:100%;}
}

//@at-root
@keyframes move {
	  0% {left: 0%; }
	  // 70% { left: 70%; }
	  100% {left: 80%;}
	}
	.move {
    color: #fff;
    -webkit-animation-name: move;
    animation-name: move;
    position:relative;
    margin-left:-16px;
  }
	.ar-animated{
    -webkit-animation-duration:5s;
    animation-duration:5s;
    -webkit-animation-fill-mode:both;
    animation-fill-mode:both;
    animation-iteration-count:infinite;
    -webkit-animation-iteration-count:infinite;
    font-style:inherit;
    -webkit-animation-timing-function:linear;
    animation-timing-function:linear;
  }
  .ar-delay-1s{animation-delay:0s;}
	.ar-delay-2s{animation-delay:0.5s;}
	.ar-delay-3s{animation-delay:1s;}
	.ar-delay-4s{animation-delay:1.5s;}
//

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
