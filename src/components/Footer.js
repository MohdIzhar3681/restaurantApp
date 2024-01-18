import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <section className='footer'>
                <div className='share'>
                    <a href='#'><FaFacebookF /></a>
                    <a href='#'><FaTwitter /></a>
                    <a href='#'><FaInstagram /></a>
                    <a href='#'><FaLinkedin /></a>
                    <a href='#'><FaPinterest /></a>
                </div>
                <div className='links'>
                    <a href='#'>home</a>
                    <a href='#about'>about</a>
                    <a href='#'>menu</a>
                    <a href='#'>products</a>
                    <a href='#'>review</a>
                    <a href='#'>contact</a>
                    <a href='#'>blogs</a>
                </div>
                <div className='credit'> 
                <p>created by <span>mohd izhar</span> | all rights reserved</p>
                </div>
            </section>
        </>
    )
}

export default Footer;