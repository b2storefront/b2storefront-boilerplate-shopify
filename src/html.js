import React from 'react'
import PropTypes from 'prop-types'
const { ProductHeadScripts } = require(`@themes/${process.env.B2S_THEME_NAME}/Templates/ProductPageTmpl`)
const { CategoryHeadScripts } = require(`@themes/${process.env.B2S_THEME_NAME}/Templates/CategoryPageTmpl`)

export default function HTML(props) {
  return (
    <html lang="en" dir="ltr" {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, shrink-to-fit=no, user-scalable=no"
        />
        {props.headComponents}
        <ProductHeadScripts />
        <CategoryHeadScripts />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key="body"
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
