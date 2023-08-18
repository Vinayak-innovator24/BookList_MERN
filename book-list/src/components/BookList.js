// src/components/BookList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../index.css';
import BookItem from './BookItem';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [searchItem, setSearchItem] = useState('');

  useEffect(() => {
    // console.log("useEffect is running");
    axios.get('http://localhost:3001/api/books/')
      .then((response) => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error('Error fetching book data:', error); // Log the error object
        
      });
    
  },[]);

  // Filter books based on search term
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchItem.toLowerCase()) ||
    book.author.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div className="book-list">
      <input
        type="text"
        placeholder="Search by title or author..."
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
        style={{ height: '30px' }}
      />
      <ul>
        {filteredBooks.map((book) => (
          <BookItem key={book._id} book={book} className="shifting-left" />
        ))}
      </ul>
    </div>
  );
};

export default BookList;
