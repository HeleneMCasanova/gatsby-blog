import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import logo from '../images/3.png';
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
                    <div id = "nav-list-left">
                        {/*<p id = "site-title"><Link id = "nav-link-style-title" to = {'/'}>{data.site.siteMetadata.title}</Link></p>*/}
                        <Link id = "nav-link-style-title" to = {'/'}><img src = {logo} style = {{width:"20%", height:'10%;'}}/></Link>
                    </div>

                    <div id = "nav-list-right">  
                        <ul id = "list-styles">  
                            <li><Link exact to = {'/'} className = "nav-link-styles" activeClassName = "active">Home</Link></li>
                            
                            <li><Link to = {'/blog'} className = "nav-link-styles" activeClassName = "active">Blog</Link></li>

                            <li><Link to = {'/programming'} className = "nav-link-styles" activeClassName = "active">Programming</Link></li>

                            <li><Link to = {'/bulletjournal'} className = "nav-link-styles" activeClassName = "active">Bullet Journaling</Link></li>
                            
                            <li><Link to = {'/polariod'} className = "nav-link-styles" activeClassName = "active">Polariods</Link></li>

                            <li><Link to = {'/contact'} className = "nav-link-styles" activeClassName = "active">Contact</Link></li>

                        </ul>
                    </div>
                </div>
            </div>

        </nav>

    );   
}

export default Header;