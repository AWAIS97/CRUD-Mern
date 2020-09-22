/** @format */

import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "../App.css";
import { useParams } from "react-router-dom";

function UpdateBookInfo() {
  const [title, setTitle] = useState("");
  const [isbn, setIsbn] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [publisher, setPublisher] = useState("");
  const [published_date, setPublishedDate] = useState("");
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/books/${id}`)
      .then((res) => {
        // this.setState({...this.state, book: res.data})
        setTitle(res.data.title);
        setIsbn(res.data.isbn);
        setAuthor(res.data.author);
        setDescription(res.data.description);
        setPublishedDate(res.data.published_date);
        setPublisher(res.data.publisher);
      })
      .catch((err) => {
        console.log("Error from UpdateBookInfo");
      });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      title,
      isbn,
      author,
      description,
      published_date,
      publisher,
    };
    axios
      .put(`http://localhost:5000/api/books/${id}`, data)
      .then((res) => {
        history.push(`/show-book/${id}`);
      })
      .catch((err) => {
        console.log("Error in UpdateBookInfo!");
      });
  };

  return (
    <div className='UpdateBookInfo'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show BooK List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Book</h1>
            <p className='lead text-center'>Update Book's Info</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Title of the Book'
                name='title'
                className='form-control'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <br />

            <div className='form-group'>
              <input
                type='text'
                placeholder='ISBN'
                name='isbn'
                className='form-control'
                value={isbn}
                onChange={(e) => setIsbn(e.target.value)}
              />
            </div>

            <div className='form-group'>
              <input
                type='text'
                placeholder='Author'
                name='author'
                className='form-control'
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>

            <div className='form-group'>
              <input
                type='text'
                placeholder='Describe this book'
                name='description'
                className='form-control'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className='form-group'>
              <input
                type='date'
                placeholder='published_date'
                name='published_date'
                className='form-control'
                value={published_date}
                onChange={(e) => setPublishedDate(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Publisher of this Book'
                name='publisher'
                className='form-control'
                value={publisher}
                onChange={(e) => setPublisher(e.target.value)}
              />
            </div>
            <button
              onClick={onSubmit}
              type='submit'
              className='btn btn-outline-warning btn-block mt-4'
            >
              Update Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateBookInfo;
