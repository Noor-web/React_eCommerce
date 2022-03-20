import React, {Component} from 'react';

export default class Product extends Component{
    state={
        product: this.props.product
    };
    render(){
        console.log(this.props);

        return(
            <div className="col-lg-6">
                <div className="card m-2">
          <div className="card-body">
           <div className="text-muted"># {this.state.product.id}</div>

           <div className="pt-2 border-top">{this.state.product.productName}</div>
           <div>$ {this.state.product.price}</div>
          </div>
          {/* card body ends */}
          <div className='card-footer text-right'>
              <div className='float-left'>
                  <span className='badge'>{this.state.product.quantity}</span>
                  <div className='btn-group'>
                      <button className='btn btn-outline-success' onClick={() => {this.props.onIncrement(this.state.product);}}>+</button>
                      <button className='btn btn-outline-success' onClick={() => {this.props.OnDcrement()}}>-</button>
                  </div>
              </div>
              <div className='float-right'>
              {this.props.children}
              </div>
              
          </div>
         </div>
            </div>
         
        );
    }
}