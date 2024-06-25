import { http } from '@/utils/http'
import type { AddressParams } from '@/types/address'

// 添加收货地址
export const postMemberAddressAPI = (data: AddressParams) => {
  return http({
    method: 'POST',
    url: '/member/address',
    data,
  })
}
