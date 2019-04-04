import React, {Component} from 'react';
import './Faq.css';
import $ from 'jquery';

class Faq extends Component {

  componentDidMount() {

    var Accordion = function (el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;

      var links = this.el.find('.article-title');
      links.on('click', {
        el: this.el,
        multiple: this.multiple
      }, this.dropdown)
    };

    Accordion.prototype.dropdown = function (e) {
      var $el = e.data.el;
      var $next = $(this).next();

      $next.slideToggle();
      $(this).find('#faq-question-image').toggleClass('faq-answer-image');
      $(this).parent().find('.article-title').toggleClass('faq-question-open-tray');
      $(this).parent().toggleClass('open');
    };
    var accordion = new Accordion($('.accordion-container'), false);
  }

  render() {
    return (
      <div className="faqs-container">
        <div className="faqs">
          <h1 className="font-medium faqs-header">Frequently Asked Questions</h1>
          <div className="faq-box">
            <div className="faq-question-holder">
              <div className="faq-question-sub-holder float-left">
                <div id="accordion" className="accordion-container">
                  <div className="content-entry">
                    <div className="article-title">
                      <p className="special-article">TEST TEST TEST?</p>
                      <div id="faq-question-image" className="faq-question-image"></div>
                    </div>
                    <div className="accordion-content">
                      <p className="margin-none">TEST TEST TEST</p>
                    </div>
                  </div>
                </div>
                <div id="accordion" className="accordion-container">
                  <div className="content-entry">
                    <div className="article-title">
                      <p>TEST TEST TEST?</p>
                      <div id="faq-question-image" className="faq-question-image"/>
                    </div>
                    <div className="accordion-content">
                      <p className="margin-none">TEST TEST TEST</p>
                    </div>
                  </div>
                </div>

                <div id="accordion" className="accordion-container">
                  <div className="content-entry">
                    <div className="article-title">
                      <p>TEST TEST TEST</p>
                      <div id="faq-question-image" className="faq-question-image"/>
                    </div>
                    <div className="accordion-content">
                      <p className="margin-none">
                        TEST TEST TEST
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="faq-question-holder">
              <div className="faq-question-sub-holder">
                <div id="accordion" className="accordion-container">
                  <div className="content-entry">
                    <div className="article-title">
                      <p>TEST TEST TEST</p>
                      <div id="faq-question-image" className="faq-question-image"/>
                    </div>
                    <div className="accordion-content">
                      <p className="margin-none">
                        TEST TEST TEST
                      </p>
                    </div>
                  </div>
                </div>

                <div id="accordion" className="accordion-container">
                  <div className="content-entry">
                    <div className="article-title">
                      <p>TEST TEST TEST</p>
                      <div id="faq-question-image" className="faq-question-image"/>
                    </div>
                    <div className="accordion-content">
                      <p className="margin-none">
                        TEST TEST TEST
                      </p>
                    </div>
                  </div>
                </div>

                <div id="accordion" className="accordion-container">
                  <div className="content-entry">
                    <div className="article-title">
                      <p>TEST TEST TEST</p>
                      <div id="faq-question-image" className="faq-question-image"/>
                    </div>
                    <div className="accordion-content">
                      <p className="margin-none">
                        TEST TEST TEST
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Faq;
