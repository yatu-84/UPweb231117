import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './js/header'; 
import Home from './js/home'; 
import Footer from './js/footer';
import './App.css';
import background from './img/back.jpg'

class App extends React.Component {
  render() {
    return (
      <div className='backImg'>
        <div className='back'>
          <Header />
            <header className="App-header">
              <Router>
                <Routes>
                  <Route path="/UPweb231117/" element={<Home />} />
                </Routes>
              </Router>
            </header>
            <Footer />
          </div>
      </div>
    );
  }
}

export default App;
