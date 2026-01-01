import React, { useContext, useState } from 'react'
import './BookItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext';

const BookItem = ({ image, name, price, desc , id }) => {

    const [itemCount, setItemCount] = useState(0);
    const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext);

    console.log(id ," test")
    console.log(cartItems, "test 2")

    return (
        <div className='book-item'>
            <div className='book-item-img-container'>
                <img className='book-item-image' src={url+"/images/"+image} alt="" />
                {!cartItems
                ?<img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
                :<div className="book-item-counter">
                        <img src={assets.remove_icon_red} onClick={()=>removeFromCart(id)} alt="" />
                        <p>{cartItems[id]}</p>
                        <img src={assets.add_icon_green} onClick={()=>addToCart(id)} alt="" />
                    </div>
                }
            </div>
            <div className="book-item-info">
                <div className="book-item-name-rating">
                    <p>{name}</p> <img src={assets.rating_starts} alt="" />
                </div>
                <p className="book-item-desc">{desc}</p>
                <p className="book-item-price">₹{price}</p>
            </div>
        </div>
    )
}

export default BookItem
