import { gql } from "@apollo/client";

export const PRODUCT_BY_SLUG_QUERY = gql` query Product($slug:String!) {
	product(slug: $slug) {
		id
		name
		slug
		assets {
		  source
		}
		description
		collections {
		  name
		  slug
		}
		variants {
		  price
		}
	  }
  }
`;

export const PRODUCT_SLUGS = gql` query Products {
	products(options: {take: 4}) {
		items {
		  id
		  name
		  description
		  slug
		  assets {
			source
		  }
		  variants {
			price
			name
		  }
		}
	  }
}
`;
