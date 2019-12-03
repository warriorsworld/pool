import Layout from '@/layout'

/**
 * 采集配置页面的路由配置
 */

const applicationConfigRouter = [
  {
    path: 'serachDownload',
    component: Layout,
    name: 'serachDownload',
    meta: {
      title: '查询下载',
      icon: 'chart'
    },
    children: [
      {
        path: 'aviation-message',
        component: () => import('@/views/charts/keyboard'),
        name: 'aviation-message',
        meta: { title: '民航气象报文数据', noCache: true }
      },
      {
        path: 'normal-observe',
        component: () => import('@/views/charts/keyboard'),
        name: 'normal-observe',
        meta: { title: '常规观测数据', noCache: true }
      },
      {
        path: 'abnormal-observe',
        component: () => import('@/views/charts/keyboard'),
        name: 'abnormal-observe',
        meta: { title: '非常规观测资料', noCache: true }
      },
      {
        path: 'forecast-data',
        component: () => import('@/views/charts/keyboard'),
        name: 'forecast-data',
        meta: { title: '预报数据', noCache: true }
      },
      {
        path: 'meteorological-data',
        component: () => import('@/views/charts/keyboard'),
        name: 'meteorological-data',
        meta: { title: '气候观测数据', noCache: true }
      },
      {
        path: 'forecast-product',
        component: () => import('@/views/charts/keyboard'),
        name: 'forecast-product',
        meta: { title: '预报产品数据', noCache: true }
      },
      {
        path: 'important-weather',
        component: () => import('@/views/charts/keyboard'),
        name: 'important-weather',
        meta: { title: '重要天气个例', noCache: true }
      },
      {
        path: 'history-data',
        component: () => import('@/views/charts/keyboard'),
        name: 'history-data',
        meta: { title: '历史资料数据', noCache: true }
      }
    ]
  },
  {
    path: 'statistics',
    component: Layout,
    name: 'statistics',
    meta: {
      title: '数据统计',
      icon: 'chart'
    },
    children: [
      {
        path: 'data-manage',
        component: () => import('@/views/charts/keyboard'),
        name: 'data-manage',
        meta: { title: '数据集管理', noCache: true }
      },
      {
        path: 'life-manage',
        component: () => import('@/views/charts/keyboard'),
        name: 'life-manage',
        meta: { title: ' 生命周期管理', noCache: true }
      }
    ]
  }
]

export default applicationConfigRouter
