import React from 'react'
import ErrorBoundary from '@b2storefront/b2s_core/dist/components/ErrorBoundary'
import { JSONLD } from '@b2storefront/b2s_core/dist/components/snippets/JSONLD'
import { Footer } from '../../../src/components/Layout/Footer'
import { Header } from '../../../src/components/Layout/Header'

const LayoutTmpl = (props) => (
  <ErrorBoundary>
    <JSONLD type="shop" />
    <Header isMenuOpen={props.isMenuOpen} menuItems={props.menuData} />
    {props.children}
    <Footer renderNewsletter={props.renderNewsletter} />
  </ErrorBoundary>
)

export default LayoutTmpl
