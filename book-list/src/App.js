// src/App.js
import React from 'react';
import BookList from './components/BookList';

function App() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    >
      <h1 style={{ position: 'relative', left: '130px' }}>Your Book List</h1>
      <BookList />
    </div>
  );
}

export default App;
