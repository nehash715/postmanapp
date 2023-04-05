import React,{Component} from "react";
import {Route,Switch,Redirect,Router} from "react-router-dom"
import Navbar from "./navbar";
import Product from "./product";
import Products from "./products";
import AddProduct from "./addProduct";
import DeleteProduct from "./deleteProduct";
import Login from "./login";
import Logout from "./Logout";
import auth from "./AllService"
import Users from "./users";
import NotAllowed from "./NotAllowed";
import AddUser from "./AddUser";
class MainComponent extends Component{

render(){
    const user=auth.getUser()
    return (
        
        <div className="container">
            <Navbar user={user}/>
           
            <Switch>
                <Route path="/products/add"
                render={props=>user?<AddProduct {...props} />:<Redirect to="/notAllowed"/>}/>
                <Route path="/products/:id/edit"
                 component={AddProduct}/>
                <Route path="/products/:id/delete" component={DeleteProduct}/>
                <Route path="/products/:id" component={Product}/>
                <Route path="/products" component={Products}/>
                <Route path="/login" component={Login}/>
                <Route path="/logout" component={Logout}/>
                <Route path="/users/add" component={AddUser}/>
                <Route path="/users/:username/edit" component={AddUser}/>
                <Route path="/users"
                render={(props)=>user ? user.role==="admin"? <Users {...props}/>:<Redirect to="/notAllowed"/>:<Redirect to="/login"/>}/>
                <Route path="/notAllowed" component={NotAllowed}/>
                <Redirect from="/" to="/products"/>
    </Switch>
           
        </div>
    )
}
}
export default MainComponent