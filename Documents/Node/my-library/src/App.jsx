import { useEffect, useState } from 'react'
import s from './assets/style/global.module.css'
import Book from './Components/Book/book.jsx'
import { books as booksData } from '../db.json'
import { BookForm } from './Components/create-book-form/create-book'
import { BooksList } from './servises/bookServise'

function App() {
  const [books, setBook] = useState(booksData)

  useEffect(() => {
    const fetchData = async () => {
      const data = await BooksList.getAll()
      setBook(data)
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1 className={s.catalog}> Catalog books</h1>
      <BookForm setBook={setBook} />
      <div>
        {
          books.length ? books.map(book => {
            return (
              <Book
                key={book.id} name_book={book.name_book} autor={book.autor}
                year={book.year} page_book={book.page_book} image={book.image}
                id={book.id} />
            )
          })
            : <p>There are no books</p>}
      </div>
    </div>
  )
}

export default App;
