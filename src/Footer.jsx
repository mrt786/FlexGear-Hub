import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'
<style>

</style>
export default function Footer() {
  return (
    <footer className='bg-slate-950 p-10'>
        <div className=''>
            <div className='flex items-center  justify-center' >
                <a href="https://www.facebook.com/">
                    <FontAwesomeIcon icon = {faFacebook} size='2x' color='white'  className='mr-5'/>
                </a>
                <a href="https://www.twitter.com/">
                    <FontAwesomeIcon icon = {faTwitter}   size='2x' color='white' className='mr-5'/>
                </a>
                <a href="https://www.instagram.com/">
                    <FontAwesomeIcon icon = {faInstagram} size='2x' color='white' className='mr-5'/>
                </a>
                <a href="https://www.linkedin.com/">
                    <FontAwesomeIcon icon = {faLinkedin}  size='2x' color='white' className='mr-5'/>
                </a>
            </div>
            <div className='flex items-center justify-center'>
                <h1 className='mt-5 text-center text-slate-300  text-xl'>All Rights Preserved</h1>

            </div>
        </div>
    </footer>
  )
}
