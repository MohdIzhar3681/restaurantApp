import React from 'react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { products } from './Data2';

const Product = () => {
    return (
        <>
            <section className='products' id='products'>
                <h1 className='heading'>our <span>products</span></h1>
                <div className='box-container'>
                    {products.map((item, index) => (
                        <div className='box'>
                            <div className='icons'>
                                <a href='#'><FaCartShopping /></a>
                                <a href='#'><FaHeart /></a>
                                <a href='#'><FaEye /></a>

                            </div>
                            <img src={item.img} alt='product-item' />
                            <h3>{item.h3}</h3>
                            <div className='stars'>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalfAlt /></i>
                            </div>
                            <div className='price'>
                                ${item.price} <span> {item.discount}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Product;