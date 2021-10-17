import React from 'react';
import Fade from 'react-reveal/Fade';

class FadeExample extends React.Component {
    render() {
      return (
        <div>
          <Fade top>
          <div className="artist__title">
            
                <h1 className="title">TATTOO ARTIST</h1>
                <img className="guion" src="assets/guion.png" alt=""/>
            </div>
          </Fade>
        </div>
      );
    }
  }
  
  export default FadeExample;