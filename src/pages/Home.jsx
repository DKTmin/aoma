import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Nav, Navbar, Button, Row, Col, Card } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';
import bookData from '../data/books.json'
import { useCart } from '../contexts/CartContext' // Import useCart hook

function Home() {
  const [books, setBooks] = useState([]);
  const { addToCart } = useCart(); // Use the addToCart function from context

  useEffect(() => {
    setBooks(bookData);
  }, []);

  return (
    <Container className='mt-5'>
      <h2>Danh sach san pham</h2>
      <Row>
        {books.map((book) => (
          <Col key={book.id} md={6} lg={4} className='mb-4'>
            <Card>
              <Card.Img src={`/images/${book.image}`}></Card.Img>
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Subtitle>{book.author}</Card.Subtitle>
                <Card.Text>{book.price} $</Card.Text>

                <Link to={`/book/${book.id}`}>
                  <Button className='me-2'>Chi tiet</Button>
                </Link>

                <Button
                  variant='success'
                  onClick={() => addToCart(book)} 
                  // Add onClick handler to add book to cart
                >
                  Them vao gio
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Home