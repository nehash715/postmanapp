import React, { Component } from 'react'
import http from "./httpService.js"
export default class DeleteProduct extends Component {

 async componentDidMount(){
    let {id}=this.props.match.params;
    let response=await http.deleteApi(`/productApp/products/${id}`);
this.props.history.push("/products");

}

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
