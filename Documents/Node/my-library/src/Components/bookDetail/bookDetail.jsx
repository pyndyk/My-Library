import React, { useState } from "react";
import s from "./bookDetail.module.css"
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { BooksList } from "../../servises/bookServise";
import Book from "../Book/book";
import { Link } from "react-router-dom";

function BookDetail() {

    const { id } = useParams()
    const [book, setBook] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const data = await BooksList.getById(id)
            setBook(data)
        }
        fetchData()
    }, [id])
    if (!book) {
        return (
            <div>book not found</div>
        )
    }

    return (
        <div className={s.item} >
            <Link to="/">Back</Link>
            <Book key={book.id} name_book={book.name_book} autor={book.autor}
                year={book.year} page_book={book.page_book} image={book.image}
                id={book.id} />
        </div>
    )
}
export default BookDetail;