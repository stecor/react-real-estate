import React, { Component} from 'react'


export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render () {
    return (
      <header>
      <div className="logo"><span className="detailLogo">realties.ca</span><br/>real estate</div>
      
      <nav>
        <a href="#">Create ads</a>
        <a href="#">About us</a>
        <a href="#">Log in</a>
        <a href="#" className="register-btn">Register</a>
      </nav>
      </header>
    )
  }
}


