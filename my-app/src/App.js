/** @format */

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import CreateBook from "./components/CreateBook";
import ShowBookList from "./components/ShowBookList";
import ShowBookDetails from "./components/ShowBookDetails";
import UpdateBookInfo from "./components/UpdateBookInfo";

function App() {
  return (
    <Router>
      <div>
        <Route exact path='/'>
          <ShowBookList />
        </Route>

        <Route path='/create-book'>
          <CreateBook />
        </Route>
        <Route path='/edit-book/:id'>
          <UpdateBookInfo />
        </Route>
        <Route path='/show-book/:id'>
          <ShowBookDetails />
        </Route>
      </div>
    </Router>
  );
}

export default App;
