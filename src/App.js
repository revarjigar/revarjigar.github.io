import React, {Component} from 'react';
// import './App.css';
import Header from './components/Header';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
// import Test from './components/Test';
import Footer from './components/Footer';
// import Carousel from './components/Carousel';
// import Faq from './components/Faq';

class App extends Component {
  render() {
    return (
      <div className="App">
        <link rel="stylesheet" type="text/css" charSet="UTF-8"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
        <link rel="stylesheet" type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700" rel="stylesheet"/>
        <Header/>
        <Page1/>
        <Page2/>
        {/*<Test/>*/}
        {/*<Carousel/>*/}
        {/*<Faq/>*/}
        <Footer/>
      </div>
    );
  }
}

export default App;
