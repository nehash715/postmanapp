import React,{Component} from "react";
import {Link} from "react-router-dom"
import http from "./httpService.js"
import  auth from "./AllService"
class Products extends Component{
    state={ 
        products:[],

    }
    //make a response to the server
    //server will compute the response
    //send back the response

async componentDidMount(){
    let response= await http.get("/productApp/products");
   // console.log(response)
    let {data}=response
   // let s1={...this.state}
    //s1.products=data;
    this.setState({products:data})
}

editProduct=(id)=>{
    this.props.history.push(`/products/${id}/edit`)
}
deleteProduct=(id)=>{
    this.props.history.push(`/products/${id}/delete`)
}
    render(){
        const {products}=this.state
        const user=auth.getUser()
        return <div className="container">
           <h4>Welcome to th PRODUCTS page</h4>
           {products.map((p)=>{
            return <div className="row border" key={p.id}>
              <div className="col-2 border">
                <Link to={`/products/${p.id}`}>{p.id}</Link>
                </div>
                <div className="col-4 border">{p.name}</div>
                <div className="col-2 border">{p.price}</div>
                {user && user.role==="admin" && <>
                <div className="col-2 border"><button className="btn btn-warning btn-sm" onClick={()=>this.editProduct(p.id)}>Edit</button></div>
                <div className="col-2 border"><button className="btn btn-danger btn-sm" onClick={()=>this.deleteProduct(p.id)}>Delete</button></div>
                </>}
            </div>
           })}
        </div>
    }
    }
    export default Products