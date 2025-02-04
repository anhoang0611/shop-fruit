import React from 'react';
import Header from '../header';
import Footer from '../footer';
import Homepages from '../../homepages';
const MasterLayout = ({ children, ...props }) => {
    return (
        <div {...props}>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default MasterLayout;
