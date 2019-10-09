import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

import Layout from '../components/layout';
import '../css/images.scss';

const Polariods = () => {
    const data = useStaticQuery(graphql`
    query {
        allFile( filter: {extension: {eq: "jpg"}}){
          edges {
            node {
              name
              childImageSharp {
                fluid(maxWidth: 900) {
                  
                    ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
    `)
    
   
    return(
        <Layout>
            <div id = "polariod-container">
                {data.allFile.edges.map((node) =>{
                    const num = node.node.name
                    if(!isNaN(num)) {
                        const dirName = node.node.childImageSharp.fluid
                        return (
                            <div key = {num} >
                                <Image fluid = {dirName} className = "indiv-polariod-container"/>
                            </div>
                        )
                    }
                })}
            </div>
            
        </Layout>
    );
}

export default Polariods;