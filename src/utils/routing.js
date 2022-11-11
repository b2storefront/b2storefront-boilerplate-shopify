const generateURL = (path) => {
    return `${process.env.GATSBY_SHOP_URL}${path}`
}

const generateProductURL = (slug) => {
    return generateURL(getProductPath(slug))
}

const getProductPath = (slug) => {
    return `/products/${slug}`
}

const getCategoryPath = (slug) => {
    return `/collections/${slug}`
}

export {
    generateURL,
    generateProductURL,
    getProductPath,
    getCategoryPath,
}