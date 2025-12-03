import { Route, Routes } from 'react-router'
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import Products from './components/products/Products'
import About from './components/about/About'
import Contact from './components/contact/Contact'

function App() {

  return (
    <>
      <Header />
a
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

    </>
  )
}

export default App
