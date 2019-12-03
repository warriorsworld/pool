import { asyncRoutes, constantRoutes } from '@/router'
import collectionConfigRouter from '@/router/modules/collectionConfig'

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}

const state = {
  routes: [],
  addRoutes: [],
  activeSubRouters: [],
  activeTopRouter: ''
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  },

  SET_SUB_ACTIVE_ROURTERS: (state, subRouter) => {
    state.activeSubRouters = subRouter
  },

  SET_TOP_ACTIVE_ROURTER: (state, topRouter) => {
    state.activeTopRouter = topRouter
  }
}

const actions = {
  generateRoutes({ commit, state }, roles) {
    return new Promise(resolve => {
      let accessedRoutes
      if (roles.includes('admin')) {
        accessedRoutes = asyncRoutes || []
      } else {
        accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
      }
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  },
  // 根据当前激活的顶级路由找到子路由;
  generateTopActiveMenu({ commit, state }, menu) {
    return new Promise(resolve => {
      const subRouter = state.addRoutes.filter(item => item.path === menu)
      commit('SET_TOP_ACTIVE_ROURTER', menu)
      commit('SET_SUB_ACTIVE_ROURTERS', subRouter.length ? subRouter[0].children : [])
      resolve(subRouter)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
