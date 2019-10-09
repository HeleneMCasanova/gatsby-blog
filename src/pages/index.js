import React from "react";
import Typist from 'react-typist';
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
            <div id = "home-container">
                <div id = "left-home-container">
                    <h3 id = "home-page-title">writer && programmer && author</h3>  

                    <p>Every day is an opportunity to create something new whether it be a story I create, a new website design, a new bullet journal spread I want to try out, or a new learning venture, I love spending everyday learning. This is what Traveling Programmer is all about.</p>

                    <p>Here, I blog about what I've learned so, you can learn from my mistakes and expand them into newer (and possibly better) ideas. I blog about bullet journaling because that is how I stay on task every day and I want others to know that not everyone works in the same way so, I want to encourage others to try and experience different methods of organization. I blog about writing because it's my side passion and while I'll never be JK Rowlings, I hope that someday, somebody will enjoy the words I have written.</p>
                    
                    <p>Let's enjoy this journey together, wherever it leads us.</p>
                </div>

                <div id = "right-home-container">

                    <div id = "home-inside-container">
                        <span>C:\Users\Helene\Traveling-Programmer></span>
                        <br />
                        <Typist avgTypingDelay={60} cursor = {{blink: true, element: '|', hideWhenDone: true}}>

                            <span> ./blogging.exe</span>
                            <Typist.Delay ms={1000} />
                            <br></br>
                            <br></br>

                            <span  style = {{color:"#20C20E"}}>Programmer</span>
                            <Typist.Delay ms={1000} />
                            <br></br>
                            <br></br>

                            <span  style = {{color:"#20C20E"}}>Writer</span>
                            <Typist.Delay ms={1000} />
                            <br></br>
                            <br></br>

                            <span  style = {{color:"#20C20E"}}>Novelist</span>
                            <Typist.Delay ms={1000} />
                            <br></br>
                            <br></br>

                            <span  style = {{color:"#20C20E"}}>Blogger</span>
                            <br></br>
                            <br></br>
                            
                            <span>Program Loaded</span>
                            <Typist.Delay ms={1000} />.
                            <Typist.Delay ms={1000} />.
                            <Typist.Delay ms={1000} />.
                            <br /> <br />
                            <Typist.Delay ms={1000} />
                            <span>C:\Users\Helene\Traveling-Programmer></span>
                        </Typist>
                    </div>
                    
                </div>

            </div>

            <div id = "featured-blog-section">
                <h2 id = "featured-blog-title">Featured Blog Post</h2>

                <div className = "blog-posts-home-page">
                    <Image fluid = {data.allMarkdownRemark.nodes[0].frontmatter.image.childImageSharp.fluid} />
                    <h3><Link to = {`/blog/${data.allMarkdownRemark.nodes[0].fields.slug}`}>{data.allMarkdownRemark.nodes[0].frontmatter.title}</Link></h3>
                    <p className="blog-over-date">{data.allMarkdownRemark.nodes[0].frontmatter.date}</p>
                    <p>{data.allMarkdownRemark.nodes[0].excerpt}</p>
                    <p style = {{textAlign:"right", textDecoration:"underline"}}><Link to = {`/blog/${data.allMarkdownRemark.nodes[0].fields.slug}`}>Read More...</Link></p>
                  
                </div>
            </div>

        </Layout>
    );
}
 
export default Index;