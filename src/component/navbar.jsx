import React,{Component} from "react";
import { useState } from "react";
import {Link} from "react-router-dom"

class Navbar extends Component {
   



render(){

const {user}=this.props
   
   // let {sports="",cricket="",movies="",education=""}=this.props.options
    return(
        <nav className="navbar navbar-expand-sm  navbar-dark bg-dark ">
      <Link className="navbar-brand" to="/"></Link>
        <div className="" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
               <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/details">Employee Details</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/juniors">Juniors</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/logout">Logout</Link>
                </li>
            {user && (

           
                <li className="nav-item">
                    <Link className="nav-link" to="/products/add">Add Products</Link>
    </li> )}
    {user && user.role==="admin" &&(

           
<li className="nav-item">
    <Link className="nav-link" to="/users">Users</Link>
</li> )}
    {!user && (

   
    <li className="nav-item">
                    <Link className="nav-link" to="/login">LogOut</Link>
    </li>
     )}
  
  {/* <li className="nav-item">
                    <Link className="nav-link" to="/persons">All Persons</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/persons/add">Add Person</Link>
</li>*/}
   {/* <li className="nav-item">
                    <Link className="nav-link" to="/all">All</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/football">Football</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/cricket">Cricket</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/add">Add Star</Link>
</li>*/}

{/*<li className="nav-item">
                    <Link className="nav-link" to="/arrival">New Arrival</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/children">Children</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/fiction">Fiction</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/mystery">Mystery</Link>
</li>                     
<li className="nav-item">
                    <Link className="nav-link" to="/management">Management</Link>
</li>                     
<li className="nav-item">
                    <Link className="nav-link" to="/books">All Books</Link>
</li>
<li className="nav-item">
                    <Link className="nav-link" to="/new">New Book</Link>
</li>  */}
   
   {/* <li className="nav-item">
                    <Link className="nav-link" to="?q=sports">Sports</Link>
</li>                     
<li className="nav-item">
                    <Link className="nav-link" to="?q=cricket">Cricket</Link>
</li>                     
<li className="nav-item">
                    <Link className="nav-link" to="?q=movies">Movies</Link>
</li>
<li className="nav-item">
                    <Link className="nav-link" to="?q=education">Education</Link>
</li>  */}

{/*<li className="nav-item">
                    <Link className="nav-link" to="/cars">Cars</Link>
</li>
<li className="nav-item">
                    <Link className="nav-link" to="/add">Add Customer</Link>
</li>*/}
   
  
    </ul>

        </div>
      </nav>
    )
}
}
export default Navbar