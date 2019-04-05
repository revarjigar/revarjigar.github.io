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
          <h1 className="font-medium page-2-header">WORK EXPERIENCE</h1>
          <ul className="key-feature-list">
            <li className="key-feature-block">
              <div className="vml2 poo" alt="merchants"/>
              <div>
                <h2 className="font-bold page-2-sub-header">VMLY&R - India</h2>
                <ul>
                  <li className="page-2-sub-text">
                    Role – Sr. Frontend Developer
                  </li>
                  <li className="page-2-sub-text">Samples <a href="https://www.vmlyr.com" target="_blank">VMLY&R.COM</a> and <a href="https://www.ford.com" target="_blank">FORD.COM</a></li>
                  <li className="page-2-sub-text">Details of this work can be found on my resume at <a
                    href="https://www.linkedin.com/in/jigar-revar-993a28126/" target="_blank">LinkedIn</a></li>
                </ul>
              </div>
            </li>
            <li className="key-feature-block">
              <div className="vml1 poo" alt="merchants"/>
              <div>
                <h2 className="font-bold page-2-sub-header">VMLY&R Kansas City, USA</h2>
                <ul>
                  <li className="page-2-sub-text">
                    Role – Sr. Frontend Developer
                  </li>
                  <li className="page-2-sub-text">Samples <a href="https://www.vmlyr.com" target="_blank">VMLY&R.COM</a> and <a href="https://www.sprint.com" target="_blank">SPRINT.COM</a></li>
                  <li className="page-2-sub-text">Details of this work can be found on my resume at <a
                    href="https://www.linkedin.com/in/jigar-revar-993a28126/" target="_blank">LinkedIn</a></li>
                </ul>
              </div>
            </li>
            <li className="key-feature-block">
              <div className="agena poo" alt="merchants"/>
              <div>
                <h2 className="font-bold page-2-sub-header">Agena Biosciences San Diego, USA</h2>
                <ul>
                  <li className="page-2-sub-text">
                    Role – Frontend Developer
                  </li>
                  <li className="page-2-sub-text">No Samples, a private project</li>
                  <li className="page-2-sub-text">Details of this work can be found on my resume at <a
                    href="https://www.linkedin.com/in/jigar-revar-993a28126/" target="_blank">LinkedIn</a></li>
                </ul>
              </div>
            </li>
            <li className="key-feature-block">
              <div className="epic poo" alt="merchants"/>
              <div>
                <h2 className="font-bold page-2-sub-header">Epic! Redwood City, USA</h2>
                <ul>
                  <li className="page-2-sub-text">
                    Role – Software Developer
                  </li>
                  <li className="page-2-sub-text">Samples <a href="https://www.getepic.com"
                                                             target="_blank">GETEPIC.COM</a></li>
                  <li className="page-2-sub-text">Details of this work can be found on my resume at <a
                    href="https://www.linkedin.com/in/jigar-revar-993a28126/" target="_blank">LinkedIn</a></li>
                </ul>
              </div>
            </li>
            <li className="key-feature-block">
              <div className="cs poo" alt="merchants"/>
              <div>
                <h2 className="font-bold page-2-sub-header">CrowdStar - Burlingame, USA</h2>
                <ul>
                  <li className="page-2-sub-text">
                    Role – Software Developer
                  </li>
                  <li className="page-2-sub-text">Samples <a href="https://en.wikipedia.org/wiki/CrowdStar"
                                                             target="_blank">CROWDSTAR.COM</a></li>
                  <li className="page-2-sub-text">Details of this work can be found on my resume at <a
                    href="https://www.linkedin.com/in/jigar-revar-993a28126/" target="_blank">LinkedIn</a></li>
                </ul>
              </div>
            </li>
            <li className="key-feature-block">
              <div className="hands poo" alt="merchants"/>
              <div>
                <h2 className="font-bold page-2-sub-header">30hands Learning - Boston, USA</h2>
                <ul>
                  <li className="page-2-sub-text">
                    Role – Web Developer
                  </li>
                  <li className="page-2-sub-text">Samples <a href="http://www.30hands.net/"
                                                             target="_blank">30HANDS.NET</a>,
                    <a href="http://www.30hands.com/" target="_blank">30HANDS.COM</a>,
                  </li>
                  <li className="page-2-sub-text">Details of this work can be found on my resume at <a
                    href="https://www.linkedin.com/in/jigar-revar-993a28126/" target="_blank">LinkedIn</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Page2;
