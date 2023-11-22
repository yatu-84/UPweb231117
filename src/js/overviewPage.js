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
                    日本のポップスバンド
                    <br/>
                    いつでも全ての力をかけて演奏をし、
                    <br/>
                    その力は全てを救うほど強大であると言われている。
                    <br/><br/>
                    それが「ULTRA POWER」
                    <br/>
                </div>
                <div className='overviewVideos'>
                    <div className='overviewVideo'>
                        <Link className='overviewVideo' to={`/UPweb231117/member`}>MEMBERS</Link>
                    </div>
                    <br/>
                    <div className='overviewVideo'>
                        <a className='overviewVideo' href='https://youtu.be/4kbpeFYCS6c?si=f7n9wkEoPT61UjAd'>ライブ動画</a><br/>
                    </div>
                </div>
                <div className='overviewLinks'>
                    <a>Email : <a className='overviewLink' href='mailto:ultrapowers0909@gmail.com'>ultrapowers0909@gmail.com</a></a><br/>
                    <a>twitter/X : <a className='overviewLink' href='https://twitter.com/UltraPowers0909'>https://twitter.com/UltraPowers0909</a></a><br/>
                    {/* <a>instagram : <a className='overviewLink' href='https://twitter.com/home'>???</a></a><br/> */}
                </div>
            </div>
        );
    }
}

export default overviewPage;
