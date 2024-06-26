import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { AddressItem } from '@/types/address'

// 定义 Store
export const useAddressStore = defineStore('address', () => {
  const selectedAddress = ref<AddressItem>()

  const changeSelectedAddress = (val: AddressItem) => {
    selectedAddress.value = val
  }

  return {
    selectedAddress,
    changeSelectedAddress,
  }
})
