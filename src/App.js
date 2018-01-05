import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookSelves from './BookSelves'
import BookSearch from './BookSearch'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */

    books: [],
    searchBooks: [],
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books : books
      })

    })
  }

  moveBook = (book, value) => {

    BooksAPI.update(book, value)

    var updatebooks = this.state.books

    var i = updatebooks.findIndex(b => b.id === book.id)
    updatebooks[i].shelf = value;

    this.setState((state) => ({
      searchBooks: updatebooks
    }))

  }

  searchBook = (query) => {
    BooksAPI.search(query).then((books) => {
      this.setState({
        search : books
      })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={(history) => (
          <BookSelves
            books={this.state.books}
            onMoveBook={this.moveBook}
          />
        )}
        />

      <Route path="/search" render={({ history }) =>
        <BookSearch

        />
      }/>
        <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
      </div>
    )
  }
}

export default BooksApp

/*
<div className="open-search">
  <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
</div>
*/
