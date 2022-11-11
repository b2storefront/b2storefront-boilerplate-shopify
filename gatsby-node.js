const path = require('path')
const { getData } = require('@b2storefront/gatsby-b2storefront-shopify/requests')
const { getPagesWithMetafields } = require('@b2storefront/gatsby-b2storefront-shopify/utils')

exports.createPages = async ({ cache, actions, reporter }) => {
  const { createPage } = actions

  if (process.env.GATSBY_BUILD_MODE !== 'preview') {
    const { allProducts, allCollections } = await getData(reporter, cache)

    for (let product of allProducts) {
      createPage({
        path: `/products/${product.slug}`,
        component: path.resolve('./src/components/Templates/ProductPage.js'),
        context: {
          allCollections,
          allProducts,
          product,
          productId: product.id,
        },
      })
    }
  
    for (let collection of allCollections) {
      createPage({
        path: `/collections/${collection.slug}`,
        component: path.resolve('./src/components/Templates/CategoryPage.js'),
        context: {
          allCollections,
          allProducts,
          collection,
        },
      })
    }

    createPage({
      path: '/',
      component: path.resolve('./src/components/Templates/HomePage.js'),
      context: {
        allCollections,
        allProducts,
      }
    })

    const pages = await getPagesWithMetafields()

    for (let page of pages) {
      createPage({
        path: `/pages/${page.handle}`,
        component: path.resolve('./src/components/Templates/StaticPage.js'),
        context: {
          allCollections,
          allProducts,
          page,
        }
      })
    }
  }
}

exports.sourceNodes = async (args) => {
  const { actions, createNodeId, createContentDigest } = args
}

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@themes': path.resolve(__dirname, 'themes'),
      },
    },
  })
}
