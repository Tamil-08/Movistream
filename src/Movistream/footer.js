import React from "react";
import './footer.css';
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const End=()=>{
    return(
        <>
         <section className="footer-section">
      <div className="footer-container">
        <div className="footer-social">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FaFacebook /></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://x.com/" target="_blank" rel="noreferrer"><FaTwitter /></a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><FaYoutube /></a>
        </div>

        <div className="footer-links">
          <ul>
            <li><a href="#">Audio and Subtitles</a></li>
            <li><a href="#">Audio Description</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Gift Cards</a></li>
          </ul>
          <ul>
            <li><a href="#">Media Center</a></li>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Terms of Use</a></li>
          </ul>
          <ul>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Legal Notices</a></li>
            <li><a href="#">Corporate Information</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <p className="footer-copy">© 2025-2027 Movistream, Inc.</p>
      </div>
    </section>
    </>
    )
}
export default End;