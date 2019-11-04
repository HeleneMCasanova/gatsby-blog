import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import '../css/navigation.scss';

const Header = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    author
                }
            }
        }
    `)

    return(
        <nav>
            <div>

                <div id = "nav-bar-holder"> 

                    <div id = "nav-list">  
                        <ul id = "list-styles">  
                            <li><Link exact to = {'/'} className = "nav-link-styles" activeClassName = "active">Home</Link></li>
                            
                            <li><Link to = {'/about'} className = "nav-link-styles" activeClassName = "active">About</Link></li>

                            <li><Link to = {'/programming'} className = "nav-link-styles" activeClassName = "active">Programming</Link></li>

                            <li><Link to = {'/videos'} className = "nav-link-styles" activeClassName = "active">Videos</Link></li>

                            <li><Link to = {'/contact'} className = "nav-link-styles" activeClassName = "active">Contact</Link></li>

                        </ul>
                    </div>
                </div>
            </div>

        </nav>

    );   
}

export default Header;