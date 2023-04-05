import React,{Component} from "react";
import {Route,Switch,Redirect,Router} from "react-router-dom"
import Navbar from "./navbar";
import Task2 from "./task2";
class Task2Main extends Component{
    render(){
        return <div className="container">
 <Navbar />

            <Route path="/home" component={Task2}/>
            <Redirect from="/" to="/home"/>
        </div>
    }
}
export default Task2Main