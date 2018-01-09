import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookGrid extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    shelfBooks: PropTypes.array,
    onMoveBook: PropTypes.func.isRequired
  };

    determineShelf = (book, shelfBooks) => {

        if(book.shelf) {
            return book.shelf
        } else if(shelfBooks && shelfBooks.findIndex(b => b.id === book.id) !== -1){
            var i = shelfBooks.findIndex(b => b.id === book.id)
            return shelfBooks[i].shelf
        } else {
            return "none"
        }
    };

  render() {

    const { books, onMoveBook, shelfBooks } = this.props

    return (
      <ol className="books-grid">

        {books.map((book) => (
          <li key={book.id}>
            <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}>
                  </div>
                  <div className="book-shelf-changer">
                    <select value={this.determineShelf(book, shelfBooks)}
                            onChange={(event) => onMoveBook(book, event.target.value)}>
                      <option value="Move To" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors ? book.authors.join(", ") : ""}</div>
            </div>
          </li>

        ))}
      </ol>

    )
  };
}

export default BookGrid;
