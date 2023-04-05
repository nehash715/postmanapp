import React,{Component} from "react";
import {Route,Switch,Redirect,Router} from "react-router-dom"
import CompA from "./compA";
import CompB from "./compB";
import Navbar from "./navbar";
class Task3Main extends Component{
  render(){
    return(
        <div className="container">
            <Navbar/>
            <Switch>
                <Route path="/compA" component={CompA}/>
                <Route path="/compB/:name" component={CompB}/>
            </Switch>
        </div>
    )
  }
}
export default Task3Main