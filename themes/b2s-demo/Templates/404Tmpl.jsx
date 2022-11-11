import SEO from '@b2storefront/b2s_core/dist/components/snippets/SEO'
import React from 'react'
import { Layout } from '../../../src/components/Layout/Layout'

const Page404Tmpl = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="section section-404">
      <div className="container pt-5 pb-5 mt-5 mb-5">
        <h3 className="text-center mt-5 pt-5">Page Not Found</h3>
        <p className="text-center mb-5 pb-5">
          The page you are looking for is not found.
        </p>
      </div>
    </section>
  </Layout>
)

export default Page404Tmpl
