import React, {Component} from 'react';
import './Page2.css';
// import canvid from 'canvid';

// var landingVideo = '../static/assets/Landing-Video.mp4';
// var landingVideoJpg = '..../static/assets/download.jpg';

class Page2 extends Component {
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
      <div className="page-2">
        <div>
          <h1 className="font-medium page-2-header">TEST TEST TEST</h1>
          <ul className="key-feature-list">
            <li className="key-feature-block">
              <div className="float-left key-feature-1 poo" alt="merchants"/>
              <div className="float-right">
                <h2 className="font-bold page-2-sub-header">TEST TEST TEST</h2>
                <ul className="padding-none">
                  <li className="page-2-sub-text">
                    TEST TEST TEST
                  </li>
                </ul>
              </div>
            </li>
            <li className="key-feature-block">
              <div className="float-left key-feature-1 poo" alt="merchants"/>
              <div className="float-right">
                <h2 className="font-bold page-2-sub-header">TEST TEST TEST</h2>
                <ul className="padding-none">
                  <li className="page-2-sub-text">
                    TEST TEST TEST<br className="br-xs" />
                    TEST TEST TEST
                  </li>
                </ul>
              </div>
            </li>
            <li className="key-feature-block">
              <div className="float-left key-feature-1 poo" alt="merchants"/>
              <div className="float-right">
                <h2 className="font-bold page-2-sub-header">TEST TEST TEST</h2>
                <ul className="padding-none">
                  <li className="page-2-sub-text">
                    TEST TEST TEST<br className="br-xs" />
                    TEST TEST TEST
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        {/*<div className="video-block">*/}
          {/*<div className="video-frame"></div>*/}
          {/*<div className="video">*/}
            {/*<video controls={false} autoPlay={true} muted={true} loop={true} playsInline={true}>*/}
              {/*/!*<source src={landingVideo} type="video/mp4"/>*!/*/}
              {/*<div className="alternate-video"></div>*/}
            {/*</video>*/}
          {/*</div>*/}
        {/*</div>*/}
      </div>
    );
  }
}

export default Page2;
