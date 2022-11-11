import React from 'react'
import { useSelector } from 'react-redux'

const FooterTmpl = require(`@themes/${process.env.B2S_THEME_NAME}/Layout/FooterTmpl`).default;

const Footer = () => {
  const { isLoggedIn } = useSelector(store => store.session)

  return <FooterTmpl isLoggedIn={isLoggedIn} />
}

export {
  Footer,
}