import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Nav, Header, Article, Article2, Footer } from './components/Parts';


function App() {

  return (

    <>
      <Header />
      <section>
        <Nav />

        <Article2 />
      </section>
      <Footer />
    </>

  )
}

export default App
