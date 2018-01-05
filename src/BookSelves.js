import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookSelf from './BookSelf'

class BooksSelf extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    onMoveBook: PropTypes.func.isRequired
  }


  render() {

    const { books, onMoveBook} = this.props

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookSelf
              books={books.filter(book => book.shelf === "currentlyReading")}
              title="Currently Reading"
              onMoveBook={onMoveBook}
            />
            <BookSelf
              books={books.filter(book => book.shelf === "wantToRead")}
              title="Want to Read"
              onMoveBook={onMoveBook}
            />
            <BookSelf
              books={books.filter(book => book.shelf === "read")}
              title="Read"
              onMoveBook={onMoveBook}
            />
          </div>
        </div>
      </div>
    )
  }
}



export default BooksSelf
