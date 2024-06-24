import { http } from '@/utils/http'
import type { LoginResult } from '@/types/member'

// data参数
type loginParams = {
  code: string
  encryptedData: string
  iv: string
}
// 小程序登录
export const postLoginWxMinAPI = (data: loginParams) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin',
    data,
  })
}

// 小程序登录-内测版
export const postLoginWxMinSimpleAPI = (phoneNumber: string) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin/simple',
    data: {
      phoneNumber, // 模拟手机号码
    },
  })
}
