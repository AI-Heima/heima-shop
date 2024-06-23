<script setup lang="ts">
import CustomNavbar from '@/pages/index/components/CustomNavbar.vue'
import CategoryPanel from '@/pages/index/components/CategoryPanel.vue'
import type { BannerItem, CategoryItem } from '@/types/home'
import { getHomeBannerAPI, getHomeCategoryAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

// 获取前台分类数据
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}

// 页面加载
onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
})
</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar />
  <!-- 自定义轮播图 -->
  <XtxSwiper :list="bannerList" />
  <!-- 分类面板 -->
  <CategoryPanel :list="categoryList" />
  <view class="index">index</view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>
