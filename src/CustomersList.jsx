import React, { Component } from "react";

export default class MainContent extends Component{
    state={appTitle:"Employees", customersCount:5,
    customers:[
        {
        id:1,
        name:"Zilani", 
        phone:"01754", 
        address:{city:"Luxemberg"},
        photo: "https://picsum.photos/id/1010/60/"
    },
        {
        id:2,
        name:"Anik", 
        phone:"0254896", 
        address:{city:"Landon"},
        photo: "https://picsum.photos/id/1020/60/"
    },
        {id:3,name:"Sajeeb", phone:"014785", address:{city:"Dhaka"}, photo: "https://picsum.photos/id/1020/60/"},
        {id:4,name:"Fardin", phone:null, address:{city:"Chittagong"}, photo: "https://picsum.photos/id/1028/60/"},
        {id:5,name:"Jahangir", phone:null, address:{city:"Italy"}, photo: "https://picsum.photos/id/1026/60/"}
    ],
};


    render(){
        return(
            <div>
                <h1>This is main COntent</h1>
                <h2 className="m-1 p-1">{this.state.appTitle} and customer is <span className="badge badge-secondary m-2">{this.state.customersCount}</span>
                <button className="btn btn-info" onClick={this.onRefreshClick}>
                    Refresh
                </button>
                </h2>
                <table className="table">
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Photo</td>
                            <td>Customer Name</td>
                            <td>Phone</td>
                            <td>Address</td>
                        </tr>
                    </thead>
                    <tbody>
                        
                      {this.getCustomerRow()}  
                    </tbody>
                </table>
            </div>
        );
    }
    //executes when a user click
    onRefreshClick = () =>{
        this.setState({customersCount: 7,});
    };

    getPhoneToRender= (phone) =>{
        if(phone) return phone;
           else{
        return <div className="bg-warning p-2 text-left">No phone</div>;
    }
    };

    getCustomerRow= () =>{
        return this.state.customers.map((cust, index)=>{
                return(
                    <tr key={cust.id}>
                        <td>{cust.id}</td>
                        <td><img src={cust.photo} alt="customer"/>
                        <div>
                            <button className="btn btn-sm btn-secondary" onClick={ ()=>{this.onChangePictureClick(cust, index);}}>Photo Cng</button>
                        </div></td>
                        <td >{cust.name}</td>
                        <td >
                            {this.getPhoneToRender(cust.phone)}
                        </td>
                        <td>{cust.address.city}</td>
                    </tr>
                    );
                    });
    };
    //executes when user clicks photo change button on the grid
    //recieves the customer object and return the index of customer
    onChangePictureClick= (cust, index) =>{
        //console.log(cust);
        //console.log(index);

        //get existing customer
        var custArr=this.state.customers;
        custArr[index].photo="https://picsum.photos/id/104/60/";
        //update customer array in the object
        this.setState({customers: custArr});
    }
}
