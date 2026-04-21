import React, { useState } from 'react';
import styles from './BookItem.module.css';

const BookItem = ({ book, onDelete, onToggleFavorite, onUpdate }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [tempDesc, setTempDesc] = useState(book.description);

  const handleSave = () => {
    setIsEditing(false);
    onUpdate(book.id, 'description', tempDesc);
  };

  return (
    <div className={`${styles.bookCard} ${book.progress === 'fulfilled' ? styles.isRead : ''}`}>
      <div className={styles.bookMain}>
        <img 
          src={book.image || '/pusta.jpg'} 
          className={styles.bookCover} 
          alt={book.title}
        />
        
        <div className={styles.bookInfo}>
          <h3>{book.title}</h3>
          <p>
            {book.author} | <span className={styles.categoryBadge}>{book.category}</span>
          </p>
        </div>

        <div className={styles.bookActions}>
          <button className={styles.btnAction} onClick={() => onToggleFavorite(book.id)}>
            {book.isFavorite ? "⭐" : "☆"}
          </button>
          <button className={styles.btnAction} onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? "▲" : "▼"}
          </button>
          <button className={styles.btnAction} onClick={() => onDelete(book.id)}>✕</button>
        </div>
      </div>

      
      {isExpanded && (
        <div className={styles.bookDetails}>
          <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
            {book.progress === 'wanted' && (
              <button onClick={() => onUpdate(book.id, 'progress', 'owned')}>
                Przenieś do Biblioteki
              </button>
            )}
            {book.progress === 'owned' && (
              <button onClick={() => onUpdate(book.id, 'progress', 'fulfilled')}>
                Oznacz jako Przeczytane
              </button>
            )}
          </div>
          <strong>Opis:</strong>
          {isEditing ? (
            <textarea 
              className={styles.editArea}
              value={tempDesc} 
              onChange={(e) => setTempDesc(e.target.value)} 
              onBlur={handleSave}
              autoFocus
            />
          ) : (
            <p onClick={() => setIsEditing(true)} style={{ cursor: 'pointer', fontStyle: 'italic' }}>
              {book.description || "Kliknij, aby dodać opis..."}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default BookItem;