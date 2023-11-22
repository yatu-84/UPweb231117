import React from 'react';
import '../css/schedulePage.css';

class schedulePage extends React.Component {
  render() {                          
      return (
            <div className='schedulePage'>

                <div className='sampleSheet'>
                    <section>
                    <p className='title'>ライブ予定は未だありません</p>
                        <div className='text'>
                            {/* <br/>
                            date:2012/12/12
                            <br/>
                            place:tokyo
                            <br/>
                            moremoremore
                            <br/>
                            hogehoge
                            <br/>
                            super
                            <br/>
                            final
                            <br/>
                            123456789012345678901234567890
                            <br/>
                            qwertyuiopppp */}
                        </div>
                    </section>
                </div>

                

            </div>
        );
    }
}

export default schedulePage;
