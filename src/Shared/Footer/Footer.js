import React from 'react';
import  './Footer.css'

const Footer = () => {
    return (
        <footer>
            <p><small><p className="copyright"> Copyright &copy; 2023-<script>document.write(new Date().getFullYear())</script> Sreekanta All Rights Reserved</p></small></p>
        </footer>
    );
};

export default Footer;