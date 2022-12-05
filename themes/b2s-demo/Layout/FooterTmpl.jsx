import React from 'react'
import { useCustomJavascript } from '@b2storefront/b2s_core/dist/hooks/useCustomJavascript'
import { Link } from 'gatsby'

const FooterTmpl = () => {
  useCustomJavascript(() => {

  })

  return (
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-12 col-lg-6 footer__about">
                    <div className="footer__logo">
                        <a href="#">
                            <img src="/images/logo.svg" alt="logo" width="138" height="35" />
                        </a>
                    </div>
                    <div className="footer__about-desc">
                        House My Brand designs clothing for the young, the old & everyone in between – but most importantly, for the fashionable
                    </div>
                    <ul className="list-unstyled footer__socials">
                        <li><a href="#"><img src="/images/fb.svg" alt="facebook" target="new" width="10" height="18" /></a></li>
                        <li><a href="#" target="new"><img src="/images/twiter.svg" alt="" target="new" width="20" height="16" /></a></li>
                        <li><a href="#" target="new"><img src="/images/linkedIn.svg" alt="" target="new" width="17" height="15" /></a></li>
                        <li><a href="#" target="new"><img src="/images/instagram.svg" alt="" target="new" width="18" height="18" /></a></li>
                        <li><a href="#" target="new"><img src="/images/youtube.svg" alt="" target="new" width="20" height="14" /></a></li>
                    </ul>
                </div>
                <div className="col-12 col-md-4 col-lg-2 footer__nav">
                    <div className="footer__title">Shopping online</div>
                    <ul className="list-unstyled">
                        <li><a href="#">Order Status</a></li>
                        <li><a href="#">Shipping and Delivery</a></li>
                        <li><a href="#">Returns</a></li>
                        <li><a href="#">Payment Options</a></li>
                        <li>
                        <Link to="/pages/contact/">
                            Contact Us
                        </Link>
                        </li>  
                    </ul>
                </div>
                <div className="col-12 col-md-4 col-lg-2 footer__nav">
                    <div className="footer__title">Information</div>
                    <ul className="list-unstyled">
                        <li><a href="#">Cards</a></li>
                        <li><a href="#">Find a store</a></li>
                        <li><a href="#">Newsletter</a></li>
                        <li><a href="#">Bacome a member</a></li>
                        <li><a href="#">Site feedback</a></li>                                                
                    </ul>
                </div>
                <div className="col-12 col-md-4 col-lg-2 footer__nav footer__contact">
                    <div className="footer__title">Contact</div>
                    <ul className="list-unstyled">
                        <li>store@uikit.com</li>
                        <li>Hotline: <a href="tel:+1131138138">+1 131 138 138</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="footer__copyright">Design by iceo.co - © 2019. All rights reserved.</div>
        <div className="modal fade" id="sizeModal" tabIndex="-1" aria-labelledby="sizeModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="sizeModalLabel">Size table</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        ...
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default FooterTmpl