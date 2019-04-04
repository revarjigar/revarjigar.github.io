import React, {Component} from 'react';

class DownloadCTA extends Component {
  render() {

    const downloadCTA = (whichCTA) => {
      window.location = (whichCTA === 'google') ? '#' : '#';
    };

    return (
      <div className="download-cta">
        <div className="apple" onClick={downloadCTA.bind(this, 'apple')}></div>
        <div className="google" onClick={downloadCTA.bind(this, 'google')}></div>
      </div>
    );
  }
}

export default DownloadCTA;
