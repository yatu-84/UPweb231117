import React from 'react';
import '../css/header.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const returnTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

class header extends React.Component {   //page1クラスにReact.Componentを継承する
  render() {                          //画面表示の為のrenderメソッドを定義する
      return (
          <div className='header'>
            <React.Fragment>
              <AppBar position="fixed" color="primary" className='headerContent'>
                <div className='headerChar' onClick={returnTop}>ULTRA POWERS</div>
              </AppBar>
              <Toolbar />
            </React.Fragment>
          </div>
        );
    }
}

export default header;
