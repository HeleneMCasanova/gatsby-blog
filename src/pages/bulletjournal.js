import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

import Layout from '../components/layout';


const BulletJournal = () => {
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
                <h2 id = "blog-page-title">Recent Bullet Journaling Blog Posts</h2>
                    <div id = "blog-buju-container"> 
                        
                            <ul>
                                {data.allMarkdownRemark.nodes.map((node) => {

                                    if(node.frontmatter.tags == "bullet journaling") {
                                        
                                        return (
                                            <li className="blog-posts">
                                                <Image fluid = {node.frontmatter.image.childImageSharp.fluid}/>
                                                <h3><Link to = {`/blog/${node.fields.slug}`}>{node.frontmatter.title}</Link></h3>
                                                <p className="blog-over-date">{node.frontmatter.date}</p>
                                                <p>{node.excerpt}</p>
                                                <p style = {{textAlign:"right", textDecoration:"underline"}}><Link to = {`/blog/${node.fields.slug}`}>Read More...</Link></p>
                                            </li>
                                        )
                                    }
                                    
                                })}
                            </ul>
                    
                    </div>

            </div>

        </Layout>
    );
}

export default BulletJournal;