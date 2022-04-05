import React from 'react'

const BookForm = (props) => {
    return (
        <form onSubmit={props.addBook}>
            <div>
                Title: <input
                    value={props.newTitle}
                    onChange={props.handleTitleChange}
                    placeholder="Title"/>
            </div>
            <div>
                Author: <input
                    value={props.newAuthor}
                    onChange={props.handleAuthorChange}
                    placeholder="Author"/>
            </div>           
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    )
}

export default BookForm