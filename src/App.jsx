import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Cart from './pages/Cart'
import BookDetail from './pages/BookDetail'
import NotFound from './pages/NotFound'

import { CartProvider } from './contexts/CartContext'


function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/book/:id' element={<BookDetail />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer></Footer>
        </Router>
      </CartProvider>

    </>
  )
}

export default App
