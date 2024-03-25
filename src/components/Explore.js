import React from 'react'
import  { useEffect, useState } from 'react';


function Explore() {
    const [books, setBooks] = useState([]);
    const [bookname, setBookname] = useState("");

    const searchbook = (e)=>{
        e.preventDefault();
        fetchBooks();
        setBookname("")
        
       
    }
    const onchange=(e)=>{
        setBookname(e.target.value);
    }

    const fetchBooks = async () => {
      const newname = encodeURIComponent(bookname)
      const url = `https://www.googleapis.com/books/v1/volumes?q=${newname}&key=AIzaSyB1c8Bv1ev_-0K0lqM9CDShyBqtQC3ms88`;
      console.log(url)
      const data = await fetch(url);
      const parsedData = await data.json();
  
      if (parsedData.items) {
        setBooks(parsedData.items);
      }
    };
  
    // useEffect(() => {
    //   fetchBooks();
    // }, [searchbook]);
  

    return (
         <div className='explorebg
         '>
        <div className='explore'>
    
      <div className='exploreimg'>
        <img src='/images/shelf.png'></img>
        <div className='exploretext'>
        <h1>Come and explore books!</h1>
        <p>A reader lives a thousand lives before he dies. The man who never reads lives only one.</p>
        <form onSubmit={searchbook}>
        <input className='exploreinput' name='bookname' value={bookname} type='text'placeholder='Enter your book-name'onChange={onchange} ></input>
        <button className="n" type='submit' >Search</button>
        </form>
        </div>
      </div>
      <div className='cardlist'>
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <img className="book-image" src={book.volumeInfo.imageLinks?.thumbnail || '/images/logo.png'} // Use the dynamic image link, fallback to a default image path if not available
        alt="cover"></img>
            <div className="book-details">
              <h3 className="book-title">{book.volumeInfo.title}</h3>
              <p className="book-author">by {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>

  )
}

export default Explore
