import React from 'react';              //Reactを読み込んでいる
import { Link } from 'react-router-dom';//Linkタブを読み込む

function MyButton() {
    return (
      <button>
        I'm a button
      </button>
    );
}



class page1 extends React.Component {   //page1クラスにReact.Componentを継承する

    render() {                          //画面表示の為のrenderメソッドを定義する
        return (
            <div className='page1'>


                
                this is page1(≧▽≦)
                <br/>{/* //改行のhtmlタブ */}
                <Link to={`/react-231115/page2`}>Go To page2</Link>  {/* //Go To page2をクリックするとhttp://localhost:3000/page2に遷移する */}
            </div>
        );
    }
}

export default page1;  