import React from 'react'

const Page404Tmpl = require(`../../themes/${process.env.B2S_THEME_NAME}/Templates/404Tmpl.jsx`).default

const NotFoundPage = () => (
    <Page404Tmpl />
)

export default NotFoundPage