import React from 'react'
import ReactDOM from 'react-dom'

const MiniArticles = (props) => {
  return (
    <a href ="#">
      {props.article.image} {props.article.para}
    </a>
  )
}

class BottomArticle extends React.Component {
  constructor(){
    super()
    this.state = {
      miniArticles: [
      {image: <img src="https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif" alt="orc"/>, para: 'Single Orcs in Indianapolis'},
        {image: <img src="https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg" alt="mountain"/>, para: 'You won\'t believe what\'s under this mountain'},
        {image: <img src="http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg" alt="gold"/>, para: 'Mine 20% more gold with One Weird Trick'},
        {image: <img src="http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg" alt="hobbit"/> , para:'Surprise for Indiana Hobbits born before 1999'}
      ]
    }
  }
    render(){
     return (
        <div className="small-12 columns other-articles">
        <h2>From around the Realm</h2>
        <div className="small-6 medium-3 columns other-article">
            {this.state.miniArticles.map(currentArticle => <MiniArticles article = {currentArticle} />)} 
        </div>

      </div>
   )
}
}

ReactDOM.render(
  <BottomArticle />,
  document.querySelector('#root')
)

export default BottomArticle