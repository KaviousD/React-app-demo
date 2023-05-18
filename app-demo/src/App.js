import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import imgArray from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageComp from './componets/SelectedBeast';



function App() {
  const [showModal, setShowModal] = useState(false)
  const [showbeast, setShowbeast] = useState({
    "image_url": "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
    "title": "Rhino Family",
    "description": "Mother (or father) rhino with two babies",
  })
  return (
    <div className="App">
      <Header />
      <Main setShowbeast={setShowbeast} setShow={setShowModal} imgdata={imgArray} />
      <ImageComp showbeast={showbeast} setShow={setShowModal} showModal={showModal} /> {/* Include the ImageComp component here */}
      <footer className="App-footer"> {/* Corrected from header to footer */}
        <img src={logo} className="App-logo" alt="logo" />zz
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </footer>
      <Footer />
    </div>
  );
}

export default App;
