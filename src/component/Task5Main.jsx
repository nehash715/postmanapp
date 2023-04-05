import React,{Component} from "react";
import {Route,Switch,Redirect,Router} from "react-router-dom"
import Navbar from "./navbar";
import Orders from "./Orders";
import User from "./User";

import PassportLogin from "./passportlogin";

class Task5Main extends Component{

render(){
    return (
        
        <div className="container">
          <Navbar/>
           
            <Switch>
            <Route path="/login" component={PassportLogin}/>
            <Route path="/details" component={User}/>
            <Route path="/juniors" component={Orders}/>
             <Redirect from="/" to="/"/>
    </Switch>
           
        </div>
    )
}
}
export default Task5Main