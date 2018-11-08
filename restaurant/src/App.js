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
      <div className='res'>
      <h1>Restaurante Common!</h1>
      </div>
      <div className='carta'>
        <h2 >Menu</h2>
      </div>
        <div>
           <div className='menu'>
           {this.state.foods.map((e,i) => {
                return (
                  <div>
                    <Food key={i} {...e} addFood={detail => this.addFood(detail)}/>                    
                 </div>
                  
                )
              })
           }
           </div>
            <div className='comanda'>
            <h3 className="title">Comanda</h3>
                <ul>
                  {this.state.details.map((e,i) => <li key={i}>{e.cantidad} {e.name} = $ {e.precio} <button onClick={ () => {
                      this.deleteFood(i)}}>x</button> </li> )}
                </ul>
                
                <br/>
                <hr/>
                <p>Total: $ {this.state.precio} </p>
            </div>
           
        </div>
      </div>
  )
 } 
}

export default App;