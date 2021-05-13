import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Welcome</h1>
    <h2>My name is Destin and this is my blog!</h2>
    <p>Heres my info<Link to ="/contact">Click here</Link></p>
  </Layout>
)

export default IndexPage
