import React from 'react'
import { Layout } from '../../../src/components/Layout/Layout'
import SEO from '@b2storefront/b2s_core/dist/components/snippets/SEO'
import { CategoryType } from '@b2storefront/b2s_core/dist/types/category'
import { Link } from 'gatsby'
import { useCustomJavascript } from '@b2storefront/b2s_core/dist/hooks/useCustomJavascript'
import { arrayOf } from 'prop-types'
import { ProductType } from '@b2storefront/b2s_core/dist/types/product'
import { PageType } from '@b2storefront/b2s_core/dist/types/page'

/** 
 * @param {StaticPageTmpl.propTypes} props
 **/
const StaticPageTmpl = ({ allCollections, allProducts, collections, products, page }) => {
  useCustomJavascript(() => {
    
  })

  return (
    <Layout>
      <SEO
        title={page.title}
        description=""
      />
      <section className="section section-home-page">
        <div className="container">
          <h1 className="text-center">{page.title}</h1>
          <div dangerouslySetInnerHTML={{__html: page.content}}></div>
        </div>
      </section>
    </Layout>
  )
}

StaticPageTmpl.propTypes = {
  collections: arrayOf(CategoryType),
  products: arrayOf(ProductType),
  page: PageType,
}

export default StaticPageTmpl
