export const getCollections = `query fetchAuthor {
  products(options: {take: 8 skip:4} ) {
    items {
      id
      name
      description
      slug
      assets {
        source
      }
      variants {
        currencyCode
        price
        name
      }
    }
}
  }
  `
