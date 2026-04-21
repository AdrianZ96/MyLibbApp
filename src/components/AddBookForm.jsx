import React, { useState } from 'react';
import styles from './AddBookForm.module.css';

const AddBookForm = ({ onAddBook }) => {
  const [newBook, setNewBook] = useState({ 
    title: "", 
    author: "", 
    category: "", 
    image: "", 
    progress: "", 
    isFavorite: false, 
    description: "Opis" 
  });

  const addBook = () => {
    onAddBook(newBook);
    setNewBook({ 
      title: "", 
      author: "", 
      category: "", 
      image: "", 
      progress: "wanted", 
      isFavorite: false, 
      description: "Dodaj opis" 
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const finalValue = type === 'checkbox' ? checked : value;

    setNewBook(prev => ({
      ...prev,
      [name]: finalValue
    }));
  };

  return (
    <section className={styles.formContainer}>
      <h1>Dodaj Książkę</h1>
      <form className={styles.form} onSubmit={(e) => { e.preventDefault(); addBook(); }}>
        <input className={styles.input} type="text" name='title' placeholder='Tytuł' value={newBook.title} onChange={handleChange} />
        <input className={styles.input} type="text" name='author' placeholder='Autor' value={newBook.author} onChange={handleChange} />
        <input className={styles.input} type="url" name='image' placeholder='Dodaj Zdjęcie' value={newBook.image} onChange={handleChange} />
        
        <select className={styles.input} name="category" value={newBook.category} onChange={handleChange}>
          <option value="">Wybierz Kategorię</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Kriminał">Kryminał</option>
          <option value="Romans">Romans</option>
          <option value="Komedia">Komedia</option> 
          <option value="Biografia">Biografia</option>
          <option value="Sensacja">Sensacja</option>  
          <option value="Reportaż">Reportaż</option>  
          <option value="Historia">Historia</option>
          <option value="S-F">S-F</option>
          <option value="Horror">Horror</option>
          <option value="Klasyki">Klasyki</option>                 
          <option value="Inne">Inne</option> 
        </select>

        <select className={styles.input} name="progress" value={newBook.progress} onChange={handleChange}>
          <option value="">Status</option>
          <option value="wanted">Do Przeczytania</option>
          <option value="fulfilled">Przeczytane</option>
          <option value="progress">W Toku</option>
          <option value="owned">Posiadane</option>
        </select>

        <label className={styles.label}>
          <input type="checkbox" name="isFavorite" checked={newBook.isFavorite} onChange={handleChange} />
          Ulubiona?
        </label>
        
        <textarea className={styles.input} name="description" value={newBook.description} onChange={handleChange}></textarea>

        <button className={styles.submitButton} type='submit'>Dodaj</button>
      </form>
    </section>
  );
};

export default AddBookForm;