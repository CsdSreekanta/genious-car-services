import React from 'react';
import  './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='m-5'>
            <p><small><p className="copyright"> Copyright &copy; {year}- Sreekanta All Rights Reserved</p></small></p>
        </footer>
    );
};

export default Footer;