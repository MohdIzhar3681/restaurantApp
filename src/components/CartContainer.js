import React, { useEffect, useState } from 'react';
import { FaTrashArrowUp } from "react-icons/fa6";

const CartContainer = ({ toogleCartVisibility }) => {

    const [productArray, setProductArray] = useState([]);
    const [refreshPage, setRefreshPage] = useState('1');

    const getCartProducts = () => {
        const cartProductsArray = localStorage.getItem('cartProducts');
        return cartProductsArray ? JSON.parse(cartProductsArray) : [];
    }

    const deleteItem = (itemIndex) => {
        console.log("item index number to delete", itemIndex);

        productArray.splice(itemIndex, 1);
        setRefreshPage(Math.random());
        localStorage.setItem('cartProducts', JSON.stringify(productArray));
    }

    useEffect(() => {
        const data = getCartProducts();
        setProductArray(data);
        // console.log(data);
    }, []);

    console.log("product array in cart", productArray);

    return (
        <>
            <div className='cart-item-conteiner'>
                <div className='cart-top-container'>
                    <h1 className=' cart-heading'>My Cart</h1>
                    <button onClick={toogleCartVisibility} className='cart-btn'>X</button>
                    
                </div>
                <hr/>
                {productArray.length ?
                    <section className='cart-items-section '>
                        {productArray.map((curItem, index, array) => {
                            return (
                                <div key={index} className='cart-inner '>
                                    <div className='cart-content '>
                                        <img src={curItem.img} height='100px' width='120px' alt='picture' />
                                        <div className='item-heading '>
                                            <h6>{curItem.h3}</h6>
                                            <p>X {curItem.quantity}</p>
                                        </div>
                                    </div>
                                    <div className='item-heading'>
                                        <p>$ {curItem.price * curItem.quantity}</p>
                                        <FaTrashArrowUp onClick={() => deleteItem(index)} />
                                    </div>
                                </div>
                            )
                        })}
                        <div className='sub-total'>
                            <h6>SubTotal:</h6>
                            <p>$
                                {productArray.reduce((accumulator, curelem, index, array) => accumulator + (curelem.price * curelem.quantity), 0).toFixed(2)}
                            </p>
                        </div>

                        <button className='btn' id='proceed-btn'>Proceed To Pay</button>
                    </section>
                    :
                    <div className='no-data'>
                        <h4>No data found</h4>
                    </div>

                    
                }
            </div>
        </>
    )
};
export default CartContainer;