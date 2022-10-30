import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className='footer'>
         <div className='footer-ol'>
                    <h4>follow us</h4>
                    <div className='social-links'>
                        <a href='index.html'><i className='fab fa-facebook'></i></a>
                        <a href='index.html'><i className='fab fa-twitter'></i></a>
                        <a href='index.html'><i className='fab fa-instagram'></i></a>
                        <a href='index.html'><i className='fab fa-linkedin-in'></i></a>
                    </div>
                </div>
    </footer>
  )
}

export default Footer