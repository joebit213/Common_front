import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import Food from './components/box';


class App extends Component {
  constructor(){
    super();
    this.state = {
      foods: foods,
      details : [],
      precio: 0
    }
  }



 addFood = (detail) =>{
 //console.log(detail)
 this.state.details.push(detail);
 this.setState({details : this.state.details, precio: this.state.precio + detail.precio})

 }


 deleteFood = (i) => {
  const copyFood = [...this.state.details]
  copyFood.splice(i, 1);
  this.setState({
    details: copyFood,
    precio: this.state.precio-this.state.precio///arreglar <-
  })
};

 
 
render(){
  return (
      <div style={{padding:'50px 0'}}>
        <div>
           {this.state.foods.map((e,i) => {
                return (
                  <div>
                    <Food key={i} {...e} addFood={detail => this.addFood(detail)}/>                  
                
            </div>
                  
                )
              })
           }

           <h3 className="title">Comanda</h3>
                <ul>
                  {this.state.details.map((e,i) => <li key={i}>{e.cantidad} {e.name} = $ {e.precio} <button onClick={ () => {
                      this.deleteFood(i)}}>x</button> </li> )}
                </ul>
                <p>Total: $ {this.state.precio} </p>
        </div>
      </div>
  )
 } 
}

export default App;