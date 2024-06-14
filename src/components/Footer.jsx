import React from 'react'
import './Home.css'
import InstagramLogo from '../images/instagram.png'
import LinkedInLogo from '../images/linkedin.svg'
import FaceBookLogo from '../images/facebook.svg'
import TwitterLogo from '../images/twitter.svg'
import YoutubeLogo from '../images/youtube.svg'
import QuoraLogo from '../images/pinterest.svg'
import Clock from '../images/clock.svg'
import Train from '../images/train.png'
import Location from '../images/location.png'

const Footer = () => {
    return (
        <div>
            <div className='footer-body'>
                <div className="info-itm" style={{ paddingLeft: "29px" }}>
                    <h1>Contact Us</h1>
                    <br />
                    <p>Address: Lorem ipsum dolor sit amet sfwjnf fnwebfb.</p>
                    <p>Email Id: Lorem ipsum dolor sit amet sfwjnf fnwebfb.</p>
                    <p>Phone No: 123456789</p>
                </div>
                <div className="info-itm" style={{ textAlign: "center" }}>
                    <h1>Follow Us</h1>
                    <div className="scl-md-container">
                        <a href='/'><img className='scl-md-icons' src={FaceBookLogo} /></a>
                        <a href='/'><img className='scl-md-icons' src={LinkedInLogo} /></a>
                        <a href='/'><img className='scl-md-icons' src={InstagramLogo} /></a>
                        <a href='/'><img className='scl-md-icons' src={TwitterLogo} /></a>
                        <a href='/'><img className='scl-md-icons' src={YoutubeLogo} /></a>
                        <a href='/'><img className='scl-md-icons' src={QuoraLogo} /></a>
                    </div>

                </div>
                <div className="info-itm">
                    <h1>Head Office</h1>
                    <br />
                    <div className='cmp-info'>
                        <div className="info-icon">
                            <img className='scl-md-icons1' src={Location} />
                        </div>
                        <div className="info-detail">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae quod aliquid praesentium iusto libero! Sit.</p>
                        </div>
                    </div>
                    <div className='cmp-info'>
                        <div className="info-icon">
                            <img className='scl-md-icons1' src={Clock} />
                        </div>
                        <div className="info-detail">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae quod aliquid praesentium iusto libero! Sit.</p>
                        </div>
                    </div>
                    <div className='cmp-info'>
                        <div className="info-icon">
                            <img className='scl-md-icons1' src={Clock} />
                        </div>
                        <div className="info-detail">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae quod aliquid praesentium iusto libero! Sit.</p>
                        </div>
                    </div>
                    <div className='cmp-info'>
                        <div className="info-icon">
                            <img className='scl-md-icons1' src={Train} />
                        </div>
                        <div className="info-detail">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ipsum.</p>
                        </div>
                    </div>





                </div>

            </div>
            <div className='copyright'>
                <h5>C 2021 All Rights Reserved. Privacy Policy</h5>
            </div>
        </div>
    )
}

export default Footer