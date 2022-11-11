import React from 'react'
import PropTypes from 'prop-types'
import useHomePage from '@b2storefront/b2s_core/dist/components/HomePage/useHomePage'
import useDebug from '@b2storefront/b2s_core/dist/hooks/useDebug'
import { useDispatch } from 'react-redux'

const HomePageTmpl = require(`@themes/${process.env.B2S_THEME_NAME}/Templates/HomePageTmpl`).default

const HomePage = ({ location, data, pageContext }) => {
  const dispatch = useDispatch()
  const ownProps = useHomePage({
    location,
    allProducts: pageContext.allProducts,
    allCollections: pageContext.allCollections,
  })

  ownProps.dispatch = dispatch

  useDebug('HomePageTmpl properties:', ownProps)

  return <HomePageTmpl {...ownProps} />
}

HomePage.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
  pageContext: PropTypes.object,
}

HomePage.defaultProps = {
  data: {},
  location: {},
}

export default HomePage