import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './js/header'; 
import Home from './js/home'; 
import OverviewPage from './js/overviewPage'; 
import NewsPage from './js/newsPage'; 
import SchedulePage from './js/schedukePage'; 
import MemberPage from './js/memberPage'; 
import Footer from './js/footer';
import './App.css';

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
                  <Route path="/UPweb231117/overview" element={<OverviewPage />} />
                  <Route path="/UPweb231117/news" element={<NewsPage />} />
                  <Route path="/UPweb231117/schedule" element={<SchedulePage />} />
                  <Route path="/UPweb231117/member" element={<MemberPage />} />
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
