import React, { useContext } from 'react'
import './BookDisplay.css'
import BookItem from '../BookItem/BookItem'
import { StoreContext } from '../../Context/StoreContext'

const BookDisplay = ({category}) => {

  const {book_list} = useContext(StoreContext);

  return (
    <div className='book-display' id='book-display'>
      <h2>Books near you</h2>
      <div className='book-display-list'>
        {book_list.map((item)=>{
          if (category==="All" || category===item.category) {
            return <BookItem key={item._id} image={item.image} name={item.name} desc={item.description} price={item.price} id={item._id}/>
          }
        })}
      </div>
    </div>
  )
}

export default BookDisplay
