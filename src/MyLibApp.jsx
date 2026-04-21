import React from 'react'
import { useState , useEffect} from 'react'
import AddBookForm from './components/AddBookForm'
import BookList from './components/BookList'
import Navigation from './components/Navigation'
import Home from './components/Home'

const MyLibApp = () => {

    const [activeTab, setActiveTab] = useState('home');

    const [ books , setBooks ] = useState(() => {
      const checkedBooks = localStorage.getItem('my-books');

      if(checkedBooks){
        return JSON.parse(checkedBooks);
      }
      return [{id:Date.now() , title: "Harry Potter" , author: "J.K Rowling" , category: "Fantasy" , image: "" , progress: "wanted" , isFavorite: false, }]
    }
    );
    const deleteBook= (id) =>{

      const question =  confirm('Czy na pewno chcesz usunąć książkę?')
      if(question){setBooks(books.filter(book => book.id !== id))}
      else return
    }

    const handleAddBook = (bookData) => {
      const isDuplicate = books.some(b => b.title.toLowerCase() === bookData.title.toLowerCase());
      
      if (isDuplicate) {
        alert("Ta książka jest już w Twojej bibliotece!");
        return;
      }
      setBooks([...books, { ...bookData, id: Date.now() }]);
    };
    const updateBook = (id, property, value) => {
      setBooks(books.map(book => 
        book.id === id ? { ...book, [property]: value } : book
      ));
    };
    const toggleFav = (id) => {
      setBooks(books.map((book) => {
        if(book.id === id){
          return {...book, isFavorite: !book.isFavorite}
        }
        return book;
  }))
}

  useEffect(() => {
    const data = JSON.stringify(books);
    localStorage.setItem('my-books', data);
}, [books]);

console.log("Czy toggleFav istnieje w MyLibApp:", toggleFav); // Sprawdzamy czy funkcja w ogóle żyje
  return (
    <div className='full-page-wrapper'>
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="app-container">
        <div className='content'>
          {activeTab === 'home' && <Home books={books} setActiveTab={setActiveTab} />}
          {activeTab === 'library' && (
            <div className='view-section'>
              <h2>Moje Zbiory</h2>  
              <BookList 
                books={books.filter(b => b.progress !== 'wanted')}
                onDelete={deleteBook} 
                onToggleFavorite={toggleFav}
                onUpdate={updateBook}
                />
            </div>
          )}
        </div>
          {activeTab === 'wishlist' && (
            <div className="wishlist-layout">
              <aside className="sidebar">
                <AddBookForm onAddBook={handleAddBook}
                />
              </aside>
              
              <main className="books-grid-container">
                <h2>Planowane Zakupy</h2>
                <BookList 
                  books={books.filter(b => b.progress === 'wanted')} 
                  onDelete={deleteBook} 
                  onToggleFavorite={toggleFav}
                  onUpdate={updateBook} 
                />
              </main>
            </div>
  )}
      </div>
    </div>
  )
}

export default MyLibApp