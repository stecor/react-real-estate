import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Filter from './Filter'
import Listings from './Listings'
import listingsData from './data/listingsData'

class App extends Component {
  constructor () {
    super()
    this.state = {
      listingsData,
      // price
      min_price: 0,
      max_price: 1000000,
      // floor
      min_floor_space: 0,
      max_floor_space: 50000,
      // extras
      elevator: false,
      finished_basement: false,
      gym: false,
      swimming_pool:false,
      filterData: listingsData
    }
    this.change = this.change.bind(this)
    this.filterData = this.filterData.bind(this)
  }
  
  change(event){
    
    var name = event.target.name
    var value = (event.target.type === 'checkbox')? event.target.checked :event.target.value
    
    this.setState({
      [name]: value
    }, () => {
      console.log(this.state);
      this.filterData()
    })
  }
  
  filterData(){
    var newData = this.state.listingsData.filter((item) => {
      return item.price >= this.state.min_price && 
              item.price <= this.state.max_price && 
              item.floorSpace >= this.state.min_floor_space && 
              item.floorSpace <= this.state.max_floor_space
    })
    
    this.setState({
      filterData: newData
    })
  }
  
  
  
  render () {
    return (
      <div>
        <Header />
        <section id="content-area">
          <Filter change={this.change}  globalState={this.state}/>
          <Listings listingsData={this.state.filterData}/>
        </section>
      </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
