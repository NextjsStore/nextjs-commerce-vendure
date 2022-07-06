import { isEmpty } from 'lodash'

const colorHover = '#40c6ff'

const Price = ({ regularPrice = 0, salesPrice }) => {
  const classes = useStyle_price()

  if (isEmpty(salesPrice)) {
    return null
  }

  /**
   * Get discount percent.
   *
   * @param {String} regularPrice
   * @param {String} salesPrice
   */
  const discountPercent = (regularPrice, salesPrice) => {
    if (isEmpty(regularPrice) || isEmpty(salesPrice)) {
      return null
    }

    const formattedRegularPrice = parseInt(regularPrice?.substring(1))
    const formattedSalesPrice = parseInt(salesPrice?.substring(1))

    const discountPercent =
      ((formattedRegularPrice - formattedSalesPrice) / formattedRegularPrice) *
      100

    return {
      discountPercent:
        formattedSalesPrice !== formattedRegularPrice
          ? `(${discountPercent.toFixed(2)}%) OFF`
          : null,
      strikeThroughClass:
        formattedSalesPrice < formattedRegularPrice ? 'regular_price' : '',
    }
  }

  const productMeta = discountPercent(regularPrice, salesPrice)

  return (
    <h6>
      {/* Discounted price */}
      <span>{regularPrice}</span>

      {/* Regular price */}
      {productMeta?.discountPercent ? <span>{salesPrice}</span> : null}

      {/* Discount percent */}
      <span>{productMeta?.discountPercent}</span>
    </h6>
  )
}

export default Price
