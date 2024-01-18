import React from 'react';
import { review } from './Data2';
import quoteImage1 from '../assets/images/review-coma.png';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Review = () => {
    return (
        <>
            <section className='review' id='review'>
                <h1 className='heading'>customer <span>review</span> </h1>
                <div className='box-container'>
                    {review.map((item, index) => (
                        <div className='box'>
                            <img src={quoteImage1} alt='quote-img' />
                            <p>Lorem Ipsum Dolor Sit Amet Consectetur
                                Adipisicing Elit. Animi Nulla Sit Libero Nemo Fuga
                                Sequi Nobis? Necessitatibus Aut Laborum, Nisi
                                Quas Eaque Laudantium Consequuntur Iste Ex
                                Aliquam Minus Vel? Nemo.</p>
                            <img src={item.img} alt='review-customer' className='users'/>
                            <h3>John Deo</h3>
                            <div className='stars'>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalfAlt /></i>
                            </div>
                        </div>
                    ))}

                </div>


            </section>
        </>
    )
}

export default Review;