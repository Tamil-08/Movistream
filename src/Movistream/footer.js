import React from "react";
import './footer.css';
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const End=()=>{
    return(
        <>
         <section class="link">
 
  
      <div class="sub-links">

       
    
       
        <ul>
           <a href="https://www.facebook.com/"><i class="icon"><FaFacebook/></i></a>
        <a href="https://www.instagram.com/"><i class="icon"><FaInstagram/></i></a>
        <a href="https://x.com/"><i class="icon"><FaTwitter/></i></a>
        <a href="https://www.youtube.com/"><i class="icon"><FaYoutube/></i></a> 
          <li><a href="#">Audio and Subtitles</a></li>
          <li><a href="#">Audio Description</a></li>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">Gift Cards</a></li>
         
           <li><a href="#">Media Center</a></li>
          <li><a href="#">Investor Relations</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Legal Notices</a></li>
          <li><a href="#">Corporate Information</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div> 
    </section>
    <footer>
      <p>©Copyright 2025-2027 Movistream, Inc.</p>
   
    </footer>
        </>
    )
}
export default End;