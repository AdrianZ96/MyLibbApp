import React from 'react';
import BookItem from './BookItem';
import styles from './BookList.module.css';

const BookList = ({ books, onDelete, onToggleFavorite , onUpdate }) => {
  return (
    <div className={styles.booksMarquee}>
        <div className={styles.marqueeContent}>
            {books.map((book) => (
                <BookItem 
                    key={book.id} 
                    book={book} 
                    onDelete={onDelete} 
                    onToggleFavorite={onToggleFavorite} 
                    onUpdate={onUpdate}
                />
            ))}
        </div>
    </div>
  );
};

export default BookList;