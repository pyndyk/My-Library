import React from "react";
import s from "./book.module.css"
import { Link } from "react-router-dom";

function Book(props) {

    return (
        <div className={s.item} >
            <div className={s.books}>
                <img src={`${props.image}`} />
            </div>
            <div className={s.info}>
                <h5>{props.name_book}</h5>
                <h5>{props.autor}</h5>
                <h5>{props.page_book}</h5>
                <h5>{props.year}</h5>
            </div>
            <Link type="input" to={`/books/${props.id}`}>About book</Link>
        </div>
    )
}

export default Book;