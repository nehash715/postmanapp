import React,{Component} from "react";
import {Route,Switch,Redirect,Router} from "react-router-dom"
import AllStar from "./allStar";
import Star from "./star";
import Navbar from "./navbar";
import Cricket from "./cricket";
import Football from "./football";
import AddStar from "./addstart";
class SportMain extends Component{
    render(){
   return (
    <div className="container">
        <Navbar/>
        <Switch>
                <Route path="/details/:id" component={Star}/>
                <Route path="/football" component={Football}/>
                <Route path="/cricket" component={Cricket}/>
                <Route path="/add" component={AddStar}/>
                <Route path="/all" component={AllStar}/>
                <Redirect from="/" to="/all"/>
    </Switch>
    </div>
   )
    }
}
export  default SportMain