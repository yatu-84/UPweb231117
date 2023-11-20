import React from 'react';
import '../css/home.css';
import overview from '../img/overview.png'
import news from '../img/news.png'
import bass from '../img/bass.png'
import shield from '../img/shield.png'
import schedule from '../img/schedule.png'
import member from '../img/member.png'
import { Link } from 'react-router-dom';

class home extends React.Component {   //page1クラスにReact.Componentを継承する
  render() {                          //画面表示の為のrenderメソッドを定義する
      return (
          <div className='home'>

            <Link to={`/UPweb231117/overview`}>
                <img src={overview} className="overview" alt="overview" />
            </Link>

            <br/>

            <Link to={`/UPweb231117/news`}>
                <img src={news} className="news" alt="news" />
            </Link>

            <img src={bass} className="bass" alt="bass" />

            <br/>

            <img src={shield} className="shield" alt="shield" />

            <Link to={`/UPweb231117/schedule`}>
                <img src={schedule} className="schedule" alt="schedule" />
            </Link>

            <br/>

            <Link to={`/UPweb231117/member`}>
                <img src={member} className="member" alt="member" />
            </Link>

          </div>
        );
    }
}

export default home;
