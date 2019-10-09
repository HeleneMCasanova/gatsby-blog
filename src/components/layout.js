import React from 'react';

import Header from './header';
import Footer from './footer';
import SidePanel from './sidepanel';

import '../css/index.scss';

const Layout = (props) => {
    return(
    <div> 
        <div id = "layout-container">
            <Header />
            <div id = "main-body-content">
                <div id = "left-side-content">
                    {props.children}
                </div>
                <aside>
                    <SidePanel />
                </aside>
            </div>
        </div>
        <Footer />
    </div>
    );
}

export default Layout;