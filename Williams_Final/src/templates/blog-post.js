import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { documentToReactComponents} from "@contentful/rich-text-react-renderer"
import {INLINES, BLOCKS} from "@contentful/rich-text-types"

export const data = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug}) {
            author
            publishDate(fromNow: true)
            slug
            title
            body {
                raw
            }
        }
    }
`

const BlogPost = (props) => {
    const options ={
        renderNode: {
            [INLINES.HYPERLINK]: (node)=>{
                if(node.data.uri.includes("youtube")){
                    var url = node.dta.uri.replace("watch?v=","embed/")
                    return <iframe title={node.title} width="560" height="315"src={url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                }
            },
            [BLOCKS.EMBEDDED_ASSET]: (node)=>{
                const alt = node.data.target.fields.title["en-US"]
                const url = node.data.target.fields.file["en-US"].url
                return <img src={url} alt={alt}/>
            }
        }
    }
    return(
        <Layout>
            <div>
                <h2>{props.data.conentfulBlogPost.title}</h2>
                <p style={{fontWeight: 200, fontSize:".8rem"}}>Published{props.data.contentfulBlogPost.publishDate}</p>
                <p style={{fontWeight: 300, fontSize:".9rem"}}>Written by {props.data.contentfulBlogPost.author}</p>

                {
                    documentToReactComponents(props.data.contentfulBlogPost.body,options)
                }
                <Link to="/blog">back to blog</Link>
            </div>
        </Layout>
    )
}
export default BlogPost