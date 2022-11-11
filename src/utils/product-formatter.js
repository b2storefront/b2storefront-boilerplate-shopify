const { slugify } = require("@b2storefront/b2s_core/dist/utils/helpers")

const productFormatter = (product) => {
    if (!product) {
        return product
    }

    let images = product.images
    let variants = product.variants
    let [brand, designer] = product.vendor.split('•').map(item => item.trim())

    if (variants?.edges) {
        variants = variants.edges.map(edge => edge.node)
    }

    if (images?.edges) {
        images = images.edges.map(edge => edge.node)
    }

    return {
        ...product,
        images,
        variants,
        brand,
        brandHandle: slugify(brand),
        brandHandleFilterGlob: slugify(brand) + '-*',
        designerHandle: slugify(designer),
        designer,
    }
}

module.exports = {
    productFormatter,
} 