import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import bookData from '../data/books.json'
import { useParams, useNavigate } from 'react-router-dom'
import {useCart} from '../contexts/CartContext'

function BookDetail() {
    const { id } = useParams();
    const book = bookData.find((b) => b.id === parseInt(id))
    const navigate = useNavigate();
    const {addToCart} = useCart(); 

    return (
        <Container>
            <h1>{book.title}</h1>
            <p>{book.author}</p>
            <p>{book.price}</p>
            <img src={`/images/${book.image}`} alt="anh loi" />
            <br />
            <Button className='me-3' variant='danger' onClick={()=> navigate(-1)}>Quay lai</Button>
            <Button variant='success' onClick={() => addToCart(book)}>Them Vao Gio Hang</Button>
        </Container>
    )
}

export default BookDetail