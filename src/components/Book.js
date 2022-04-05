import React from 'react'
import bookService from '../services/books'

const Book = (props) => {
  return (
    <p>
      {props.book.title} by {props.book.author}
      <button onClick={() => {
        if (window.confirm(`Delete ${props.book.title}?`)) {
          bookService
            .remove(props.book.id)
            .then(
              props.setBooks(props.books.filter(b => b.id !== props.book.id))
            )
          console.log(`Success: Deleted ${props.book.title}`)
          props.setMessage(
            `Deleted ${props.book.title}`
          )
          setTimeout(() => {
            props.setMessage(null)
          }, 5000)
        }        
      }}>delete</button>
    </p>
  )
}

export default Book