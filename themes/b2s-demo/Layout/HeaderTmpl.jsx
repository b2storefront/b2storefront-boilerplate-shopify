import React from 'react'
import { useCustomJavascript } from '@b2storefront/b2s_core/dist/hooks/useCustomJavascript'
import { Link } from 'gatsby'

const HeaderTmpl = (props) => {
  useCustomJavascript(() => {
    
  })

  return (
    <header className="header">
      <div className="header__top">
          <div className="container">
              <div className="row justify-content-between">
                  <div className="col">Free shipment from $200</div>
                  <div className="col">Free 30 day returns on your order</div>
              </div>
          </div>
      </div>
      <div className="header__middle">
          <nav className="navbar navbar-expand-lg bg-light">
              <div className="container">
                  <Link className="navbar-brand" to="/">
                      <img src="/images/logo.svg" alt="logo" width="138" height="35" />
                  </Link>
                  <ul className="nav nav-icon">
                      <li className="nav-item">
                          <a className="nav-link" href="#"><img src="/images/search.svg" alt="Search" width="19" height="19" /></a>
                      </li>                        
                      <li className="nav-item">
                        <a className="nav-link" href={props.cart ? props.cart.webUrl : '#'}><img src="/images/cart.svg" alt="Shopping Cart" width="19" height="19" /></a>
                        ({props.cart?.lineItems?.length})
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#"><img src="/images/avatar.svg" alt="Account" width="19" height="19" /></a>
                      </li>
                  </ul>                     
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>                    
                  <div className="collapse navbar-collapse navbar-menu" id="navbarMenu">
                      <div className="navbar-nav">
                          <a className="nav-link" href="#">Men</a>
                          <a className="nav-link" href="#">Women</a>
                          <a className="nav-link" href="#">Kids</a>
                      </div>
                  </div>
              </div>
          </nav>
      </div>
    </header>
  )
}

export default HeaderTmpl
