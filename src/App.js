import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookSelves from './BookSelves'
import BookSearch from './BookSearch'

class BooksApp extends React.Component {
  state = {
    books: [],
    foundBooks: [],
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
      books: updatebooks
    }))

  }

  searchBook = (query) => {
    BooksAPI.search(query).then((books) => {
      this.setState({
        foundBooks : books
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
          searchBooks={this.searchBook}
          onMoveBook={this.moveBook}
          books={this.state.foundBooks}
        />
      }/>
      </div>
    )
  }
}

export default BooksApp
