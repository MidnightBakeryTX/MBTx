import React, { useState } from 'react';
import './App.css';
import logo from './Assets/Images/Midnight Bakery Logo (1).png'
import signature from './Assets/Images/Sara Sig.png'
import Header from './Components/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Menu from './Pages/Menu';
import Contact from './Pages/Contact';
import  { FaFacebookF, FaInstagram } from "react-icons/fa";


function App() {

  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />
    }
    if (currentPage === 'About') {
      return <About />
    }
    if (currentPage === 'Menu') {
      return <Menu />
    }
    if (currentPage === 'Contact') {
      return <Contact />
    }
  }

  const pageSwitch = (page) => setCurrentPage(page)

  return (
    <div className="App">
      <Header className="header" currentPage={currentPage} pageSwitch={pageSwitch} />

      <h1>Midnight Bakery</h1>

      <main>
        {renderPage()}
      </main>

      <footer>
        <img className='signature' src={signature} alt='A signature that says Sara Baldock'></img>
        <img className='logoFooter' src={logo} alt='Midnight Bakery logo'></img>
        <div className='socialLinks'>
          <li><a href='https://www.facebook.com/midnightbakerytx/'><FaFacebookF /></a></li>
          <li><a href='https://www.instagram.com/midnightbakerytx/'><FaInstagram /></a></li>
          
        </div>
      </footer>
    </div>
  );
}

export default App;
