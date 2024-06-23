import type { BannerItem, CategoryItem } from '@/types/home'
import { http } from '@/utils/http'

// 首页-广告区域-小程序
// distributionSite 广告区域展示位置 1 为首页（默认值） 2 为商品分类页
export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}

// 首页-前台分类-小程序
// GET
// /home/category/mutli
export const getHomeCategoryAPI = () => {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}
