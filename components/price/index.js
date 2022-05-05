import { isEmpty } from "lodash";
import { makeStyles } from "@material-ui/core/styles";

const colorHover = '#40c6ff';

const useStyle_price = makeStyles({
    product_price: {
        fontSize: '20px',
        color: '#999',
        padding: '0px',
        margin: '0px',
        '& span:first-child': {
            textDecoration: 'line-through',
            marginRight: '15px',
        },
        '& span:nth-child(2)': {
            color: `${colorHover}`,
            margin: '0px 15px',
        },
        '& span:last-child': {
            display: 'none',
        }
    },

})

const Price = ({ regularPrice = 0, salesPrice }) => {
    const classes = useStyle_price()

    if (isEmpty(salesPrice)) {
        return null;
    }

    /**
     * Get discount percent.
     *
     * @param {String} regularPrice
     * @param {String} salesPrice
     */
    const discountPercent = (regularPrice, salesPrice) => {
        if (isEmpty(regularPrice) || isEmpty(salesPrice)) {
            return null;
        }

        const formattedRegularPrice = parseInt(regularPrice?.substring(1));
        const formattedSalesPrice = parseInt(salesPrice?.substring(1));

        const discountPercent = ((formattedRegularPrice - formattedSalesPrice) / formattedRegularPrice) * 100;

        return {
            discountPercent: formattedSalesPrice !== formattedRegularPrice ? `(${discountPercent.toFixed(2)}%) OFF` : null,
            strikeThroughClass: formattedSalesPrice < formattedRegularPrice ? 'regular_price' : ''
        }
    }

    const productMeta = discountPercent(regularPrice, salesPrice);

    return (
        <h6 className={classes.product_price}>
            {/* Discounted price */}
            <span className={productMeta?.strikeThroughClass}>{regularPrice}</span>

            {/* Regular price */}
            {productMeta?.discountPercent ? <span className={classes.price_sales}>{salesPrice}</span> : null}

            {/* Discount percent */}
            <span className={classes.discount}>{productMeta?.discountPercent}</span>
        </h6>
    )
}

export default Price
