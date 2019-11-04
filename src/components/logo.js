import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import '../css/navigation.scss';

const Logo = () => {
    return (
        <div id = "logo-container">
            <h1 id = "top-logo">Traveling Programmer</h1>
            <p>Learning something new one blog post at a time</p>
        </div>
    );
}

export default Logo;