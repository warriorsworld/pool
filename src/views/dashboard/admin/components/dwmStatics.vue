<template>
  <div :style="{background: color}" style="height: 136px; display: flex;">
    <div style="flex: 1 1 0%;font-size: 64px;color: #fff;display: flex;justify-content: center;align-items: center;padding: 0 5px;">{{ type }}</div>
    <div style="flex: 2 1 0%;display: flex;flex-direction: column;margin: 0 20px;justify-content: center;color: #fff">
      <div style="padding: 10px; border-bottom: 1px solid #eee">文件个数：{{ fileNum }}</div>
      <div style="padding: 10px;">报文个数：{{ messageNum }}</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  props: {
    type: {
      type: String,
      default: ''
    },
    fileNum: {
      type: Number,
      default: 0
    },
    messageNum: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: '#fff'
    }
  },
  data() {
    return {}
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

</style>
