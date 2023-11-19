import React from 'react';
import '../css/footer.css';
import { MDBFooter } from 'mdb-react-ui-kit';

class footer extends React.Component {   //page1クラスにReact.Componentを継承する
  render() {                          //画面表示の為のrenderメソッドを定義する
      return (
            <div className='footer'>
                <MDBFooter bgColor='light' className='text-center text-lg-left'>
                    <div className='text-center p-3'>
                        <div className='footerChar'>
                            {new Date().getFullYear()} Copyright:{' '}
                            URTLA POWERS
                        </div>
                    </div>
                </MDBFooter>
            </div>
        );
    }
}

export default footer;
