import React,{Component} from "react";
import {Route,Switch,Redirect,Router} from "react-router-dom"
import Navbar from "./navbar";
import Orders from "./Orders";
import User from "./User";

import PassportLogin from "./passportlogin";

class MainPassport extends Component{

render(){
    return (
        
        <div className="container">
          <Navbar/>
           
            <Switch>
            <Route path="/orders/:type" component={Orders}/>
            <Route path="/user" component={User}/>
            <Route path="/login" component={PassportLogin}/>
            <Route path="/myorders" component={Orders}/>
                <Redirect from="/" to="/user"/>
    </Switch>
           
        </div>
    )
}
}
export default MainPassport