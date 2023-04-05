import React,{Component} from "react";
import {Route,Switch,Redirect,Router} from "react-router-dom"
import Navbar from "./navbar";
import Customers from "./customers";
import AddCustomer from "./addcustomer";
class CustomerMain extends Component{

render(){
    return (
        
        <div className="container">
            <Navbar/>
           
            <Switch>
            <Route path="/customers/:id/edit" component={AddCustomer}/>
            
                <Route path="/customers" component={Customers}/>
                <Route path="/add" component={AddCustomer}/>
                
                <Redirect from="/" to="/customers"/>
    </Switch>
           
        </div>
    )
}
}
export default CustomerMain