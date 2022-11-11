import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { createCheckout, refreshCheckout, recoverCheckout } from '@b2storefront/b2s_core/dist/reducers/checkout'
import { initializeSession } from '@b2storefront/b2s_core/dist/reducers/session'
import { setToken } from '@b2storefront/b2s_core/dist/utils/session'

const LayoutTmpl =
  require(`@themes/${process.env.B2S_THEME_NAME}/Layout/LayoutTmpl`).default

export const Layout = ({children}) => {
  const { checkout, session } = useSelector((store) => store)

  const dispatch = useDispatch()

  useEffect(() => {
    if (checkout.model && checkout.model.id) {
      dispatch(recoverCheckout(checkout.model.id))

      return
    }
    
    const existingCheckoutID = localStorage.getItem('shopify_checkout_id')
    if (existingCheckoutID) {
      dispatch(refreshCheckout(existingCheckoutID))
    } else {
      dispatch(createCheckout())
    }
  }, [checkout?.model?.id])
  
  useEffect(() => {
    if (session.loaded) {
      return
    }
    dispatch(initializeSession())
  }, [session])
  
  useEffect(() => {
    const parts = location.search.split('?token=')
    const token = parts && parts[1]
    if (token) {
      setToken(token)
      initializeSession()
      navigate('/')
    }
  }, [])

  const ownProps = {
    children,
    checkout,
  }
  
  return (<LayoutTmpl {...ownProps} />)
}

Layout.propTypes = {
  lazy: PropTypes.bool,
  renderNewsletter: PropTypes.bool,
  isMenuOpen: PropTypes.bool,
  mainClassAffix: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  isMenuOpen: false,
}