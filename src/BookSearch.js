import React, { Component } from 'react'
import escapeRegExp from 'escape-string-regexp'
import PropTypes from 'prop-types'
import BookGrid from './BookGrid'

class BookSearch extends Component {

  static propTypes = {
    searchBooks: PropTypes.func.isRequired,
    onMoveBook: PropTypes.func.isRequired,
    books: PropTypes.array
  }
  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query })
  }

  clearQuery = () => {
    this.setState({ query: ''})
  }


  render() {

    const { books, searchBooks, onMoveBook } = this.props
    const { query } = this.state

    console.log(this.props.books)
    if (query) {
      searchBooks(query)
    } else {
      console.log("Empty")
    }

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text"
                   placeholder="Search by title or author"
                   value={this.state.query}
                   onChange={(event) => this.updateQuery(event.target.value)}
            />

          </div>
        </div>
        <div className="search-books-results">
          <BookGrid
            books={books}
            onMoveBook={onMoveBook}
          />
        </div>
      </div>
    )
  }
}

export default BookSearch
