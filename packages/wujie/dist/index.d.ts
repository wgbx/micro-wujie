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
export declare const isInWujie: boolean
export declare const wujieProps: {
  [key: string]: any
}
export declare function wujieEmit(event: string, ...arg: any[]): void
export declare function wujieOn(event: string, callBack: (...arg: any[]) => void): void
export declare function useWujie(name: string, appRouter: any, Router?: any): void
