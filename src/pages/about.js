import React from "react";
import { Link, graphql, useStaticQuery } from 'gatsby';
import Typist from 'react-typist';
import Image from 'gatsby-image';

//custom components
import Layout from "../components/layout";
import '../css/about.scss';

//images
import img0 from '../images/img0.jpg';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';


const About = () => {
    return (
        <Layout>
            <div id = "about-me-container">
            <div id = "blog-container">
                <div id = "left-home-container">
                    <h3 id = "blog-page-title">writer && programmer && author</h3>  

                    <p>Every day is an opportunity to create something new whether it be a story I create, a new website design, a new bullet journal spread I want to try out, or a new learning venture, I love spending everyday learning. This is what Traveling Programmer is all about.</p>

                    <p>Here, I blog about what I've learned so, you can learn from my mistakes and expand them into newer (and possibly better) ideas. I blog about bullet journaling because that is how I stay on task every day and I want others to know that not everyone works in the same way so, I want to encourage others to try and experience different methods of organization. I blog about writing because it's my side passion and while I'll never be JK Rowlings, I hope that someday, somebody will enjoy the words I have written.</p>
                    
                    <p>Let's enjoy this journey together, wherever it leads us.</p>
                </div>
                <div className = "picture-container">
                    <img src = {img0} alt = "Picture of Helene Casanova" width="100%"/>
                </div>

                <div className = "picture-container">
                    <img src = {img1} alt = "Picture of Helene Casanova" width="100%"/>
                </div>

                <div className = "picture-container">
                    <img src = {img2} alt = "Picture of Helene Casanova" width="100%"/>
                </div>


            </div>
            </div>
        </Layout>
    )

}


export default About;