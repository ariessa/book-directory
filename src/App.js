import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import BookForm from './components/BookForm'
import Books from './components/Books'
import bookService from './services/books'
import Notification from './components/Notification'
import RegistrationForm from './components/RegistrationForm'

const App = () => {
  const [ books, setBooks ] = useState([])
  const [ newTitle, setNewTitle ] = useState('')
  const [ newAuthor, setNewAuthor ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [ message, setMessage ] = useState(null)

  useEffect(() => {
    bookService
      .getAll()
      .then(initialBooks => {
        setBooks(initialBooks)
      })
  }, [])

  const addBook = (event) => {
    event.preventDefault()
    const bookObject = {
      title: newTitle,
      author: newAuthor,
      id: books.length + 1
    }

    if (books.some(e => e.title === newTitle)) {
      
      if (window.confirm(
        `${newTitle} is already added to the book directory, replace the old book with a new one?`
      )) {
        const book = books.find(b => b.title === newTitle)
        const changedBook = { ...book, author: newAuthor}
  
        bookService
          .update(book.id, changedBook)
          .then(returnedBook => {
            setBooks(books.map(book => book.title !== newTitle ? book : returnedBook))
            console.log(`Success: Replaced ${newTitle}'s author`)
            setMessage(`Replaced ${newTitle}'s author`)
            setTimeout(() => {
              setMessage(null)
            }, 5000)
          })
          .catch(error => {
            console.log(`Error: Information of ${newTitle} has already been removed from server`)
            setMessage(
              `Information of ${newTitle} has already been removed from server`
            )
            setTimeout(() => {
              setMessage(null)
            }, 5000)
            setBooks(books.filter(b => b.title !== newTitle))
          })
        setNewTitle('')
        setNewAuthor('')
      }
    }
    else {
      bookService
        .create(bookObject)
        .then(returnedBook => {
          setBooks(books.concat(returnedBook))
          console.log(`Success: Added ${newTitle}`)
          setMessage(`Added ${newTitle}`)
          setNewTitle('')
          setNewAuthor('')
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
    }
  }

  const handleTitleChange = (event) => {
    console.log(event.target.value)
    setNewTitle(event.target.value)
  }

  const handleAuthorChange = (event) => {
    console.log(event.target.value)
    setNewAuthor(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }
  
  return (
    <div>
      <h2>Book Directory</h2>

      <Notification message={message} />

      <br/>

      <h3>Registration Form</h3>

      <RegistrationForm/>

      <br/>
      
      <h3>Add A New Book</h3>

      <BookForm 
        newTitle={newTitle} 
        newAuthor={newAuthor}
        handleTitleChange={handleTitleChange}
        handleAuthorChange={handleAuthorChange}
        addBook={addBook}
      />

      <br/>

      <h3>Books</h3>

      <Filter 
        newFilter={newFilter} 
        handleFilterChange={handleFilterChange} 
      />

      <Books 
        books={books} 
        newFilter={newFilter}
        setBooks={setBooks}
        setMessage={setMessage}
      />

    </div>

  )
}

export default App