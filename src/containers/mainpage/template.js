import React, { Component } from 'react';
import { MainHeader } from './mainheader';
import Quote from './quote';
import HowItWorks from './howitworks';
import Teachers from './teachers';
import Footer from './footer';



class PageTemplate extends Component {
    render() {
        return <div className="template">
            <MainHeader/>
            <Quote />
            <HowItWorks />
            <Teachers />
            <Footer />
        </div>
    }
}

export default PageTemplate;