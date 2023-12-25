import { getCookie, getQuery } from '@/utils'

function getErrorInfo(tip: string) {
  return {
    title: '初始化错误',
    info: `站点信息 ${tip} 参数缺失`
  }
}

export default async () => {
  const { siteId = getCookie('siteId'), channelCode = getCookie('channelCode') } = getQuery()

  if (!siteId) {
    throw getErrorInfo('siteId')
  }
  if (!channelCode) {
    throw getErrorInfo('channelCode')
  }
}
