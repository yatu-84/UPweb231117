import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './js/header'; 
import Home from './js/home'; 
import background from './img/back.jpg'

class App extends React.Component {
  render() {
    return (
      <div className='App' style={{ backgroundImage: `url(${background})` }}>
          <header className="App-header">
            <Header />
            <Router>
              <Routes>
                <Route path="/UPweb231117/" element={<Home />} />
              </Routes>
            </Router>
          </header>
      </div>
    );
  }
}

export default App;
