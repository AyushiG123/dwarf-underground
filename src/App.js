import React, { Component } from 'react';

import './App.css';
import Header from './Header'
import MainArticle from './MainArticle'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="expanded row">
        <MainArticle />
          <aside className="large-4 medium-12 columns">
            <div className="ad">
              <h3>The Last Hammer You'll Ever Need</h3>
              <div className="ad-image">
                <img src="https://s-media-cache-ak0.pinimg.com/originals/b4/d5/ab/b4d5ab4a82b8f7efc1adaf548df1d089.jpg" alt="hammer" />
                <a href="#">visit sponsor</a>
              </div>  
              <h4>Mining diamonds or crushing the skulls of your enemies, the SmashMaster 4000 does it all</h4>
              <p className="ad-text">Epsum factorial non deposit quid pro quo hic escorol. Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum. Defacto lingo est igpay atinlay. Marquee selectus non provisio incongruous feline nolo contendre. Gratuitous octopus niacin, sodium glutimate. Quote meon an estimate et non interruptus stadium.</p>

              <p className="ad-text">Sic tempus fugit esperanto hiccup estrogen. Glorious baklava ex librus hup hey ad infinitum. Non sequitur condominium facile et geranium incognito. Epsum factorial non deposit quid pro quo hic escorol. Marquee selectus non provisio incongruous feline nolo contendre Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum.</p>
            </div>
          </aside>

          <div className="small-12 columns other-articles">
            <h2>From around the Realm</h2>
            <div className="small-6 medium-3 columns other-article">
              <a href="#">
                <img src="https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif" alt="orc" />
                <p>Single Orcs in Indianapolis</p>
              </a>  
            </div>
            <div className="small-6 medium-3 columns other-article">
              <a href="#">
                <img src="https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg" alt="mountain" />
                <p>You won't believe what's under this mountain</p>
              </a>  
            </div>
            <div className="small-6 medium-3 columns other-article">
              <a href="#">
                <img src="http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg" alt="gold" />
                <p>Mine 20% more gold with One Weird Trick</p>
              </a> 
            </div>
            <div className="small-6 medium-3 columns other-article">
              <a href="#">
                <img src="http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg" alt="hobbit" />
                <p>Surprise for Indiana Hobbits born before 1999</p>
              </a> 
            </div>
          </div>
        </main>

        <footer className="expanded row">
          <h6>&copy; 2017 Erebor Industries</h6>
          <h6 className="float-right">All rights reserved</h6>
        </footer>

        </div>
    );
  }
}

export default App;
