export type GuessItem = {
  /** id */
  id: string
  /** 商品名称 */
  name: string
  /** 商品描述 */
  desc: string
  /** 商品价格 */
  price: number
  /** 商品图片 */
  picture: string
  /** 商品折扣 */
  discount: number
  /** 商品已下单数量 */
  orderNum: number
}

/** 首页-热门推荐数据类型 */
export type PageResult<T> = {
  /** 总条数 */
  counts: number
  /** 每页条数 */
  pageSize: number
  /** 总页数 */
  pages: number
  /** 当前页数 */
  page: number
  /** 当前页数据 */
  items: T[]
}

/* 通用分类参数类型 */
export type PageParams = {
  /** 页码：默认值为 1 */
  page?: number
  /** 页大小：默认值为 10 */
  pageSize?: number
}
