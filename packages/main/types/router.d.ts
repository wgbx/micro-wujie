import 'vue-router'
import type { RouteLocationRaw, RouteRecordName, RouteLocationNormalizedLoaded } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title: string
    icon?: string
    unlink?: boolean
    auth?: string
  }

  interface Router {
    reload: (RouteLocationRaw) => void
    close: (RouteLocationRaw) => void
  }

  interface _RouteRecordBase {
    hidden?: Boolean
    group?: string
  }
}

declare global {
  type ViewTagRow = Pick<RouteLocationNormalizedLoaded, 'name' | 'meta'>

  type ViewTag = {
    name: RouteRecordName
    path: string
    query: {}
    params: {}
    meta: RouteMeta
  }

  type CollectMenu = {
    name: RouteRecordName
    path: string
    meta: RouteMeta
  }
}
