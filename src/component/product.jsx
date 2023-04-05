import React,{Component} from "react";
import http from "./httpService.js"

 class Product extends Component{
 state={product:{}}
    
 async componentDidMount(){
    let {id}=this.props.match.params
    let response= await http.get(`/productApp/products/${id}`);
   //console.log(response)
    let {data}=response
   // let s1={...this.state}
    //s1.products=data;
    this.setState({product:data})
}




    render(){
        let {product}=this.state

        return (<div className="container">
            Product Id:{product?.id}<br></br>
            Name:{product?.name}<br></br>
            Price:{product?.price}
            </div>)
    }
    }
    export default Product