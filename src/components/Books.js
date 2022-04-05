import React from 'react'
import Book from './Book'

const Books = (props) => {
  const booksToShow = props.newFilter === ''
    ? props.books
    : props.books.filter(book => book.title.toLowerCase().indexOf(props.newFilter.toLowerCase()) !== -1)

  console.log("booksToShow", booksToShow);

  return (
    booksToShow.map(book => 
      <Book 
        key={book.title} 
        book={book} 
        books={props.books} 
        setBooks={props.setBooks} 
        setMessage={props.setMessage}
      />
    )
  )
}

export default Books