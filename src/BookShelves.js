import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';

class BookShelves extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    onMoveBook: PropTypes.func.isRequired
  };


  render() {

    const { books, onMoveBook} = this.props

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              books={books.filter(book => book.shelf === "currentlyReading")}
              title="Currently Reading"
              onMoveBook={onMoveBook}
            />
            <BookShelf
              books={books.filter(book => book.shelf === "wantToRead")}
              title="Want to Read"
              onMoveBook={onMoveBook}
            />
            <BookShelf
              books={books.filter(book => book.shelf === "read")}
              title="Read"
              onMoveBook={onMoveBook}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search"></Link>
        </div>
      </div>
    )
  }
};



export default BookShelves;
