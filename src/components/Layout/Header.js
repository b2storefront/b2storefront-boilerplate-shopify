import React from 'react'
import { useSelector } from 'react-redux'

const HeaderTmpl =
  require(`@themes/${process.env.B2S_THEME_NAME}/Layout/HeaderTmpl`).default

const Header = () => {
  const { model } = useSelector((store) => store.checkout)
  const { isLoggedIn } = useSelector((store) => store.session)

  return (
    <HeaderTmpl isLoggedIn={isLoggedIn} cart={model} />
  )
}

export {
  Header,
}
