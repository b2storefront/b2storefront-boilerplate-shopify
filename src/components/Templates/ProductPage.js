import React from 'react'
import PropTypes from 'prop-types'
import useProductDetailsCore from '@b2storefront/b2s_core/dist/components/ProductDetails/useProductDetailsCore'
import useDebug from '@b2storefront/b2s_core/dist/hooks/useDebug'
import { useDispatch } from 'react-redux'
import { graphql } from 'gatsby'

const ProductPageTmpl = require(`@themes/${process.env.B2S_THEME_NAME}/Templates/ProductPageTmpl`).default

const ProductDetailsPage = ({ location, data, pageContext }) => {
  const dispatch = useDispatch()
  const ownProps = useProductDetailsCore({
    location,
    product: pageContext.product,
    allProducts: pageContext.allProducts,
    allCollections: pageContext.allCollections,
  }) 

  ownProps.dispatch = dispatch
  ownProps.category = data.moreProductsByCollection

  useDebug('ProductPageTmpl properties:', ownProps)

  return <ProductPageTmpl {...ownProps} />
}

ProductDetailsPage.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
  pageContext: PropTypes.object,
}

ProductDetailsPage.defaultProps = {
  data: {},
  location: {},
}

export const pageQuery = graphql`
  query MyQuery($productId: String) {
    moreProductsByCollection(products: {elemMatch: {id: {eq: $productId}}}) {
      products {
        featured_image {
          url
        }
        id
        price
        slug
        title
        type
        vendor
        description
        currency
        prices {
          max
          min
          old_max
          old_min
        }
      }
      id
      slug
      title
    }
  }  
`

export default ProductDetailsPage