import React, {Component} from 'react';
import './Footer.css';
import DownloadCTA from './DownloadCTA';

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer">
          <div className="phone-left"/>
          <h1 className="font-medium footer-header">TEST TEST TEST!</h1>
          <p className="footer-sub-header">TEST TEST TEST</p>
          <div className="download-cta-footer">
            <DownloadCTA/>
          </div>
          <div className="footer-contact">
            <p>TEST TEST TEST</p>
            <p className="footer-contact2">TEST TEST TEST </p>
            <a className="footer-contact2" href="mailto:TEST TEST TEST">TEST TEST TEST</a>
            <ul><li><a href="/terms-of-use">TEST TEST TEST</a></li><li><a href="/privacy-policy">TEST TEST TEST</a></li></ul>
          </div>
          <div className="phone-right"/>
        </div>
      </div>
    );
  }
}

export default Footer;
