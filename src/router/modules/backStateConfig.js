import Layout from '@/layout'

/**
 * 采集配置页面的路由配置
 */

const backStageConfigRouter = [
  {
    path: 'userManage',
    component: Layout,
    name: 'userManage',
    meta: {
      title: '用户权限管理',
      icon: 'chart'
    },
    children: [
      {
        path: 'user-list',
        component: () => import('@/views/icons/index'),
        name: 'user-list',
        meta: { title: '用户列表', noCache: true }
      },
      {
        path: 'role-manage',
        component: () => import('@/views/charts/keyboard'),
        name: 'role-manage',
        meta: { title: '角色管理', noCache: true }
      },
      {
        path: 'menu-manage',
        component: () => import('@/views/charts/keyboard'),
        name: 'menu-manage',
        meta: { title: '菜单管理', noCache: true }
      },
      {
        path: 'department-manage',
        component: () => import('@/views/charts/keyboard'),
        name: 'department-manage',
        meta: { title: '部门管理', noCache: true }
      }
    ]
  },
  {
    path: 'maintenance',
    component: Layout,
    name: 'maintenance',
    meta: {
      title: '系统运维监控',
      icon: 'chart'
    },
    children: [
      {
        path: 'foundation-setup',
        component: () => import('@/views/charts/keyboard'),
        name: 'foundation-setup',
        meta: { title: '基础设施监控', noCache: true }
      },
      {
        path: 'database-mointor',
        component: () => import('@/views/charts/keyboard'),
        name: 'database-mointor',
        meta: { title: ' 数据库服务监控', noCache: true }
      },
      {
        path: 'interface-mointer',
        component: () => import('@/views/charts/keyboard'),
        name: 'interface-mointer',
        meta: { title: '服务接口监控', noCache: true }
      }
    ]
  }
]

export default backStageConfigRouter
