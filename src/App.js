import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookShelves from './BookShelves';
import BookSearch from './BookSearch';

class BooksApp extends Component {
  state = {
    books: [],
    foundBooks: []
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {

      this.setState({
        books : books
      })

    })
  };

  moveBook = (book, value) => {

    BooksAPI.update(book, value).then(shelves => {

      BooksAPI.getAll().then(updateBooks => {
        this.setState({
          books: updateBooks
        })
      })

    })

  };

  searchBook = (query) => {
    BooksAPI.search(query).then((books) => {

      if(books) {
        if(!books.error) {
          this.setState({
            foundBooks: books
          })
        } else {
          this.setState({
            foundBooks: []
          })
        }
      }
    })
  };

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={(history) => (
          <BookShelves
            books={this.state.books}
            onMoveBook={this.moveBook}
          />
        )}
        />

      <Route path="/search" render={({ history }) =>
        <BookSearch
          searchBooks={this.searchBook}
          onMoveBook={this.moveBook}
          foundBooks={this.state.foundBooks}
          shelfBooks={this.state.books}
        />
      }/>
      </div>
    )
  }
};

export default BooksApp;
