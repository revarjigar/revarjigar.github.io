import React, {Component} from 'react';
import './Page1.css';
import DownloadCTA from './DownloadCTA';

class Page1 extends Component {
  render() {
    return (
      <div className="page-1">
        <h1 className="font-bold page-1-header">JIGAR REVAR</h1>
        <p className="font-medium page-1-sub-header">FRONT END DEVELOPER</p>
        <p className="font-medium page-1-sub-header margin-none">
          I am a software developer who enjoys creating novel interactive experiences. My interests include: real-time interaction, application programming, analytics, and enhanced user interaction.
        </p>
        <p className="font-medium page-1-sub-header padding-b10">
          I am from Mumbai. I studied Computer Science at the University of Massachusetts - Boston, and Bachelor of Engineering at University of Mumbai.
        </p>
        <div className="page-1-image-container">
          <div className="deco-left"/>
          <div className="page-1-image"/>
          <div className="deco-right"/>
        </div>
        <p id="p_wrap"></p>
        <p className="end-header font-light">
          Web Technologies
        </p>
        <p id="p_wrap"></p>
        <p className="end-sub-header">
          HTML5, CSS3, Adobe Experience Manager 6.0, AJAX, Object oriented JavaScript,<br className="br-xs" />
          TypeScript, RxJS, jQuery, JSON, XML, Bootstrap, AngularJs 1.6 - 4.0, NodeJs,<br className="br-xs" />
          HandlebarJs, LESS/SASS, GIT/SVN, ES6, Jade(Pug), JEST.
        </p>
      </div>
    );
  }
}

export default Page1;
