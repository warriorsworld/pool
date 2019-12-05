<template>
  <el-row :gutter="20" class="panel-group">
    <el-col v-for="(item, index) in 6" :key="index" :xs="12" :sm="12" :lg="8" :class="[index < 3 ? 'card-panel-col' : '']">
      <div class="card-panel" style="display: flex;padding: 10px">
        <div style="width: 100px; height: 100%;display: flex;flex-direction: column; align-items: center">
          <div style="width: 100%;height: 30px;background: #0099ff;border-top-right-radius: 14px;font-size: 14px;color: #fff;line-height: 30px;padding-left: 5px;margin-bottom: 5px">民航气象报文</div>
          <img style="height: 118px; width: 89px" :src="testImg">
        </div>
        <div style="flex: 1;display: flex;flex-direction: column">
          <div style="height: 30px;display: flex;flex-direction: row;justify-content: space-between;padding: 0 0 0 10px;align-items: center;">
            <div>共5类</div>
            <el-button type="primary" size="mini">更多</el-button>
          </div>
          <div style="flex: 1">
            <ul style="font-size: 14px;height: 100%;margin: 0;display: flex;flex-direction: column;justify-content: space-around;padding-left: 30px">
              <li style="border-bottom: 1px solid rgba(242, 242, 242, 1);padding: 5px">采集状态：<span /></li>
              <li style="letter-spacing: 1.2px;border-bottom: 1px solid rgba(242, 242, 242, 1);padding: 5px">吞 吐 量：<span style="padding-left: 20px;">200m/s</span></li>
              <li style="border-bottom: 1px solid rgba(242, 242, 242, 1);padding: 5px">报文个数：<span style="padding-left: 20px;">119</span></li>
              <li style="border-bottom: 1px solid rgba(242, 242, 242, 1);padding: 5px">文件个数：<span style="padding-left: 20px;">200</span></li>
            </ul>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import CountTo from 'vue-count-to'

export default {
  components: {
    CountTo
  },
  data() {
    return {
      testImg: require('@/assets/sys_images/u748.png')
    }
  },
  methods: {
    handleSetLineChartData(type) {
      this.$emit('handleSetLineChartData', type)
    }
  }
}
</script>

<style lang="scss" scoped>
    .card-panel-col {
        margin-bottom: 20px
    }
    .card-panel {
        box-shadow: rgba(62,57,107,0.3) 0px 6px 16px 2px;
        transition: opacity 0.4s linear, transform 0.4s ease-in-out, box-shadow 0.4s linear;
    }
    .card-panel:hover {
        transform: scale(1.01);
        box-shadow: 0px 0px 0px 5px rgba(255, 255, 255, 1), 1px 11px 15px 10px rgba(0, 0, 0, 0.4);
        opacity: 1;
    }
</style>
