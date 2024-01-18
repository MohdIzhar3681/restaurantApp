import React from 'react';
import { blog } from './Data2';

const Blog = () => {
    return (
        <>
            <section className='blog' id='blogs'>
                <h1 className='heading'>our <span>blogs</span></h1>
                <div className='box-container'>
                    {blog.map((item, index) => (


                        <div className='box'>
                            <div className='image'>
                                <img src={item.img} alt='blog-item' />
                            </div>


                            <div className='content'>
                                <a href='#' className='title'>Tasty and Refreshing Spices</a>
                                <span> by admin / 21st may, 2022</span>
                                <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Non, Dicta.</p>
                                <a href='#' className='btn'>read more</a>
                            </div>

                        </div>
                    ))}

                </div>
            </section>
        </>
    )
}

export default Blog;