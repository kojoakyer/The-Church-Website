import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Button from './Button'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
                Subscribe to be updated on all church activities, the Lord bless you.
            </p>
            <p className="footer-subscription-text">
                You can unsubscribe at any time
            </p>
            <div className="input-areas">
                <form action="">
                    <input type="email" name='email' className="footer-input" />
                    <Button buttonStyle='btn--outline'>subscribe</Button>
                </form>
            </div>

        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-item">
                    <h2>About Us</h2>
                    <Link to='/'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Carrers</Link>
                    <Link to='/'>Investor </Link>
                    <Link to='/'>Terms of service</Link>
                </div>
                <div className="footer-link-item">
                    <h2>Contact Us</h2>
                    <Link to='/'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Carrers</Link>
                    <Link to='/'>Investor </Link>
                    <Link to='/'>Terms of service</Link>
                </div>
            </div>
            <div className="footer-link-wrapper">
                <div className="footer-link-item">
                    <h2>Videos</h2>
                    <Link to='/'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Carrers</Link>
                    <Link to='/'>Investor </Link>
                    <Link to='/'>Terms of service</Link>
                </div>
                <div className="footer-link-item">
                    <h2>Social Media</h2>
                    <Link to='/'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Carrers</Link>
                    <Link to='/'>Investor </Link>
                    <Link to='/'>Terms of service</Link>
                </div>
            </div>
        </div>
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link className="social-logo">
                    <img src="images/TCIT Website logo-1.png" id='logo' alt="" className='photo' />
                    </Link>
                </div>
                <small className="website-rights">
                © 2021 TCIT | All right reserved.
                </small>
                <div className="social-icons">
                    <Link className="social-icon-link">
                        <i className="fab fa-facebook-f"/>
                    </Link>
                    <Link className="social-icon-link">
                        <i className="fab fa-twitter"/>
                    </Link>
                    <Link className="social-icon-link">
                        <i className="fab fa-instagram"/>
                    </Link>
                    <Link className="social-icon-link">
                        <i className="fab fa-youtube"/>
                    </Link>                    
                    <Link className="social-icon-link">
                        <i className="fab fa-linkedin"/>
                    </Link>
                </div>
            </div>
        </section>
      
    </div>
  )
}

export default Footer
