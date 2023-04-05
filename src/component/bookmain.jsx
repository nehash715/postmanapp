import React,{Component} from "react";
import {Route,Switch,Redirect,Router} from "react-router-dom"
import Book from "./book";
import Books from "./books";
import Children from "./children";
import Fiction from "./fiction";
import Management from "./management";
import Mystery from "./mystery";

import Navbar from "./navbar";
import NewBook from "./newbook";
class BookMain extends Component{
    render(){
    return <div className="container">
        <Navbar/>
        <Switch>
        <Route path="/book/:id" component={Book}/>
        <Route path="/fiction" component={Fiction}/>
        <Route path="/mystery" component={Mystery}/>
        <Route path="/new" component={NewBook}/>
        <Route path="/management" component={Management}/>
        <Route path="/books" component={Books}/>
                <Route path="/children" component={Children}/>
                <Redirect from="/" to="/children"/>
    </Switch>
    </div>
    }
}
export default BookMain