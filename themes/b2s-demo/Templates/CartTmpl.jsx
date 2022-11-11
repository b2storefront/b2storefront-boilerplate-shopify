import React from 'react'
import {Layout} from '../../../src/components/Layout/Layout'
import SEO from '@b2storefront/b2s_core/dist/components/snippets/SEO'
import {Loader} from '../../../src/components/Snippets/Loader'
import { Link } from 'gatsby'

const CartTmpl = props => (
  <Layout>
    <SEO title="Your Shopping Cart" />
    <div className="py-lg-5 pb-5">
      <div className="container">
        {props.model && props.model.lineItems.length === 0 ? (
          props.loading ? (
            <Loader />
          ) : (
            <CartEmpty />
          )
        ) : props.model ? (
            <></>
            // <cartTableCore model={props.model} />
        ) : (
          <Loader />
        )}
      </div>
    </div>
  </Layout>
)

const CartEmpty = () => (
  <div className="row justify-content-center">
    <div className="col-auto">
      <div className="text-center">
        <h1 className="mb-4">
          Your cart is empty
        </h1>
        <Link className="btn btn-primary border-0 px-4 py-2" to="/">
          Continue shopping
        </Link>
      </div>
    </div>
  </div>
)

export default CartTmpl
