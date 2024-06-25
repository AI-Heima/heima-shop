import type { XtxGuessInstamce } from '@/types/component'
import { ref } from 'vue'

// 猜你喜欢组合式函数
export const useGuessList = () => {
  // 获取猜你喜欢组件实例
  const guessRef = ref<XtxGuessInstamce>()
  // 滚动触底
  const onScrolltolower = () => {
    guessRef.value?.getMore()
  }

  // 返回 ref 和事件处理函数
  return {
    guessRef,
    onScrolltolower,
  }
}
