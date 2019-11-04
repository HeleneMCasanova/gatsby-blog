import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

import Layout from '../components/layout';
import '../css/blog.scss';


const Videos = () => {

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
                 
            <div id = "blog-container">
                        
                <ul>
                {data.allMarkdownRemark.nodes.map((node) => {

                    let curTag = node.frontmatter.tags[0];
                    if(curTag == 'videos') {
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
                    }
                })}
                </ul>

            </div>
        </Layout>
    );
}

export default Videos;