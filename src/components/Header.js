import React, {Component} from 'react'
import $ from 'jquery'
import '../App.css';
import './Header.css';

var doesHeaderNeedShadow = true;
const addHeaderShadow = () => {
  $('#header').css({
    'box-shadow': 'rgba(0, 0, 0, 0.15) 0px 0px 40px',
    '-moz-box-shadow': 'rgba(0, 0, 0, 0.15) 0px 0px 40px',
    '-webkit-box-shadow': 'rgba(0, 0, 0, 0.15) 0px 0px 40px'
  });
};
const removeHeaderShadow = () => {
  $('#header').css({
    'box-shadow': 'none',
    '-moz-box-shadow': 'none',
    '-webkit-box-shadow': 'none'
  });
};

class Header extends Component {    
  componentDidMount () {
    if (typeof $(window) !== 'undefined') {
      $(window).scroll(function () {
        if ($(this).scrollTop() === 0) {
          removeHeaderShadow();
        } else {
          addHeaderShadow();
        }
      });
    }
  }

  isMobile () {
    const windowWidth = document.getElementById('header').offsetWidth;
    if (windowWidth <= 480) {
      return true;
    } else return false;
  }

  scrollTo (pageName, additionalOffset) {
    let offSet = 80;
    if (this.isMobile()) {
      this.hamburgerToggle();
      offSet = 85;
    }
    if ($(pageName).length > 0) {
      $('html, body').animate({
        scrollTop: $(pageName).offset().top - offSet - additionalOffset
      }, 600);
    }
  }

  hamburgerToggle () {
    document.querySelector('.hamburger-container').classList.toggle('no-height');
    document.querySelector('.hamburger-image').classList.toggle('hamburger-logo-close');
    if (doesHeaderNeedShadow) {
      addHeaderShadow();
      doesHeaderNeedShadow = false;
    } else {
      removeHeaderShadow();
      doesHeaderNeedShadow = true;
    }
  };

  render() {
   
    return (
      <div>
        <div className="navbar" id="header">
          <div className="header-logo" alt="header-logo"/>
          <div className="float-right header-nav">
            <a onClick={this.scrollTo.bind(this, '.page-1', 0)} className="font-medium">Top</a>
            <a onClick={this.scrollTo.bind(this, '.page-2', 0)} className="font-medium">Work Experience</a>
            <a onClick={this.scrollTo.bind(this, '.test', 0)} className="font-medium">Education</a>
            {/*<a onClick={this.scrollTo.bind(this, '.carousel-parent', 0)} className="font-medium">Carousel</a>*/}
            {/*<a onClick={this.scrollTo.bind(this, '.faqs-container', 0)} className="font-medium">TEST TEST TEST</a>*/}
            <a onClick={this.scrollTo.bind(this, '.footer', 0)} className="font-medium">Contact Me</a>
          </div>
          <div className="hamburger" onClick={this.hamburgerToggle.bind(this)}>
            <div className="hamburger-image hamburger-logo" alt=""/>
          </div>
        </div>
        <div className="hamburger-container no-height">
          <a onClick={this.scrollTo.bind(this, '.page-1', 0)} className="font-medium">Top</a>
          <a onClick={this.scrollTo.bind(this, '.page-2', 0)} className="font-medium">Work Experience</a>
          <a onClick={this.scrollTo.bind(this, '.test', 0)} className="font-medium">Education</a>
          {/*<a onClick={this.scrollTo.bind(this, '.faqs-container', 0)} className="font-medium">TEST TEST TEST</a>*/}
          <a onClick={this.scrollTo.bind(this, '.footer', 0)} className="font-medium">Contact Me</a>
        </div>
      </div>
    );
  }
}

export default Header;
