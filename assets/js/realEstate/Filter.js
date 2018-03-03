import React, { Component} from 'react'


export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
      
    }
  }
  
  render () {
    return (
      <section id="filter">
       <div className="inside">
         <h4>Filter</h4>
         <select name= "neighbourhood" className="filters neighbourhood" onChange={this.props.change}>
          <option value="Ridgewood" >Ridgewood</option>
          <option value="Miami">Miami</option>
         </select>
         <select name= "housetype" className="filters housetype" onChange={this.props.change}>
          <option value="House">House</option>
          <option value="Apartment">Apartment</option>
          <option value="Studio">Studio</option>
          <option value="Room">Room</option>
         </select>
         <select name= "bedrooms" className="filters bedrooms" onChange={this.props.change}>
          <option value="1">1 bedrooms</option>
          <option value="2">2 bedrooms</option>
          <option value="3">3 bedrooms</option>
          <option value="4">4 bedrooms</option>
          
         </select>
         <div className="filters price">
          <span className="title price">Price</span>
          <input type="text" name ="min_price" className="min-price" onChange={this.props.change} value={this.props.globalState.min_price}/>
          <input type="text" name ="max_price" className="max-price" onChange={this.props.change} value={this.props.globalState.max_price}/>
         </div>
         <div className="filters floor-space">
          <span className="title floor-space">Floor Space</span>
          <input type="text" name ="min_floor_space" className="min-floor-space" onChange={this.props.change} value={this.props.globalState.min_floor_space}/>
          <input type="text" name ="max_floor_space" className="max-floor-space" onChange={this.props.change} value={this.props.globalState.max_floor_space}/>
         </div>
         
         <div className="filters extras">
          <span className="title">Extras</span>
          
          <label htmlFor="elevator">
            <span>Elevator</span> 
            <input type="checkbox" value="elevator" name="elevator" onChange={this.props.change}/>
          </label>
         
          <label htmlFor="swimming_pool">
            <span>Swimming Pool</span> 
            <input type="checkbox" value="swimming-pool" name="swimming_pool" onChange={this.props.change}/>
          </label>
               
          <label htmlFor="finished_basement">
            <span>Finished Basement</span> 
            <input type="checkbox" value="finished-basement" name="finished_basement" onChange={this.props.change}/>
          </label>
         
          <label htmlFor="gym">
            <span>Gym</span> 
            <input type="checkbox" value="gym" name="gym" onChange={this.props.change}/>
          </label>
          
         </div>
       </div>
      </section>
    )
  }
}


