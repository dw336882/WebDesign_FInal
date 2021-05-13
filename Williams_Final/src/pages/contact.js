import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => {
    return (
        <Layout>
            <SEO Title="Contact" />
            <h1>Contact</h1>
            <h1>this page is the contact page</h1>
            <Link to="/">Go Home</Link>
        </Layout>
    )
}

export default Contact