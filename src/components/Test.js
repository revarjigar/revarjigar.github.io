import React, {Component} from 'react';
import './Test.css';
// import canvid from 'canvid';
// var landingVideo = '../static/assets/Landing-Video.mp4';
// var landingVideoJpg = '..../static/assets/download.jpg';
class Test extends Component {
  componentDidMount() {
    // let asset = {landingVideoJpg};
    // let canvidOptions = {
    //   selector: '.alternate-video',
    //   videos: {
    //     clip1: {
    //       src: asset.landingVideoJpg,
    //       frames: 360,
    //       cols: 10
    //     }
    //   },
    //   width: 257,
    //   height: 552,
    //   loaded: () => canvidControl.play('clip1')
    // };
    // let canvidControl = canvid(canvidOptions);
  }

  render() {
    return (
      <div className="page-2 faqs-container">
        <div style={{width: '80%'}}>
          <h1 className="font-medium page-2-header">Education</h1>
          <ul className="key-feature-list">
            <li className="key-feature-block">
              <div className="ub poo" alt="merchants"/>
              <div>
                <h2 className="font-bold page-2-sub-header">Masters in Computer Science</h2>
                <ul>
                  <li className="page-2-sub-text">
                    University of Massachusetts Boston
                  </li>
                </ul>
              </div>
            </li>
            <li className="key-feature-block">
              <div className="mu" alt="merchants"/>
              <div>
                <h2 className="font-bold page-2-sub-header">Bachelors in Engineering</h2>
                <ul>
                  <li className="page-2-sub-text">
                    University of Mumbai
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Test;
