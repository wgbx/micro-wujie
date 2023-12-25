declare global {
  interface Window {
    __POWERED_BY_WUJIE__: boolean
    __WUJIE_MOUNT: () => void
    $wujie: {
      bus: {
        $emit: (event: string, ...arg: any[]) => unknown
        $on: (event: string, ...arg: any[]) => unknown
      }
    }
  }
}

export const isInWujie = window.__POWERED_BY_WUJIE__

let appName = ''

if (isInWujie) {
  document.body.classList.add('is_wujie')
}

export function wujieEmit(event: string, ...arg: any[]) {
  if (!isInWujie || !appName) return
  window.$wujie.bus.$emit(event, appName, ...arg)
}

export function useWujie(name: string, appRouter: any) {
  appName = name
  const { push } = appRouter
  appRouter.rowPush = push

  window.$wujie.bus.$on('routeChange', (app: string, val: any) => {
    if (app !== appName) return
    appRouter.rowPush(val)
  })

  const fnTarget = appRouter.prototype ? appRouter.prototype : appRouter

  fnTarget.push = (location: string, onComplete: any, onAbort: any) => {
    if (!onComplete && !onAbort) {
      return new Promise((resolve, reject) => {
        wujieEmit('push', location, resolve, reject)
      })
    } else {
      wujieEmit('push', location, onComplete, onAbort)
    }
  }
}
