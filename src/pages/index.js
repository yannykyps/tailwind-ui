import * as React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import Feature from "../components/Feature"
import Cta from "../components/cta"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Feature />
    <Cta />
  </Layout>
)

export default IndexPage
