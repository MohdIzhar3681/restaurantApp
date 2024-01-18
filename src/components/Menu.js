import React from 'react';
import {menu} from './Data2';

const Menu = () => {
    const getCartProducts = () =>
    {
        const cartProductsArray = localStorage.getItem('cartProducts');
        return cartProductsArray ? JSON.parse(cartProductsArray) : [];
    }

    const handleClick = (item) =>
    {
        const data = getCartProducts();
        var flag = 1;

        if (data.length)
        {
        data.forEach((curelem, index, array) =>
            {
                if(curelem.id === item.id)
                {
                    console.log("cart item in if condition", curelem);
                    data.splice(index, 1, {...item, quantity : curelem.quantity+1});
                    flag = 0;
                }
            })

        if (flag == 1)
            {
                console.log("inside flag condition");
                data.push({...item, quantity : 1});
            }
        }
        else
        {
            data.push({...item, quantity : 1});
        }

        console.log("cart item outside loop", data);

        localStorage.setItem('cartProducts', JSON.stringify(data))
        alert('Product added to cart');
    }

    return (
        <>
            <section className='menu' id='menu'>
                <h1 className='heading'>our <span>menu</span></h1>
                <div className='box-container'>
                    {menu.map((item, index) =>
                    {
                        return <div key={item.id} className='box'>
                            <img src={item.img} alt='menu-item' />
                            <h3>{item.h3}</h3>
                            <div className='price'>
                                ${item.price} <span> {item.discount}</span>
                            </div>
                            <button className='btn' onClick={() => handleClick(item)} >add to cart</button>
                        </div>
                    })}
                </div>
            </section>
        </>
    );
}
export default Menu;