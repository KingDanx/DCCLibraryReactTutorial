import React, { Component } from 'react';
import "./Footer";

const Footer = (props) => {
    return ( 
        <div className="footer">©{props.year} {props.siteName}</div>
     );
}
 
export default Footer;