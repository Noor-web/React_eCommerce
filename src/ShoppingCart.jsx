import React, {Component} from 'react';
import Product from "./Product";

export default class ShoppingCart extends Component{
    state={products: [
        {id:1, productName:"1+", price: 1200, quantity: 0},
        {id:2, productName:"Iphone+", price: 2147, quantity: 0},
        {id:3, productName:"Sony", price: 3612, quantity: 0},
        {id:4, productName:"gSkill", price: 1450, quantity: 0},
        {id:5, productName:"intel", price: 2900, quantity: 0},
        {id:6, productName:"Asus", price: 1300, quantity: 0},
        {id:7, productName:"Rapsberry", price: 2500, quantity: 0}
    ]}
    render(){
        return (
        <div className='contaier-fluid'>      
        <h4>Shopping Cart</h4>

        <div className='row'>
        {this.state.products.map((prod)=>{
            return (
            <Product key={prod.id} 
            product={prod}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            >
            <button className='btn btn-primary'>Buy Now</button>
            </Product>
        );
        })}
        </div>
        </div>
        ); 
    }
    handleIncrement= (product) => {
        console.log("Plux", product);
    };

    handleDecrement= () => {
        console.log("minux");
    };
}