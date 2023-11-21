import React from 'react';
import '../css/newsPage.css';

class newsPage extends React.Component {
  render() {                          
      return (
            <div className='newsPage'>

                <div className='sampleSheet'>
                    <section>
                        <p className='title'>ホームページ開設</p>
                        <div className='text'>
                            <br/>
                            ホームページを開設しました。
                            <br/>
                            写真は
                            <a href='https://twitter.com/Eagle6103'>武藤さん</a>
                            に撮って頂いた物を使用しました。
                            <br/>
                            武藤さんありがとうございます。
                            <br/><br/>
                            2023 12/??
                        </div>
                    </section>
                </div>

                <div className='sampleSheet'>
                    <section>
                        <p className='title'>news2</p>
                        <div className='text'>
                            <br/>
                            mazilove
                            <br/>
                            kick
                            <br/>
                            hoge
                            <br/>
                            hogehoge
                            <br/>
                            super
                            <br/>
                            final
                            <br/>
                            123456789012345678901234567890
                            <br/>
                            qwertyuiopppp
                            <br/>
                            qwertyuiopppp
                            <br/>
                            qwertyuiopppp
                            <br/>
                            qwertyuiopppp
                            <br/>
                            qwertyuiopppp
                        </div>
                    </section>
                </div>

            </div>
        );
    }
}

export default newsPage;
