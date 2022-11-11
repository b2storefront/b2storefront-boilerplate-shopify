import React from 'react'
import PropTypes from 'prop-types'
import { buildRequest } from '@b2storefront/gatsby-b2storefront-shopify/utils'
import axios from 'axios'
import productByHandleQuery from '@b2storefront/gatsby-b2storefront-shopify/queries/product-by-handle'
import { transformProduct } from '@b2storefront/b2s_core/dist/data/transformers/shopify'
import useProductDetailsCore from '@b2storefront/b2s_core/dist/components/ProductDetails/useProductDetailsCore'
import useDebug from '@b2storefront/b2s_core/dist/hooks/useDebug'
import { useDispatch } from 'react-redux'

const ProductPageTmpl = require(`@themes/${process.env.B2S_THEME_NAME}/Templates/ProductPageTmpl`).default

const ProductPageSSR = ({ location, serverData }) => {
  const ownProps = useProductDetailsCore({
    location,
    product: serverData.product,
  })

  ownProps.dispatch = useDispatch()

  useDebug('ProductPageSSR', ownProps)

  return <ProductPageTmpl {...ownProps} />
}

ProductPageSSR.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
  pageContext: PropTypes.object,
}

ProductPageSSR.defaultProps = {
  data: {},
  location: {},
}

export default ProductPageSSR

export async function getServerData(context) {
  try {    
    const response = await axios(buildRequest({
      query: productByHandleQuery,
      variables: {
        handle: context.params.product
      }
    }))

    const product = transformProduct(response.data.data.productByHandle)

    return {
      props: {
        product,  
      }
    }
  } catch (error) {
    console.log(error)
    return {
      status: 404,
      headers: {},
      props: {}
    }
  }
}