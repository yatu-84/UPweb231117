import React from 'react';
import '../css/schedulePage.css';

class schedulePage extends React.Component {
  render() {                          
      return (
            <div className='schedulePage'>

                <div className='sampleSheet'>
                    <section>
                    <p className='title'>2024/2/22 BABEL - The Rock Tower</p>
                        <div className='text'>
                            <br/>
                            2024年2月22日(木)
                            <br/>
                            会場：<a href='https://www.babel-rocktower.net/'>BABEL - The Rock Tower</a>
                            {/* <br/><br/>
                            <a href='https://twitcasting.tv/tachikawababel/shop/0'>配信チケット購入はこちらから</a> */}
                            <br/>
                        </div>
                    </section>
                </div>

                

            </div>
        );
    }
}

export default schedulePage;
