import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookGrid from './BookGrid';

class BookSearch extends Component {

  static propTypes = {
      searchBooks: PropTypes.func.isRequired,
      onMoveBook: PropTypes.func.isRequired,
      foundBooks: PropTypes.array.isRequired,
      shelfBooks: PropTypes.array.isRequired
  };

  state = {
    query: ''
  };

  updateQuery = (query) => {

      this.props.searchBooks(query)
      this.setState({ query })
  };

  render() {

    const { shelfBooks, foundBooks, onMoveBook } = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'></Link>
          <div className="search-books-input-wrapper">

            <input type="text"
                   placeholder="Search by title or author"
                   value={this.state.query}
                   onChange={(event) => this.updateQuery(event.target.value)}
            />

          </div>
        </div>
        <div className="search-books-results">
          <BookGrid
            books={foundBooks}
            shelfBooks={shelfBooks}
            onMoveBook={onMoveBook}
          />
        </div>
      </div>
    )
  }
};

export default BookSearch;
