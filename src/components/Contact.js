import React from 'react';
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";


const Contact = () => {
    return (
        <>
            <section className='contact' id='contact'>
                <h1 className='heading'>contact <span>us</span></h1>
                <div className='box-container'>



                    <div className='map'>
                        <iframe

                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12158.799097832125!2d-80.24236864978037!3d40.371180891085636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834506270d3dfcd%3A0x7f628305f62002a8!2sMcDonald%2C%20PA%2015057%2C%20USA!5e0!3m2!1sen!2sin!4v1704180704710!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">

                        </iframe>

                    </div>
                    <div className='content'>
                        <form action='#'>
                            <h3>get in touch</h3>
                            <div className='input-box'><span><FaUser /></span><input type='text' placeholder='name' /></div>
                            <div className='input-box'><span><MdEmail /></span><input type='email' placeholder='email' /></div>
                            <div className='input-box'><span><FaPhone /></span><input type='number' placeholder='number' /></div>
                            <input type='submit' className='btn' id='contact-btn' value='contact now'></input>
                        </form>
                    </div>






                </div>
            </section>
        </>
    )
}

export default Contact;