import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';

import '../css/index.scss';
import BioImage from '../images/blog.jpeg';

const SidePanel = () => {
    return (
        <div id = "aside-bio">
            <img src = {BioImage} alt = "Picture of Helene Casanova" width="100%"style = {{borderRadius:'50%'}}/>

            <div id = "aside-content">
                <h3 id = "aside-text">Helene Casanova</h3>
                <div id = "bio-container">
                    <p>writer && programmer && author</p>

                    <p>I am a programming enthusiest, a writer, an innovator and mostly a self-starter. This is my work, programming is my life and writing is my passion (a very time consuming one). Overall, I wanted a place to display what I work so hard on everyday and what I continue to work on, whether it be book I write, the programs I've written or the new hobby I've started.</p>

                    {/*<div id = "social-media-container">
                        <a href = "https://www.pinterest.com/" target="_blank"><FaPinterest className = "social-icon" id = "one-social-icon"/></a>
                        <a href = "https://github.com/HeleneMCasanova" target="_blank"><FaGithub className = "social-icon" id = "two-social-icon"/></a> 
                        <a href = "https://www.linkedin.com/in/helenecasanova/" target="_blank"><FaLinkedin className = "social-icon" id = "three-social-icon"/></a>
                        <a href = "https://twitter.com/helene_casanova" target="_blank"><FaTwitter className = "social-icon" id = "four-social-icon"/></a> 
                    </div>*/}
                </div>

            </div>
        </div>
    )
}

export default SidePanel;