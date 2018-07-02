import React from 'react'

const Header = () => {
   return (
    <div className="expanded row header">
    <div className="clearfix">
      <div className="float-left logo">
        <img src="http://www.iconninja.com/files/409/4/1006/axe-icon.svg" alt="axe" />
      </div>
      <div className="float-right nav-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Log in</a>
      </div>
    </div>
    <div className="headline text-center small-12 columns">
      <h1>The Dwarf Underground</h1>
      <h3>Delving deep for the <span className="gold">shiniest</span> news</h3>
    </div>
  </div> 
   )
}

export default Header