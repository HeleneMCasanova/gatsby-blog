import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
//import commentBox from 'commentbox.io';

import Layout from '../components/layout';



const BlogTemplate = (props) => {

    //const mount = commentBox('5751924808744960-proj')
    
    return (
        <Layout>
            <div style = {{marginTop:'10%'}}>
                <h1>{props.data.markdownRemark.frontmatter.title}</h1>
                <Image fluid = {props.data.markdownRemark.frontmatter.image.childImageSharp.fluid}/>
                <p>{props.data.markdownRemark.frontmatter.date}</p>

                <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
            </div>
        </Layout>
    )
}

export default BlogTemplate

export const query = graphql`
    query ($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
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
        }
        html
        }
    }
  
`