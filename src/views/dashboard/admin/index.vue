<template>
  <div class="dashboard-editor-container">

    <el-row :gutter="32" style="margin-bottom:32px;">
      <el-col :xs="24" :sm="24" :lg="19">
        <div style="background: #fff">
          <h1 style="height: 50px;background: #ccc;line-height: 50px;color: #fff; padding-left: 20px;font-size: 16px;margin: 0">数据采集监控</h1>
          <div style="padding: 10px">
            <el-row :gutter="20" class="panel-group" style="margin-bottom: 10px">
              <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
                <div class="card-panel" style="height: 180px; border: 1px solid #ccc" />
              </el-col>
              <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
                <div class="card-panel" style="height: 180px; border: 1px solid #ccc" />
              </el-col>
              <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
                <div class="card-panel" style="height: 180px; border: 1px solid #ccc" />
              </el-col>
            </el-row>
            <el-row :gutter="20" class="panel-group">
              <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
                <div class="card-panel" style="height: 180px; border: 1px solid #ccc" />
              </el-col>
              <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
                <div class="card-panel" style="height: 180px; border: 1px solid #ccc" />
              </el-col>
              <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
                <div class="card-panel" style="height: 180px; border: 1px solid #ccc" />
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="5">
        <div style="height: 440px; background: #fff">
          <h1 style="height: 50px;background: #ccc;line-height: 50px;color: #fff; padding-left: 20px;font-size: 16px;margin: 0">数据采集统计</h1>
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
        <div style="height: 400px; background: #fff" />
      </el-col>
    </el-row>

    <el-row :gutter="32" style="margin-bottom:32px;">
      <el-col :xs="24" :sm="24" :lg="12">
        <div style="height: 600px; background: #fff;">
          <h1 style="height: 50px;background: #ccc;line-height: 50px;color: #fff; padding-left: 20px;font-size: 16px;margin: 0">本地气候概况</h1>
          <div style="padding: 10px" />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="12">
        <div style="height: 300px; background: #fff">
          <h1 style="height: 50px;background: #ccc;line-height: 50px;color: #fff; padding-left: 20px;font-size: 16px;margin: 0">月气候概况</h1>
          <div style="padding: 10px" />
        </div>
        <div style="height: 300px; background: #fff">
          <h1 style="height: 50px;background: #ccc;line-height: 50px;color: #fff; padding-left: 20px;font-size: 16px;margin: 0">极端天气要素</h1>
          <div style="padding: 10px" />
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="32" style="margin-bottom:32px;">
      <el-col :xs="24" :sm="24" :lg="12">
        <div style="height: 200px; background: #fff;">
          <h1 style="height: 50px;background: #ccc;line-height: 50px;color: #fff; padding-left: 20px;font-size: 16px;margin: 0">数据库服务监控(5分钟内)</h1>
          <div style="padding: 10px" />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="12">
        <div style="height: 200px; background: #fff;">
          <h1 style="height: 50px;background: #ccc;line-height: 50px;color: #fff; padding-left: 20px;font-size: 16px;margin: 0">服务接口监控(5分钟内)</h1>
          <div style="padding: 10px" />
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
</template>

<script>
import PanelGroup from './components/PanelGroup'
import RaddarChart from './components/RaddarChart'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'
import TransactionTable from './components/TransactionTable'
import TodoList from './components/TodoList'
import BoxCard from './components/BoxCard'

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
    RaddarChart,
    PieChart,
    BarChart,
    TransactionTable,
    TodoList,
    BoxCard
  },
  data() {
    return {
      serverClusterImg: require('@/assets/sys_images/u1095.jpg'),
      lineChartData: lineChartData.newVisitis,
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
          text: ['High', 'Low'],
          realtime: false,
          calculable: true,
          inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
          }
        },
        series: [{
          type: 'map',
          mapType: 'china',
          label: {
            normal: {
              show: true, // 显示省份标签
              textStyle: {
                color: 'blue'
              } // 省份标签字体颜色
            },
            emphasis: { // 对应的鼠标悬浮效果
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
              borderWidth: 0.5, // 区域边框宽度
              borderColor: '#009fe8', // 区域边框颜色
              areaColor: '#ffefd5' // 区域颜色
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
          ] // 各省地图颜色数据依赖value
        }]
        // dataRange: {
        //     x: '-1000 px', //图例横轴位置
        //     y: '-1000 px', //图例纵轴位置
        //     splitList: [
        //         { start: 1, end: 1, label: '北京', color: '#cfc5de' },
        //         { start: 2, end: 2, label: '天津', color: '#f1ebd1' },
        //         { start: 3, end: 3, label: '上海', color: '#feffdb' },
        //         { start: 4, end: 4, label: '重庆', color: '#e0cee4' },
        //         { start: 5, end: 5, label: '河北', color: '#fde8cd' },
        //         { start: 6, end: 6, label: '河南', color: '#e4f1d7' },
        //         { start: 7, end: 7, label: '云南', color: '#fffed7' },
        //         { start: 8, end: 8, label: '辽宁', color: '#e4f1d7' },
        //         { start: 9, end: 9, label: '黑龙江', color: '#e4f1d7' },
        //         { start: 10, end: 10, label: '湖南', color: '#fffed7' },
        //         { start: 11, end: 11, label: '安徽', color: '#fffed8' },
        //         { start: 12, end: 12, label: '山东', color: '#dccee7' },
        //         { start: 13, end: 13, label: '新疆', color: '#fffed7' },
        //         { start: 14, end: 14, label: '江苏', color: '#fce8cd' },
        //         { start: 15, end: 15, label: '浙江', color: '#ddceeb' },
        //         { start: 16, end: 16, label: '江西', color: '#e4f1d3' },
        //         { start: 17, end: 17, label: '湖北', color: '#fde8cd' },
        //         { start: 18, end: 18, label: '广西', color: '#fde8cd' },
        //         { start: 19, end: 19, label: '甘肃', color: '#fde8cd' },
        //         { start: 20, end: 20, label: '山西', color: '#fffdd6' },
        //         { start: 21, end: 21, label: '内蒙古', color: '#ddcfe6' },
        //         { start: 22, end: 22, label: '陕西', color: '#fad8e9' },
        //         { start: 23, end: 23, label: '吉林', color: '#fce8cd' },
        //         { start: 24, end: 24, label: '福建', color: '#fad8e8' },
        //         { start: 25, end: 25, label: '贵州', color: '#fad8e8' },
        //         { start: 26, end: 26, label: '广东', color: '#ddcfe8' },
        //         { start: 27, end: 27, label: '青海', color: '#fad8e9' },
        //         { start: 28, end: 28, label: '西藏', color: '#ddcfe6' },
        //         { start: 29, end: 29, label: '四川', color: '#e4f1d5' },
        //         { start: 30, end: 30, label: '宁夏', color: '#fefcd5' },
        //         { start: 31, end: 31, label: '海南', color: '#fad8e9' },
        //         { start: 32, end: 32, label: '台湾', color: '#fce8cd' },
        //         { start: 33, end: 33, label: '香港', color: '#dc9bbb' },
        //         { start: 34, end: 34, label: '澳门', color: '#e0f7cc' }
        //     ]
        // }
      }
    }
  },
  mounted() {
    const chinaMap = echarts.init(this.$refs.map)
    chinaMap.setOption(this.mapOption)
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px 80px;
  background-color: rgb(240, 242, 245);
  position: relative;

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

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
