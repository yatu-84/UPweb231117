import React from 'react';
import '../css/overviewPage.css';
import photo1 from '../img/189.jpg';
import { Link } from 'react-router-dom';

class overviewPage extends React.Component {
  render() {                          
      return (
            <div className='overviewPage'>
                
                <img src={photo1} className="photo1" alt="photo by muto" />
                <br/>
                <p className='bandName'>ULTRA POWERS</p>
                <a className='overviewText'>hegehoeghoeg</a>
                <br/>
                <a className='overviewText'>heghoeghohohhoeghoeh</a>
                <br/>
                <a className='overviewText'>hogehogoegho</a>
                <br/>
                <a className='overviewText'>hogehogehgeeghoeg</a>
                <br/>
                <div className='overviewLinks'>
                    <a>Email : <a className='overviewLink' href='https://twitter.com/home'>???</a></a><br/>
                    <a>twitter/X : <a className='overviewLink' href='https://twitter.com/home'>???</a></a><br/>
                    <a>instagram : <a className='overviewLink' href='https://twitter.com/home'>???</a></a><br/>
                    <Link className='overviewLink' to={`/UPweb231117/member`}>members</Link>
                </div>
            </div>
        );
    }
}

export default overviewPage;
