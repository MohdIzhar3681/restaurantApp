import logoImage from '../assets/images/logo.png';
import homeImage from '../assets/images/home-img.jpg';
import aboutImage from '../assets/images/about-img.png';

import menuImage1 from '../assets/images/menu-1.png';
import menuImage2 from '../assets/images/menu-2.png';
import menuImage3 from '../assets/images/menu-3.png';
import menuImage4 from '../assets/images/menu-4.png';
import menuImage5 from '../assets/images/menu-5.png';
import menuImage6 from '../assets/images/menu-6.png';

import productImage1 from '../assets/images/product-1.png';
import productImage2 from '../assets/images/product-2.png';
import productImage3 from '../assets/images/product-3.png';

import quoteImage1 from '../assets/images/review-coma.png';
// import quoteImage2 from '../assets/images/review-coma.png';
// import quoteImage3 from '../assets/images/review-coma.png';


import reviewImage1 from '../assets/images/review-profile.png';
import reviewImage2 from '../assets/images/review-profile.png';
import reviewImage3 from '../assets/images/review-profile.png';

import blogImage1 from '../assets/images/blog-1.jpeg';
import blogImage2 from '../assets/images/blog-2.jpeg';
import blogImage3 from '../assets/images/blog-3.jpeg';

const logo = [
    {

        img: logoImage,
    },
];


const home = [
    {
        img: homeImage,
    },
];

const about = [
    {
        img: aboutImage,
    },
];

const menu = [
    {
        id: 1,
        img: menuImage1,
        h3: 'Burger',
        price: 15,
        discount:'20',
    },
    {
        id: 2,
        img: menuImage2,
        h3: 'Finch',
        price: 12,
        discount:'15',
    },
    {
        id: 3,
        img: menuImage3,
        h3: 'Mc Grill',
        price: 18,
        discount:'21',
    },
    {
        id: 4,
        img: menuImage4,
        h3: 'Pizza',
        price: 4,
        discount:'5',
    },
    {
        id: 5,
        img: menuImage5,
        h3: 'Veg Treat',
        price: 20,
        discount:'25',
    },
    {
        id: 6,
        img: menuImage6,
        h3: 'Coffee',
        price: 5,
        discount:'6',
    },
];

const products = [
    {

        img: productImage1,
        h3: 'Burger',
        price: 6,
        discount:'7',
    },
    {

        img: productImage2,
        h3: 'Muffin',
        price: 2,
        discount:'2',
    },
    {

        img: productImage3,
        h3: 'Coffee',
        price: 5,
        discount:'6',
    },
];

const quote = [
    {
        img: quoteImage1,
    },
    // {
    //     img: quoteImage2,
    // },
    // {
    //     img: quoteImage3,
    // },


];

const review = [
    {
        img: reviewImage1,
    },
    {
        img: reviewImage2,
    },
    {
        img: reviewImage3,
    },
];

const blog = [
    {
        img: blogImage1,
    },
    {
        img: blogImage2,
    },
    {
        img: blogImage3,
    },
];




export {logo,home,about,menu,products,quote,review,blog};