/**
 * Extracts and returns float value from a string.
 *
 * @param {string} string String
 * @return {any}
 */
// export const getFloatVal = (string) => {
//     string = string.toString();
//     let floatValue = string.match(/[+-]?\d+(\.\d+)?/g)[0];
//     //console.warn(floatValue);
//     return (null !== floatValue) ? parseFloat(parseFloat(floatValue).toFixed(2)) : '';

// };

/**
 * Add first product.
 *
 * @param {Object} product Product
 * @return {{totalProductsCount: number, totalProductsPrice: any, products: Array}}
 */
export const addFirstProduct = (product) => {

    let productPrice = product.variants[0].price;
    //console.warn(productPrice);

    // let productPrice = getFloatVal(product.price);

    let newCart = {
        products: [],
        totalProductsCount: 1,
        totalProductsPrice: productPrice
    };

    //console.log('newcart' ,newCart);
    const newProduct = createNewProduct(product, productPrice,1);
    //console.log('newproduct', newProduct);
    newCart.products.push(newProduct);

    localStorage.setItem('woo-next-cart', JSON.stringify(newCart));

    return newCart;
};

/**
 * Create a new product object.
 *
 * @param {Object} product Product
 * @param {Integer} productPrice Product Price
 * @param {Integer} qty Quantity
 * @return {{image: *, productId: *, totalPrice: number, price: *, qty: *, name: *}}
 */
export const createNewProduct = (product, productPrice, qty) => {

    return {
        productId: parseInt(product.id),
        image: product.assets[0].source,
        name: product.name,
        price: productPrice,
        qty,
        totalPrice: parseInt((productPrice * qty).toFixed(2))
    };

};

/**
 * Updates the existing cart with new item.
 *
 * @param {Object} existingCart Existing Cart.
 * @param {Object} product Product.
 * @param {Integer} qtyToBeAdded Quantity.
 * @param {Integer} newQty New Qty to be updated.
 * @return {{totalProductsCount: *, totalProductsPrice: *, products: *}}
 */
export const updateCart = (existingCart, product, qtyToBeAdded, newQty = false) => {

    const updatedProducts = getUpdatedProducts(existingCart.products, product, qtyToBeAdded, newQty);

    const addPrice = (total, item) => {
        total.totalPrice += item.totalPrice;
        total.qty += item.qty;

        return total;
    };

    // Loop through the updated product array and add the totalPrice of each item to get the totalPrice
    let total = updatedProducts.reduce(addPrice, { totalPrice: 0, qty: 0 });
    console.log('total', total);

    const updatedCart = {
        products: updatedProducts,
        totalProductsCount: total.qty,
        totalProductsPrice: total.totalPrice
    };

    console.warn('updatecart', updatedCart);

    localStorage.setItem('woo-next-cart', JSON.stringify(updatedCart));

    return updatedCart;
};
/**
 * 
 * @param {*} existingCart 
 * @param {*} products 
 * @param {*} qtyToBeAdded 
 * @param {*} newQty 
 * @returns 
 */
export const updateCart2 = (existingCart, products, qtyToBeAdded, newQty = false) => {

    const updatedProducts = getUpdatedProducts2(existingCart.products, products, qtyToBeAdded, newQty);

    const addPrice = (total, item) => {
        total.totalPrice += item.totalPrice;
        total.qty += item.qty;

        return total;
    };

    // Loop through the updated product array and add the totalPrice of each item to get the totalPrice
    let total = updatedProducts.reduce(addPrice, { totalPrice: 0, qty: 0 });
    console.log('total', total);

    const updatedCart = {
        products: updatedProducts,
        totalProductsCount: total.qty,
        totalProductsPrice: total.totalPrice
    };

    console.warn('updatecart', updatedCart);

    localStorage.setItem('woo-next-cart', JSON.stringify(updatedCart));

    return updatedCart;
};


/**
 * 
 * @param {*} existingProductsInCart 
 * @param {*} products 
 * @param {*} qtyToBeAdded 
 * @param {*} newQty 
 * @returns 
 */
