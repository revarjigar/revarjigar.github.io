import React, {Component} from 'react';
import './Page1.css';
import DownloadCTA from './DownloadCTA';

class Page1 extends Component {
  render() {
    return (
      <div className="page-1">
        <h1 className="font-medium page-1-header">TEST TEST TEST</h1>
        <p className="page-1-sub-header">TEST TEST TEST</p>
        <div style={{paddingBottom: '80px'}}>
          <DownloadCTA/>
        </div>
        <div className="page-1-image-container">
          <div className="deco-left"/>
          <div className="page-1-image"/>
          <div className="deco-right"/>
        </div>
        <p id="p_wrap"></p>
        <p className="end-header font-light">
          TEST TEST TEST
        </p>
        <p id="p_wrap"></p>
        <p className="end-sub-header">
          TEST TEST TEST<br className="br-xs" />
          TEST TEST TEST<br className="br-xs" />
          TEST TEST TEST
        </p>
      </div>
    );
  }
}

export default Page1;
