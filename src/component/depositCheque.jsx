import React, { Component } from 'react'
import http from "./httpService";
export default class DepositCheque extends Component {

state={
   cheque:{ name: "",payeeName: "",IFSC: "",accNumber: "",bankName: "",amount:""}
}

    async postData(url,obj){
   
   
        let response=await http.post(url,obj)
        let {data}=response
        console.log(data)
      // this.props.history.push("/admin/viewemp")
   
    }
    handleChange=(e)=>{
        const {currentTarget:input}=e
        let s1={...this.state}
        s1.cheque[input.name]=input.value;
        this.setState(s1)
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        let {cheque}=this.state
        
        this.postData("/addPayee",this.state.cheque)

    }

  render() {

let{ name,payeeName,IFSC,accNumber,bankName,amount}=this.state.cheque
   
    return (
      <div className="container">
       <h2> Cheque Deposit</h2>
        <div className="form-group">
    <label>Cheque Number<span className="sup">*</span></label>
    <input
    type="text"
    className="form-control"
    id="name"
    name="accNumber"
    placeholder="Enter Number"
    value={accNumber}
    onChange={this.handleChange}
    />
   </div>
   
        <div className="form-group">
    <label>Bank Name<span className="sup">*</span></label>
    <input
    type="text"
    className="form-control"
    id="name"
    name="bankName"
    placeholder="Enter Bank Name"
    value={bankName}
    onChange={this.handleChange}
    />
   </div>
   
        <div className="form-group">
    <label>Branch<span className="sup">*</span></label>
    <input
    type="text"
    className="form-control"
    id="name"
    name="branch"
    placeholder="Enter Branch no"
    value={branch}
    onChange={this.handleChange}
    />
   </div>
   
        <div className="form-group">
    <label>Amount<span className="sup">*</span></label>
    <input
    type="text"
    className="form-control"
    id="name"
    name="amount"
    placeholder="Enter Amount"
    value={amount}
    onChange={this.handleChange}
    />
   </div>
   <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}
