import React from 'react'
import PropTypes from 'prop-types'
import useStaticPage from '@b2storefront/b2s_core/dist/components/StaticPage/useStaticPage'
import useDebug from '@b2storefront/b2s_core/dist/hooks/useDebug'
import { useDispatch } from 'react-redux'

const StaticPageTmpl = require(`@themes/${process.env.B2S_THEME_NAME}/Templates/StaticPageTmpl`).default

const StaticPage = ({ location, data, pageContext }) => {
  const dispatch = useDispatch()
  const ownProps = useStaticPage({
    location,
    allProducts: pageContext.allProducts,
    allCollections: pageContext.allCollections,
    page: pageContext.page,
  })

  ownProps.dispatch = dispatch

  useDebug('StaticPageTmpl properties:', ownProps)

  return <StaticPageTmpl {...ownProps} />
}

StaticPage.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
  pageContext: PropTypes.object,
}

StaticPage.defaultProps = {
  data: {},
  location: {},
}

export default StaticPage