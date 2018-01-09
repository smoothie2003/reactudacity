import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookGrid from './BookGrid';

class BookShelf extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    onMoveBook: PropTypes.func.isRequired
  };

  render() {

    const { books, title, onMoveBook} = this.props

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <BookGrid
            books={books}
            onMoveBook={onMoveBook}
          />
        </div>
      </div>
    )
  }
};

export default BookShelf;
