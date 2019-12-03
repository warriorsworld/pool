import Layout from '@/layout'

/**
 * 采集配置页面的路由配置
 */

const collectionConfigRouter = [
  {
    path: 'source',
    component: Layout,
    name: 'source',
    alwaysShow: true,
    meta: {
      title: '数据采集配置',
      icon: 'chart'
    },
    children: [
      {
        path: 'config',
        component: () => import('@/views/charts/keyboard'),
        name: 'collectionConfig',
        meta: { title: '数据采集配置', noCache: true }
      }
    ]
  },
  {
    path: 'monitor',
    component: Layout,
    name: 'monitor',
    meta: {
      title: '采集任务监控',
      icon: 'chart'
    },
    children: [
      {
        path: 'data',
        component: () => import('@/views/charts/keyboard'),
        name: 'monitorData',
        meta: { title: '数据采集监控', noCache: true }
      },
      {
        path: 'task',
        component: () => import('@/views/charts/keyboard'),
        name: 'monitorTask',
        meta: { title: ' 任务统计', noCache: true }
      },
      {
        path: 'log',
        component: () => import('@/views/charts/keyboard'),
        name: 'monitorLog',
        meta: { title: ' 日志查看', noCache: true }
      },
      {
        path: 'warning',
        component: () => import('@/views/charts/keyboard'),
        name: 'warning',
        meta: { title: '告警信息', noCache: true }
      }
    ]
  },
  {
    path: 'dispatch',
    component: Layout,
    alwaysShow: true,
    name: 'dispatch',
    meta: {
      title: '采集任务调度',
      icon: 'chart'
    },
    children: [
      {
        path: 'taskManage',
        component: () => import('@/views/charts/keyboard'),
        name: 'taskManage',
        meta: { title: '采集任务管理', noCache: true }
      }
    ]
  },
  {
    path: 'patch',
    component: Layout,
    name: 'patch',
    alwaysShow: true,
    meta: {
      title: '数据补采',
      icon: 'chart'
    },
    children: [
      {
        path: 'data',
        component: () => import('@/views/charts/keyboard'),
        name: 'patchData',
        meta: { title: '数据补采', noCache: true }
      }
    ]
  }
]

export default collectionConfigRouter
