import React from 'react'
import useCategoryCore from '@b2storefront/b2s_core/dist/components/CategoryPage/useCategoryCore'
import useDebug from '@b2storefront/b2s_core/dist/hooks/useDebug'
import { CategoryHeadScripts } from '../../../themes/b2s-demo/Templates/CategoryPageTmpl'

const CategoryPageTmpl = require(`@themes/${process.env.B2S_THEME_NAME}/Templates/CategoryPageTmpl`).default

const CategoryPage = ({ location, data, pageContext }) => {
  const ownProps = useCategoryCore(location, pageContext, data)

  useDebug('CategoryPageTmpl properties:', ownProps)

  return <CategoryPageTmpl {...ownProps} />
}

export const Head = () => CategoryHeadScripts({...ownProps})

export default CategoryPage
