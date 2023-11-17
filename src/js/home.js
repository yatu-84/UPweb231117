import React from 'react';
import '../css/home.css';
import overview from '../img/overview.png'
import news from '../img/news.png'


class home extends React.Component {   //page1クラスにReact.Componentを継承する
  render() {                          //画面表示の為のrenderメソッドを定義する
      return (
          <div className='home'>
            <img src={overview} className="overview" alt="overview" />
            <br/>
            <img src={news} className="news" alt="news" />
          </div>
        );
    }
}

export default home;
