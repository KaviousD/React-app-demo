import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import imgArray from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageComp from './components/SelectedBeast';



function App() {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className="App">
      <Header />
      <Main setShow={setShowModal} imgdata={imgArray} />
      <ImageComp setShow={setShowModal} showModal={showModal} /> {/* Include the ImageComp component here */}
      <footer className="App-footer"> {/* Corrected from header to footer */}
        <img src={logo} className="App-logo" alt="logo" />
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
