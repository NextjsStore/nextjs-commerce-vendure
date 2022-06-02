import { getCommerceApi } from '@framework/api'

export default getCommerceApi()

export const testApi = () => {
  const url = process.env.NEXT_PUBLIC_VENDURE_SHOP_API_URL
  const token = process.env.VENDURE_TOKEN

  return fetch(`${url}?vendure-token=${token}`)
}
