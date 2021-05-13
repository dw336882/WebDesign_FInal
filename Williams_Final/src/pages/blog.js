import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import SEO from "../components/seo"
import { useAuth0} from "@auth0/auth0-react"

const Blog = () => {

    const {isAuthenticated, loginWithRedirect, logout, user} = useAuth0()
    
    const data = useStaticQuery(graphql`
    {
      allContentfulBlogPost {
        edges {
          node {
            author
            publishDate(fromNow: true)
            slug
            title
            body{
                raw
            }
          }
        }
      }
    }
  `)
    return(
        <Layout>
            {
                !isAuthenticated && (
                    <button onClick={()=>loginWithRedirect()}>Log in</button>
                )
            }
            {
                isAuthenticated && (
                    <div>
                        <SEO title="Blog"/>
            <h1>Blog</h1>
            <div>
                {
                    data.allContentfulBlogPost.edges.map((post,i)=>{
                        return(
                            <div key={i}>
                                <h2>{post.node.title}</h2>
                                <p>{post.node.body.raw}</p>
                                <p style={{fontWeight: 200, fontsize: ".8rem"}}>Published{post.node.publishDate}</p>
                                <p style={{fontWeight: 300, fontsize:".9rem"}}>Written by {post.node.author}</p>
                                <Link to={`/blog/${post.node.slug}`}>Read More...</Link>
                                <hr style={{height: "3px"}}/>
                            </div>
                        )
                    })
                }
            </div>
            <button onClick={()=>logout()}>Sign-out</button>
                    </div>
                    
                )
            }
            
        </Layout>
    )

}

export default Blog