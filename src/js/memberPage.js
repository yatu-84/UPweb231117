import React from 'react';
import '../css/memberPage.css';
import nagata from '../img/nagata.jpg';
import kariya from '../img/kariya.jpg';
import sato from '../img/sato.jpg';

class memberPage extends React.Component {
    render() {                          
        return (
            <div>
                <div className='memberSheet'>
                    <img src={nagata} className="photo" alt="photo by muto" />
                    <br/>
                    <p className='name'>NAGATA GAI</p>
                    <div className='memberText'>
                        ULTRA POWERSギタリスト
                        <br/>
                        1万年に一度の存在であり、
                        <br/>
                        彼の奏でるメロディを感じ取るために人間の感情は誕生したといわれている。
                        <br/>
                    </div>
                    <div className='memberLinks'>
                        <a>Email : <a className='memberLink' href='mailto:guytarist9kv8@gmail.com'>guytarist9kv8@gmail.com</a></a><br/>
                        <a>twitter/X : <a className='memberLink' href='https://twitter.com/guytarist'>https://twitter.com/guytarist</a></a><br/>
                        <a>instagram : <a className='memberLink' href='https://www.instagram.com/guytarist_'>https://www.instagram.com/guytarist_</a></a><br/>
                    </div>
                </div>

                <div className='memberSheet'>
                    <img src={kariya} className="photo" alt="photo by muto" />
                    <br/>
                    <p className='name'>KARIYA SEITA</p>
                    <div className='memberText'>
                        ULTRA POWERSベーシスト
                        <br/>
                        1万年に一度の存在であり、
                        <br/>
                        彼が震わせる弦のために物理法則が誕生したといわれている。
                        <br/>
                    </div>
                    <div className='memberLinks'>
                        <a>Email : <a className='memberLink' href='mailto:kariyaseita@gmail.com'>kariyaseita@gmail.com</a></a><br/>
                        {/* <a>twitter/X : <a className='memberLink' href='https://twitter.com/home'>???</a></a><br/> */}
                        <a>instagram : <a className='memberLink' href='https://www.instagram.com/kariyaseita/'>https://www.instagram.com/kariyaseita</a></a><br/>
                    </div>
                </div>

                <div className='memberSheet'>
                    <img src={sato} className="photo" alt="photo by muto" />
                    <br/>
                    <p className='name'>SATO ISSEI</p>
                    <div className='memberText'>
                        ULTRA POWERSドラマー
                        <br/>
                        1万年に一度の存在であり、
                        <br/>
                        彼の踏むバスドラムは宇宙誕生の音と同じといわれている。
                        <br/>
                    </div>
                    <div className='memberLinks'>
                        {/* <a>Email : <a className='memberLink' href='https://twitter.com/home'>???</a></a><br/> */}
                        {/* <a>twitter/X : <a className='memberLink' href='https://twitter.com/home'>???</a></a><br/> */}
                        <a>instagram : <a className='memberLink' href='https://www.instagram.com/issei_isentertainment'>https://www.instagram.com/issei_isentertainment</a></a><br/>
                    </div>
                </div>




            </div>
        );
    }
}

export default memberPage;
