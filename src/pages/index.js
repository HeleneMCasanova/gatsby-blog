import React from "react";
import { Link, graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
//custom components
import Layout from "../components/layout";
import '../css/index.scss';
//import 'bootstrap/dist/css/bootstrap.min.css';


const Index = () => {
    
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark (sort: { fields: [frontmatter___date], order: DESC }) {
                nodes {
                    frontmatter {
                        title
                        date
                        image {
                            childImageSharp {
                                fluid {
                                    ...GatsbyImageSharpFluid_noBase64
                                }
                            }
                        }
                        tags
                    }
                    excerpt
                    fields {
                        slug
                    }
                }
            
            }
        }
    `)
    
    return (
        <Layout> 
           

            <ul>
                {data.allMarkdownRemark.nodes.map((node) => {
                    console.log(node.frontmatter.date)
                    return (
                        <div className = "featured-blog-section ">
                            <li>
                                <Image fluid = {node.frontmatter.image.childImageSharp.fluid}/>
                                <h3><Link to = {`/blog/${node.fields.slug}`}>{node.frontmatter.title}</Link></h3>
                                <p className="blog-over-date">{node.frontmatter.date}</p>
                                <p>{node.excerpt}</p>

                                <p style = {{textAlign:"right", textDecoration:"underline"}}><Link to = {`/blog/${node.fields.slug}`}>Read More...</Link></p>
                            </li>
                        </div>
                            )
                        })}
            </ul>

            
        </Layout>
    );
}
 
export default Index;