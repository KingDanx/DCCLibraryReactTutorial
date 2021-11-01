import React from 'react';
import "./Footer.css";

const Footer = (props) => {
    return ( 
        <h4 className="footer">CopyRight ©{props.year} {props.siteName}</h4>
     );
}
 
export default Footer;