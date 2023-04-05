import React,{Component} from "react";
import {Route,Switch,Redirect,Router} from "react-router-dom"
import Navbar from "./navbar";
import Cars from "./cars"
class CarMain extends Component{

render(){
    return (
        
        <div className="container">
            <Navbar/>
           
            <Switch>
            <Route path="/cars" component={Cars}/>
            
               
                
                <Redirect from="/" to="/cars"/>
    </Switch>
           
        </div>
    )
}
}
export default CarMain