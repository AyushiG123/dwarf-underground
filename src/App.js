import React, { Component } from 'react';

import './App.css';
import Header from './Header'
import MainArticle from './MainArticle'
import SideArticle from './SideArticle'
import BottomArticle from './BottomArticle'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="expanded row">
        <MainArticle />
        <SideArticle />
        <BottomArticle />
        </main>
      <Footer />
      </div>
    );
  }
}

export default App;
