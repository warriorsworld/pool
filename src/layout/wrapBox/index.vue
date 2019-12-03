<template>
  <div class="wrapBox">
    <!-- header part -->
    <div class="header">
      <img :src="headerImg" class="headerImage">
      <h4 class="headerTitle">西北空管局数据资源池系统</h4>
      <!-- top navgation -->
      <el-menu :router="true" :default-active="active_top_route" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item v-for="(item, index) in permission_routes" :key="index" :index="item.path">{{ item.meta.title }}</el-menu-item>
      </el-menu>
      <!-- user function -->
      <div class="right-menu">
        <template v-if="device!=='mobile'">
          <search id="header-search" class="right-menu-item" />

          <error-log class="errLog-container right-menu-item hover-effect" />

          <screenfull id="screenfull" class="right-menu-item hover-effect" />

          <div class="right-menu-item hover-effect item"><el-badge :value="3"><i style="font-size: 24px" class="el-icon-bell" /></el-badge></div>
        </template>

        <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="hover">
          <div class="avatar-wrapper">
            <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">
            <i class="el-icon-caret-bottom" />
          </div>
          <el-dropdown-menu slot="dropdown">
            <router-link to="/profile/index">
              <el-dropdown-item>Profile</el-dropdown-item>
            </router-link>
            <router-link to="/">
              <el-dropdown-item>Dashboard</el-dropdown-item>
            </router-link>
            <a target="_blank" href="https://github.com/PanJiaChen/vue-element-admin/">
              <el-dropdown-item>Github</el-dropdown-item>
            </a>
            <a target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/#/">
              <el-dropdown-item>Docs</el-dropdown-item>
            </a>
            <el-dropdown-item divided>
              <span style="display:block;" @click="logout">Log Out</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>

    <!-- main Content -->
    <div class="mainContent">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import ErrorLog from '@/components/ErrorLog'
import Screenfull from '@/components/Screenfull'
import Search from '@/components/HeaderSearch'
export default {
  name: 'WrapBox',
  components: {
    Breadcrumb,
    Hamburger,
    ErrorLog,
    Screenfull,
    Search
  },
  data() {
    return {
      headerImg: require('@/assets/sys_images/headerImg.png')
    }
  },
  computed: {
    ...mapGetters([
      'permission_routes',
      'active_top_route',
      'sidebar',
      'avatar',
      'device'
    ])
  },
  watch: {
    '$route.path': {
      handler(newValue) {
        const matchRouter = this.permission_routes.filter(item => new RegExp(item.path).test(newValue))
        const activeTopMenu = matchRouter.length && matchRouter[0].path || ''
        activeTopMenu && this.$store.dispatch('permission/generateTopActiveMenu', activeTopMenu)
      },
      immediate: true
    }
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapBox {
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .wrapBox .header {
    height: 60px;
    display: flex;
    padding: 0 20px;
    background: rgb(84, 92, 100);
    align-items: center;
  }
  .wrapBox .header .headerImage {
    width: 50px;
    height: 50px;
    margin-right: 20px;
  }
  .wrapBox .header .headerTitle {
    padding: 0;
    margin: 0;
    color: #fff;
    font-size: 22px;
    line-height: 60px;
    letter-spacing: 1px;
    margin-right: 40px;
  }
  .wrapBox .mainContent {
    flex: 1;
    overflow: hidden;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 10px;
      font-size: 18px;
      color: #ffffff;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;
        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        // margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
</style>
