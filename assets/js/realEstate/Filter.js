import React, { Component} from 'react'


export default class Filter extends Component {
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
      <section id="filter">
       <div className="inside">
         <h4>Filter</h4>
         <select name= "neighbourhood" className="filters neighbourhood">
          <option>Ridgewood</option>
         </select>
         <select name= "housetype" className="filters housetype">
          <option>Ranch</option>
         </select>
         <select name= "bedrooms" className="filters bedrooms">
          <option>2 bedrooms</option>
         </select>
         <div className="filters price">
          <span className="title price">Price</span>
          <input type="text" name ="min-price" className="min-price" />
          <input type="text" name ="max-price" className="max-price" />
         </div>
         <div className="filters floor-space">
          <span className="title floor-space">Floor Space</span>
          <input type="text" name ="min-floor-space" className="min-floor-space" />
          <input type="text" name ="max-floor-space" className="max-floor-space" />
         </div>
         <div className="filters extras">
          <span className="title">Extras</span>
          <label htmlFor="elevator">
            <span>Elevator</span> 
            <input type="checkbox" value="elevator" name="elevator"/>
          </label>
         
          <label htmlFor="swimming-pool">
            <span>Swimming Pool</span> 
            <input type="checkbox" value="swimming-pool" name="swimming-pool"/>
          </label>
               
          <label htmlFor="finished-basement">
            <span>Finished Basement</span> 
            <input type="checkbox" value="finished-basement" name="finished-basement"/>
          </label>
         
          <label htmlFor="gym">
            <span>Gym</span> 
            <input type="checkbox" value="gym" name="gym"/>
          </label>
          
         </div>
       </div>
      </section>
    )
  }
}


