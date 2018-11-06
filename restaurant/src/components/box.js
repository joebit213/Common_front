import React, {Component} from 'react';


class Food extends Component{
constructor(props){
  super(props);
  this.state = {
    name: props.name,
    cantidad: 1,
    precio: props.precio,
    image: props.image
  }
}
handleSubmit(){
  var {name, cantidad, precio} = this.state;
  precio = precio * cantidad
  this.props.addFood({name, cantidad, precio})
}


  render(){

    const{name, precio, image, cantidad}=this.state;
    return(

      <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src= {image} alt = {name} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{name}</strong> <br />
              <small>{precio}</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input className="input"type="number" value={cantidad} onChange={e => this.setState({cantidad: e.target.value})} />
            </div>
            <div className="control">
              <button className="button is-info" onClick={this.handleSubmit.bind(this)}>
                +
              </button>
              
            </div>
          </div>
        </div>
      </article>
    </div>
    )
  }
}

export default Food;

