<template>
  <div>
    <div class="dashboard-editor-container">

      <el-row :gutter="32" style="margin-bottom:32px;">
        <el-col :xs="24" :sm="24" :lg="19">
          <div style="background: #fff">
            <h1 style="height: 50px;background: #ccc;line-height: 50px;color: #fff; padding-left: 20px;font-size: 16px;margin: 0">数据采集监控</h1>
            <div style="padding: 20px">
              <card-panel />
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="5">
          <div style="height: 456px; background: #fff; display: flex; flex-direction: column">
            <h1 style="height: 50px;background: #ccc;line-height: 50px;color: #fff; padding-left: 20px;font-size: 16px;margin: 0">数据采集统计</h1>
            <div style="flex: 1;display: flex;flex-direction: column;">
              <div style="flex: 1; background: rgba(71, 153, 235, 1);display: flex;">
                <div style="flex: 1 1 0%;font-size: 64px;color: #fff;display: flex;justify-content: center;align-items: center;padding: 0 5px;">日</div>
                <div style="flex: 2 1 0%;display: flex;flex-direction: column;margin: 0 20px;justify-content: center;color: #fff">
                  <div style="padding: 10px; border-bottom: 1px solid #eee">文件个数：112</div>
                  <div style="padding: 10px;">报文个数：90</div>
                </div>
              </div>
              <div style="flex: 1; background: rgba(69, 161, 100, 1);display: flex;">
                <div style="flex: 1 1 0%;font-size: 64px;color: #fff;display: flex;justify-content: center;align-items: center;padding: 0 5px;">周</div>
                <div style="flex: 2 1 0%;display: flex;flex-direction: column;margin: 0 20px;justify-content: center;color: #fff">
                  <div style="padding: 10px; border-bottom: 1px solid #eee">文件个数：112</div>
                  <div style="padding: 10px;">报文个数：90</div>
                </div>
              </div>
              <div style="flex: 1; background: rgba(209, 103, 103, 1);display: flex;">
                <div style="flex: 1 1 0%;font-size: 64px;color: #fff;display: flex;justify-content: center;align-items: center;padding: 0 5px;">月</div>
                <div style="flex: 2 1 0%;display: flex;flex-direction: column;margin: 0 20px;justify-content: center;color: #fff">
                  <div style="padding: 10px; border-bottom: 1px solid #eee">文件个数：112</div>
                  <div style="padding: 10px;">报文个数：90</div>
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>

      <el-row :gutter="32" style="margin-bottom:32px;">
        <el-col :xs="24" :sm="24" :lg="17">
          <div style="height: 400px; background: #fff;">
            <h1 style="height: 50px;background: #ccc;line-height: 50px;color: #fff; padding-left: 20px;font-size: 16px;margin: 0">实况</h1>
            <div style="padding: 10px" />
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
              <el-carousel-item v-for="item in images" :key="item" style="flex: 1">
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
              <div v-for="item in 4" :key="item" style="padding: 26px 10px; display: flex;flex-direction: row;align-items: center;box-shadow: rgba(0,0,0,0.1) 0px 5px 10px 0px">
                <img style="width: 125px; height: 100px; margin-right: 15px" :src="testImg2">
                <div style="flex: 1; height: 99px;align-items: center;display: flex">
                  春季回暖期（4月1～30日）：平均气温15.2℃，4月上、中旬常有较强降温天气，下旬温度迅速回升。平均相对湿度为64.5%， 4月内各旬相对湿度分布比较均匀。
                </div>
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
import RaddarChart from './components/RaddarChart'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'
import TransactionTable from './components/TransactionTable'
import TodoList from './components/TodoList'
import BoxCard from './components/BoxCard'
import Footer from './components/Footer'

import echarts from 'echarts'
import china from '@/utils/china.js'

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
      serverClusterImg: require('@/assets/sys_images/u1095.jpg'),
      testImg: require('@/assets/sys_images/u748.png'),
      testImg2: require('@/assets/sys_images/u1353.png'),
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
      circleOptons: {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          x: 'center',
          y: 'center',
          data: ['335']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['75%', '80%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '10',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: '335' }
            ]
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
  mounted() {
    const chinaMap = echarts.init(this.$refs.map)
    chinaMap.setOption(this.mapOption)

    // const circle1 = echarts.init(this.$refs.circle1);
    // circle1.setOption(this.circleOptons);
    // const circle2 = echarts.init(this.$refs.circle2);
    // circle2.setOption(this.circleOptons);
    // const circle3 = echarts.init(this.$refs.circle3);
    // circle3.setOption(this.circleOptons);
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    },
    loopChange(value) {
      debugger
      this.activeIndex = value
    }
  }
}
</script>

<style lang="scss" scoped>
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

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
