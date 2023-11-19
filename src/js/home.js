import React from 'react';
import '../css/home.css';
import overview from '../img/overview.png'
import news from '../img/news.png'
import bass from '../img/bass.png'
import shield from '../img/shield.png'
import schedule from '../img/schedule.png'
import member from '../img/member.png'

class home extends React.Component {   //page1クラスにReact.Componentを継承する
  render() {                          //画面表示の為のrenderメソッドを定義する
      return (
          <div className='home'>
            <img src={overview} className="overview" alt="overview" />
            <br/>
            <img src={news} className="news" alt="news" />
            <img src={bass} className="bass" alt="bass" />
            <br/>
            <img src={shield} className="shield" alt="shield" />
            <img src={schedule} className="schedule" alt="schedule" />
            <br/>
            <img src={member} className="member" alt="member" />
          </div>
        );
    }
}

export default home;
