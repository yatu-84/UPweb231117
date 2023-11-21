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
                <div className='overviewText'>
                    hegehoeghoeg
                    <br/>
                    hehegho eghohohh oeg hoehe gho eghoho hho egho egho egh ohoh hoe ghoeh
                    <br/>
                    ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
                    <br/>
                    hogehogehgeeghoeg
                    <br/>
                </div>
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