export const getUpdatedProducts2 = (existingProductsInCart, products, qtyToBeAdded, newQty = false) => {

    // Check if the product already exits in the cart.
    const productExitsIndex = isProductInCart2(existingProductsInCart, parseInt(products.productId));

    // If product exits ( index of that product found in the array ), update the product quantity and totalPrice
    if (-1 < productExitsIndex) {
        let updatedProducts = existingProductsInCart;
        let updatedProduct = updatedProducts[productExitsIndex];

        // If have new qty of the product available, set that else add the qtyToBeAdded
        updatedProduct.qty = newQty ? parseInt(newQty) : parseInt(parseInt(updatedProduct.qty) + qtyToBeAdded);
        updatedProduct.totalPrice = updatedProduct.price * updatedProduct.qty;

        return updatedProducts;
    } else {

        // If product not found push the new product to the existing product array.
        let productPrice = products.price;
        const newProduct = createNewProduct(products, productPrice, qtyToBeAdded);
        existingProductsInCart.push(newProduct);

        return existingProductsInCart;
    }
};

/**
 * Get updated products array
 * Update the product if it exists else,
 * add the new product to existing cart,
 *
 * @param {Object} existingProductsInCart Existing product in cart
 * @param {Object} product Product
 * @param {Integer} qtyToBeAdded Quantity
 * @param {Integer} newQty New qty of the product (optional)
 * @return {*[]}
 */
export const getUpdatedProducts = (existingProductsInCart, product, qtyToBeAdded, newQty = false) => {

    // Check if the product already exits in the cart.
    const productExitsIndex = isProductInCart(existingProductsInCart, parseInt(product.id));

    // If product exits ( index of that product found in the array ), update the product quantity and totalPrice
    if (-1 < productExitsIndex) {
        let updatedProducts = existingProductsInCart;
        let updatedProduct = updatedProducts[productExitsIndex];

        // If have new qty of the product available, set that else add the qtyToBeAdded
        updatedProduct.qty = newQty ? parseInt(newQty) : parseInt(parseInt(updatedProduct.qty) + qtyToBeAdded);
        updatedProduct.totalPrice = updatedProduct.price * updatedProduct.qty;

        return updatedProducts;
    } else {

        // If product not found push the new product to the existing product array.
        let productPrice = product.variants[0].price;
        const newProduct = createNewProduct(product, productPrice, qtyToBeAdded);
        existingProductsInCart.push(newProduct);

        return existingProductsInCart;
    }
};

/**
 * Returns index of the product if it exists.
 *
 * @param {Object} existingProductsInCart Existing Products.
 * @param {Integer} productId Product id.
 * @return {number | *} Index Returns -1 if product does not exist in the array, index number otherwise
 */

 export const isProductInCart2 = (existingProductsInCart, productId) => {

    const returnItemThatExits = (item, index) => {
        if (productId === item.productId) {
            return item;
        }
    };

    // This new array will only contain the product which is matched.
    const newArray = existingProductsInCart.filter(returnItemThatExits);

    return existingProductsInCart.indexOf(newArray[0]);
};

export const isProductInCart = (existingProductsInCart, productId) => {

    const returnItemThatExits = (item, index) => {
        if (productId === item.productId) {
            return item;
        }
    };

    // This new array will only contain the product which is matched.
    const newArray = existingProductsInCart.filter(returnItemThatExits);

    return existingProductsInCart.indexOf(newArray[0]);
};

export const removeItemFromCart = (productId) => {
    // lay du lieu cart dax cos trong localstorage
    let existingCart = localStorage.getItem('woo-next-cart');
    existingCart = JSON.parse(existingCart);

    // nếu chỉ cố 1 sản phẩm trong giỏ hàng => xóa cart
    if (1 === existingCart.products.length) {
        localStorage.removeItem('woo-next-cart');
        return null;
    }
    // chek neu ton tai san pham trong gio hanfg
    const productExitsIndex = isProductInCart(existingCart.products, productId);

    // if product to be removed exist;
    if (-1 < productExitsIndex) {
        const productToBeRemoved = existingCart.products[productExitsIndex];
        const qtyToBeRemovedFromTotal = productToBeRemoved.qty;
        const priceToBeDeductedFromTotal = productToBeRemoved.totalPrice;

        // remove that product from the array and update the total price and total quantity
        let updatedCart = existingCart;
        updatedCart.products.splice(productExitsIndex, 1);
        updatedCart.totalProductsCount = updatedCart.totalProductsCount - qtyToBeRemovedFromTotal;
        updatedCart.totalProductsPrice = updatedCart.totalProductsPrice - priceToBeDeductedFromTotal;

        localStorage.setItem('woo-next-cart', JSON.stringify(updatedCart));
        return updatedCart;
    } else {
        return existingCart;
    }
};