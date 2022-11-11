import React from 'react'
import { Layout } from '../../../src/components/Layout/Layout'
import SEO from '@b2storefront/b2s_core/dist/components/snippets/SEO'
import { CategoryType } from '@b2storefront/b2s_core/dist/types/category'
import { getProductPath } from '@b2storefront/b2s_core/dist/utils/routing'
import { Link } from 'gatsby'
import { useCustomJavascript } from '@b2storefront/b2s_core/dist/hooks/useCustomJavascript'
import { css } from '@emotion/react'

/** 
 * @param {CategoryPageTmpl.propTypes} props
 **/
const CategoryPageTmpl = ({ category, products, productTypes, productOptions, handleFilterChange, isFilterSelected, page, pageSize, setPage, setPageSize, numberOfPages, handleSortOptionChange, filters, numberOfProducts }) => {
  useCustomJavascript(() => {

  })

  return (
    <Layout>
      <SEO
        title={category.seo.title}
        description={category.seo.description}
      />
      <main className="main">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item breadcrumb-item--home">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page" css={css`background-color: #000;font-size: 18px;`}>
                {category.title}
              </li>
            </ol>
          </nav>
          <div className="row">
            <aside className="filter col-12 col-md-4 col-lg-3">
              <div className="filter__head">
                <div className="filter__head--title">Filters</div>
                <div className="filter__filter-btn">
                  <span className="" open="" onclick="toggleFilters()">
                    <img src="/images/close.svg" alt="filters" />
                  </span>
                </div>
              </div>
              <div className="filter__item">
                <div className="filter__item--head">
                  <a
                    className="filter__item--title"
                    data-bs-toggle="collapse"
                    href="#collapseFilter-1"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseFilter-1"
                  >
                    <span>Product type</span>
                  </a>
                </div>
                <div className="filter__item--content collapse show">
                  <div className="check-block">
                    {productTypes.map(productType => (
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          onClick={() => handleFilterChange('product_type', productType)}
                          checked={isFilterSelected('product_type', productType)}
                          id={`product-type-${productType}`}
                        />
                        <label className="form-check-label" htmlFor={`product-type-${productType}`}>
                          {productType}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="filter__item">
                <div className="filter__item--head">
                  <a
                    className="filter__item--title"
                    data-bs-toggle="collapse"
                    href="#collapseFilter-1"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseFilter-1"
                  >
                    <span>Price</span>
                  </a>
                </div>
                <div className="filter__item--content collapse show">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="price-from">
                      From
                    </label>
                    <input
                      className="form-control"
                      onChange={(e) => handleFilterChange('price_from', e.target.value, true)}
                      id="price-from"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="price-to">
                      To
                    </label>
                    <input
                      className="form-control"
                      onChange={(e) => handleFilterChange('price_to', e.target.value, true)}
                      id="price-to"
                    />
                  </div>
                </div>
              </div>
              {productOptions.map(productOption => (
                <div className="filter__item">
                  <div className="filter__item--head">
                    <a
                      className="filter__item--title"
                      data-bs-toggle="collapse"
                      href="#collapseFilter-1"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseFilter-1"
                    >
                      <span>{productOption.name}</span>
                    </a>
                  </div>
                  <div className="filter__item--content collapse show">
                    <div className="check-block">
                      {productOption.values.map(value => (
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            onClick={() => handleFilterChange(productOption.name, value)}
                            checked={isFilterSelected(productOption.name, value)}
                            id={`${productOption.name}-${value}`}
                          />
                          <label className="form-check-label" htmlFor="flexCheck-1">
                            {value}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </aside>
            <div className="col-12 col-md-8 col-lg-9">
              <div className="categories__head">
                <h1 className="categories__name">
                  {category.title} <span>({numberOfProducts})</span>
                </h1>
                <div className="categories__sort">
                  <div className="categories__sort--title">Show products:</div>
                  <select className="form-select" defaultValue={pageSize} onChange={(e) => setPageSize(e.target.value)}>
                    <option value="9">9</option>
                    <option value="30">30</option>
                    <option value="60">60</option>
                    <option value="120">120</option>
                  </select>
                  <div className="categories__sort--title">Sort:</div>
                  <select className="form-select" onChange={(e) => handleSortOptionChange(e.target.value)}>
                    <option selected="" value="best-selling">Best Selling</option>
                    <option value="price-asc">Price (Low to High)</option>
                    <option value="price-desc">Price (High to Low)</option>
                    <option value="name-asc">Name (A-Z)</option>
                    <option value="name-desc">Name (Z-A)</option>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                  </select>
                </div>
                <div className="categories__filter-btn">
                  <span className="open" onclick="toggleFilters()">
                    <img src="/images/filters.svg" alt="filters" />
                  </span>
                </div>
              </div>
              <div className="categories__list">
                {products.map((product) => (
                  <div className="product__item" key={product.id}>
                    <div className="product__item--image">
                      <Link href={getProductPath(product.slug)}>
                        <img
                          src={product.featured_image.url}
                          data-src={product.featured_image.url}
                          className="lazy"
                          alt={product.title}
                          width={272}
                          height={385}
                        />
                      </Link>
                      {!!product.prices.old_min && (
                        <span className="badge badge-sale">Sale</span>
                      )}
                    </div>
                    <div className="product__item--name">
                      <a href="#">{product.title}</a>
                    </div>
                    <div className="product__item--price">
                      <span className="new-price">${product.prices.min}</span>
                      {!!product.prices.old_min && (
                        <span className="old-price">${product.prices.old_min}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="categories__pagination">
                <ul className="pagination">
                  <li className="page-item page-prev">
                    {page > 1 && (
                      <a className="page-link" href="#" onClick={() => setPage(page - 1)}>
                        Previous
                      </a>
                    )}
                  </li>
                  {[...Array(numberOfPages).fill(0)].map((_, i) => (
                    <li className={`page-item ${(i + 1) === page && 'active'}`} aria-current="page">
                      <a className="page-link" href="#" onClick={() => setPage(i + 1)}>
                        {i + 1}
                      </a>
                    </li>
                  ))}
                  <li className="page-item page-next">
                    {page < numberOfPages && (
                      <a className="page-link" href="#" onClick={() => setPage(page + 1)}>
                        Next
                      </a>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="sibscribe">
            <div className="row">
              <div className="col-12 col-lg-5 sibscribe__desc">
                Subscribe to our newsletter and receive exclusive offers every week
              </div>
              <div className="col-12 col-lg-5 sibscribe__form">
                <form className="row">
                  <div className="col-12 col-md-4 col-lg">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="col-12 col-md-4 col-lg">
                    <button type="submit" className="btn btn-primary">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export const CategoryHeadScripts = ({ product }) => (
  <>
    <link rel="stylesheet" href="/js/bootstrap-slider/bootstrap-slider.min.css" />
    <script src="/js/bootstrap-slider/bootstrap-slider.min.js"></script>
  </>
)

CategoryPageTmpl.propTypes = {
  category: CategoryType,
}

export default CategoryPageTmpl
