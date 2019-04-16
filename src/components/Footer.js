import React, {Component} from 'react';
import './Footer.css';
import DownloadCTA from './DownloadCTA';

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer">
          <div className="phone-left"/>
          <h1 className="font-medium footer-header">Get in touch with me now!</h1>
          <p className="footer-sub-header">Jigar Revar</p>
          <div className="download-cta-footer">
            <DownloadCTA/>
          </div>
          <div className="footer-contact">
            <p>MUMBAI, India</p>
            <p className="footer-contact2">Phone: +91 0000000000</p> <a className="footer-contact2" href="mailto:revarjigar@gmail.com">Click here to MAIL me</a>
            <ul>
              <li><a href="https://www.linkedin.com/in/jigar-revar-993a28126/" target="_blank">LINKEDIN</a></li>
              <li><a href="https://github.com/revarjigar/" target="_blank">GITHUB</a></li>
            </ul>
          </div>
          <div className="phone-right"/>
        </div>
      </div>
    );
  }
}

export default Footer;
