import React from 'react'
import facebook from "../img/social_media/facebook.svg"
import instagram from "../img/social_media/instagram.svg"
import pinterest from "../img/social_media/pinterest.svg"
import twitter from "../img/social_media/twitter.svg"
import logo from "../img/icons/logo.svg"

export default function Footer() {
    return (
        <div className="footer-page" id="footer-page">

            <div className="footer-page__contactus">
                <h4 className="caption__roboto">Contact us</h4>
                <ul className="">
                    <li className="text"><strong>Email</strong><p>needhelp@Organia.com</p></li>
                    <li className="text"><strong>Phone</strong><p>666 888 888</p></li>
                    <li className="text"><strong>Address</strong><p>88 road, borklyn street, USA</p></li>
                </ul>
            </div>

            <div className="footer-page__company">
                <div className='footer-page__logo'>
                    <img className="logo__img" src={logo} alt="Organick" />
                    <a className='caption__roboto'>Organick</a>
                </div>
                <p className="text">Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum simply dummy text of the printing </p>
                <div className="footer-page__social-media">
                    <div className='social-media-bg' ><img className="social-media-logo" src={facebook}
                        alt="facebook" /></div>
                    <div className='social-media-bg' ><img className="social-media-logo" src={twitter}
                        alt="twitter" /></div>
                    <div className='social-media-bg' ><img className="social-media-logo" src={instagram}
                        alt="instagram" /></div>
                    <div className='social-media-bg' ><img className="social-media-logo" src={pinterest}
                        alt="pinterest" /></div>
                </div>
            </div>

            <div className="footer-page__quick-links">
                <h4 className="caption__roboto">Utility Pages</h4>
                <ul className="footer-page__quick-links__menu">
                    <li className="text"><a href="/">Style Guide</a></li>
                    <li className="text"><a href="/">404 Not Found</a></li>
                    <li className="text"><a href="/">Password Protected</a></li>
                    <li className="text"><a href="/">Licences</a></li>
                    <li className="text"><a href="/">Changelog</a></li>
                </ul>
            </div>
        </div>
    );
}
