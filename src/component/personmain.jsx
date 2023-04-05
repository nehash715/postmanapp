import React,{Component} from "react";
import {Route,Switch,Redirect,Router} from "react-router-dom"
import Navbar from "./navbar";
import Persons from "./persons";
import Person from "./person";
import PersonAdd from "./personadd";
import DeletePerson from "./deleteperson";
import OptionsCB from "./optionsCB";
class PersonMain extends Component{

render(){
    return (
        
        <div className="container">
            <Navbar/>
           
            <Switch>
            <Route path="/persons/:id/edit" component={PersonAdd}/>
            <Route path="/persons/:id/delete" component={DeletePerson}/>
           
                <Route path="/persons/add" component={PersonAdd}/>
                <Route path="/persons/:id" component={Person}/>
                <Route path="/persons" component={Persons}/>

                <Redirect from="/" to="/persons"/>
    </Switch>
           
        </div>
    )
}
}
export default PersonMain