// src/components/BookItem.js
import React from 'react';

const BookItem = ({ book }) => {
  return (
    <li>
      <strong>Title:</strong> {book.title}<br />
      <strong>Author:</strong> {book.author}<br />
      <strong>Genre:</strong> {book.genre}<br />
    </li>
  );
};

export default BookItem;
