import React, { useEffect, useRef, useState } from 'react'
// import { NavLink } from 'react-router-dom';
import { FiSearch } from "react-icons/fi";
import { FaCartShopping, FaTrashArrowUp } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import logo from '../assets/images/logo.png';
import CartContainer from './CartContainer';

const Navbar = () => {
    const searchRef = useRef();
    const navbarRef = useRef();
    // const cartRef = useRef();
    const [cartVisibility, setCartVisibility] = useState(false);
    const [totalCartItems, setTotalCartItems] = useState(null);

    useEffect(() =>
    {
        const cartProductsArray = JSON.parse(localStorage.getItem('cartProducts'));
        cartProductsArray ? setTotalCartItems(cartProductsArray.length) : setTotalCartItems(0);
    }, []);

    const searchHandler = () => {
        searchRef.current.classList.toggle('active');
        navbarRef.current.classList.remove('active');
        // cartRef.current.classList.remove('active');
    }

    const navbarHandler = () => {
        // console.log('abcd');
        navbarRef.current.classList.toggle('active');
        searchRef.current.classList.remove('active');
        // cartRef.current.classList.remove('active');
    }

    const toogleCartVisibility = () => {
        setCartVisibility((prevState) => !prevState);
    }

    return (
        <>
            <header className='header'>
                <a to='#home' className='logo'><img src={logo} alt='logo' /></a>

                <nav className='navbar' ref={navbarRef}>
                    {/* <a href='#home'>Home</a> */}

                    <a href='#home' className='navbar-list'>Home</a>
                    <a href='#about' className='navbar-list'>About</a>
                    <a href='#menu' className='navbar-list'>Menu</a>
                    <a href='#products' className='navbar-list'>Products</a>
                    <a href='#review' className='navbar-list'>Review</a>
                    <a href='#contact' className='navbar-list'>Contact</a>
                    <a href='#blogs' className='navbar-list'>Blogs</a>
                </nav>

                <div className='icons'>

                    <div onClick={searchHandler} ><FiSearch /></div>
                    <div onClick={toogleCartVisibility}><FaCartShopping /></div>
                    {cartVisibility && (<CartContainer toogleCartVisibility={() => toogleCartVisibility()} />)}
                    <span>{totalCartItems}</span>
                    <div id='menu-btn' onClick={navbarHandler}><IoMenu /></div>

                </div>

                <div className='search-form ' ref={searchRef}  >

                    <input type='search' placeholder='search here...' id='search-box' />
                    <label htmlFor='search-box' ><div className='search-form-icon'><FiSearch /></div></label>
                </div>
            </header>
        </>
    )
};

export default Navbar;