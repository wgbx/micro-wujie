declare global {
  interface Window {
    __POWERED_BY_WUJIE__: boolean
    __WUJIE_MOUNT: () => void
    $wujie: {
      bus: {
        $emit: (event: string, ...arg: any[]) => unknown
        $on: (event: string, ...arg: any[]) => unknown
      }
      props: {
        [key: string]: any
      }
    }
  }
}

export const isInWujie = window.__POWERED_BY_WUJIE__

let appName = ''

if (isInWujie) {
  document.body.classList.add('is_wujie')
}

export const wujieProps = window.$wujie.props

export function wujieEmit(event: string, ...arg: any[]) {
  if (isInWujie && appName) {
    window.$wujie.bus.$emit(event, appName, ...arg)
  }
}

export function wujieOn(event: string, callBack: (...arg: any[]) => void) {
  window.$wujie.bus.$on(event, (app: string, ...onArg: any[]) => {
    if (app !== appName) return
    callBack(...onArg)
  })
}

export function useWujie(name: string, appRouter: any, Router?: any) {
  appName = name
  const { push } = appRouter
  appRouter.rowPush = push

  window.$wujie.bus.$on('routeChange', (app: string, val: any) => {
    if (app === appName) {
      appRouter.rowPush(val)
    }
  })

  const fnTarget = Router ? Router.prototype : appRouter

  fnTarget.push = (location: any, onComplete: any, onAbort: any) => {
    if (!onComplete && !onAbort) {
      return new Promise((resolve, reject) => {
        wujieEmit('push', location, resolve, reject)
      })
    } else {
      wujieEmit('push', location, onComplete, onAbort)
    }
  }
}
