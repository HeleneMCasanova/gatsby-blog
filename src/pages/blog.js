import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

import Layout from '../components/layout';
import '../css/blog.scss';


const Blog = () => {

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

    const programmingPosts  = []

    return (

        <Layout>
                 
        <div id = "blog-container">
            <h2 id = "blog-page-title">Recent Blog Posts</h2>
            <div id = "blog-page-container">  
                    <ul>
                        {data.allMarkdownRemark.nodes.map((node) => {
                            return (
                                <li className="blog-posts">
                                    <Image fluid = {node.frontmatter.image.childImageSharp.fluid}/>
                                    <h3><Link to = {`/blog/${node.fields.slug}`}>{node.frontmatter.title}</Link></h3>
                                    <p className="blog-over-date">{node.frontmatter.date}</p>
                                    <p>{node.excerpt}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </Layout>
    );
}

export default Blog;