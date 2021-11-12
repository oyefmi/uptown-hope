import React from "react";
import './Footer.css';
import  { SocialMediaIconsReact } from 'social-media-icons-react';

const Footer = () => {
    return(
        <footer className="footer-distributed">
			<div className="footer-left">
				<img
                    src="../images/uptownhope_logo.jpeg"
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
					<a href="/contact">Contact</a>
					<a href="/faq">FAQ</a>
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
					<p><a href="mailto:info.uptownhope@gmail.com">info.uptownhope@gmail.com</a></p>
				</div>
			</div>
			<div className="footer-right">
				<p className="footer-company-about">
					<span>Connect with us on social media</span>
				</p>
				<div className="footer-icons">
					<div className="social-icons">
						<SocialMediaIconsReact 
							borderColor="rgba(0,0,0,0.25)" 
							borderWidth="4" 
							borderStyle="double" 
							icon="facebook" 
							iconColor="rgba(255,255,255,1)" 
							backgroundColor="rgba(24,119,242,1)" 
							url="#" 
							size="40"
						/>
					</div>
					<div className="social-icons">
						<SocialMediaIconsReact 
							borderColor="rgba(0,0,0,0.25)" 
							borderWidth="4" 
							borderStyle="double" 
							icon="twitter" 
							iconColor="rgba(255,255,255,1)" 
							backgroundColor="rgba(26,166,233,1)" 
							url="#" 
							size="40" 
						/>
					</div>
					<div className="social-icons">
						<SocialMediaIconsReact 
							borderColor="rgba(14,11,120,0.38)" 
							borderWidth="4" 
							borderStyle="double" 
							icon="instagram" 
							iconColor="rgba(255,255,255,1)" 
							backgroundColor="rgba(193,48,208,0.33)" 
							url="" 
							size="40" 
						/>
					</div>
					<div className="social-icons">
						<SocialMediaIconsReact 
							borderColor="rgba(0,0,0,0.25)" 
							borderWidth="4" 
							borderStyle="double" 
							icon="linkedin" 
							iconColor="rgba(255,255,255,1)" 
							backgroundColor="rgba(10,102,194,1)" 
							url="#" 
							size="40" 
						/>
					</div>
					
					
					
					
				</div>
			</div>
		</footer>
    )
}

export default Footer;