import React from "react";
import './Footer.css';

const Footer = () => {
    return(
        <footer className="footer-distributed">
			<div className="footer-left">
				<img
                    src="/uptownhope_logo.jpeg"
                    width="170"
                    height="100"
                    paddingLeft="1"
                    className="d-inline-block align-top"
                    alt="Uptown Hope logo"
                />
				<p className="footer-links">
					<a href="/" className="link-1">Home</a>
					<a href="/about">About</a>
					<a href="/services">Services</a>
					<a href="/employment">Employment</a>
					<a href="/faq">FAQ</a>
					<a href="/contact">Contact</a>
				</p>
				<p className="footer-company-name">© 2017 Uptown Hope. All Rights Reserved</p>
			</div>
			<div className="footer-center">
				<div>
					<i className="fa fa-map-marker"></i>
					<p><span>300 Redland Ct Suite 200</span> Owings Mills, MD 21133</p>
				</div>
				<div>
					<i className="fa fa-phone"></i>
					<p>(410) 363-9495</p>
				</div>
				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="mailto:uptownhopellc@gmail.com">uptownhopellc@gmail.com</a></p>
				</div>
			</div>
			<div className="footer-right">
				<p className="footer-company-about">
					<span>Connect with us on social media</span>
				</p>
				<div className="footer-icons">
					<a href="#"><i className="fa fa-facebook"></i></a>
					<a href="#"><i className="fa fa-twitter"></i></a>
					<a href="#"><i className="fa fa-linkedin"></i></a>
					<a href="#"><i className="fa fa-github"></i></a>
				</div>
			</div>
		</footer>
    )
}

export default Footer;