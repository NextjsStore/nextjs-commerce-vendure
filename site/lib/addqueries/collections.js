export const getCollections = `query getProduct($slug: String!) {
    product(slug: $slug) {
      id
      name
      slug
      description
      assets {
        id
        preview
        name
      }
      collections {
        name
        slug
      }
      variants {
        id
        priceWithTax
        currencyCode
        options {
          id
          name
          code
          groupId
          group {
            id
            options {
              name
            }
          }
        }
      }
      optionGroups {
        id
        code
        name
        options {
          id
          name
        }
      }
    }
  }
  `