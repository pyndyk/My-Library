import { useState } from 'react'
import s from './create-book-form.module.css'

export const BookForm = ({ setBook }) => {

  const [data, setData] = useState({
    id: '', nameBook: '', page: '', nameAutor: '', year: '', image: ''
  })

  const createBook = (e) => {
    e.preventDefault()
    setBook(prev => [...prev,
    {
      id: prev.length + 1,
      name_book: data.nameBook,
      page_book: data.page,
      autor: data.nameAutor,
      year: data.year,
      image: data.image
    }])
    setData({
      id: '', nameBook: '', page: '', nameAutor: '', year: '', image: ''
    })
  }

  return (
    <form className={s.description}>
      <input placeholder='Name book' onChange={e => setData(prev => ({
        ...prev, nameBook: e.target.value
      }))}
        value={data.nameBook} />
      <input placeholder=' Page in book' onChange={e => setData(prev => ({
        ...prev, page: e.target.value
      }))}
        value={data.page} />
      <input placeholder=' Name autor' onChange={e => setData(prev =>
        ({ ...prev, nameAutor: e.target.value }))}
        value={data.nameAutor} />
      <input placeholder='Year' onChange={e => setData(prev =>
        ({ ...prev, year: e.target.value }))}
        value={data.year} />
      <input placeholder='Image' onChange={e => setData(prev =>
        ({ ...prev, image: e.target.value }))}
        value={data.image} />
      <button onClick={e => createBook(e)}>ADD BOOK</button>
    </form>
  )
}
