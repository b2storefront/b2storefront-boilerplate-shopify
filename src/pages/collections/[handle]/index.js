/* eslint-disable */

import React from 'react'
import PropTypes from 'prop-types'
import { buildRequest } from '@b2storefront/gatsby-b2storefront-shopify/utils'
import axios from 'axios'
import collectionWithProductsByHandleQuery from '@b2storefront/gatsby-b2storefront-shopify/queries/collection-with-products-by-handle'
import { productFormatter } from '../../../utils/product-formatter'
import useCategoryCore from '@b2storefront/b2s_core/dist/components/CategoryPage/useCategoryCore'

const CategoryPageTmpl = require(`@themes/${process.env.B2S_THEME_NAME}/Templates/CategoryPageTmpl`)
  .default

const CategoryPageSSR = ({ location, data, serverData }) => {
  const ownProps = useCategoryCore(location, serverData.collection, data)


  return <CategoryPageTmpl {...ownProps} />
}

CategoryPageSSR.propTypes = {
  pageContext: PropTypes.shape({
    parentTitle: PropTypes.string,
    parentPath: PropTypes.string,
  }).isRequired,
}

export default CategoryPageSSR

export async function getServerData(context) {
  // Don't render SSR pages for "Fresh" build with latest changes
  if (process.env.GATSBY_BUILD_MODE === 'incremental') {
    return {
      status: 404,
      headers: {},
      props: {}
    }
  }

  try {    
    const response = await axios(buildRequest({
        query: collectionWithProductsByHandleQuery,
        variables: {
            handle: context.params.handle,
            numOfProducts: 10,
        }
    }))

    const collection = response?.data?.data?.collectionByHandle
    collection.products = collection.products.edges.map(edge => productFormatter(edge.node))

    return {
      props: {
        collection,   
      }
    }
  } catch (error) {
    return {
      status: 404,
      headers: {},
      props: {}
    }
  }
}