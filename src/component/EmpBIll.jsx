import React,{Component} from "react";
import http from "./httpService";
import  auth from "./AllService"
import { Link } from "react-router-dom";
class ViewEmpBill extends Component{
    state={
        product:[],
bg:"",
str:"",
openform:false,
bill:{description:"",expensetype:"",amount:""}
    }



async getProductData(){

   
    const user=auth.getUser()
    if(user.empuserid){
    let response=await http.get(`/empapp/empbills/${user.empuserid}`)
    let {data}=response
   console.log(data.data)
   this.setState({product:data.data,edit:true})
    }
   }

componentDidMount(){
this.getProductData()
}

componentDidUpdate(prevProps,prevState){
if(prevProps!==this.props){
this.getProductData()
}
}

  handleChange=(e)=>{
        const {currentTarget:input}=e
        let s1={...this.state}
        s1.bill[input.name]=input.value;
        this.setState(s1)
}

   async postData(url,obj){
   
let response=await http.post(url,obj)
        let {data}=response
        console.log(data)
       this.setState({edit:true})
     
   
    }
  
    handleSubmit=(e)=>{
        e.preventDefault();
        let {bill,str}=this.state
        const user=auth.getUser()
        this.postData(`/empapp/empbills/${user.empuserid}`,bill)
        str="New Bill has been successfuly created "
        this.setState({str:str})
        }

showForm=()=>{
   this.setState({openform:true})
}

    
    render(){
let {product,openform,str}=this.state
let {description,expensetype,amount}=this.state.bill

console.log(openform)

 return <div className="container">
    <h2 className="text-center">Welome to Employee Management Portal</h2>
    <h4>Details of Bill Submitted</h4>
<div className="row bg-primary">
 <div className="col-2">Id</div>
 <div className="col-4">Description</div>
 <div className="col-4">Expense Head</div>
 <div className="col-1">Amount</div>
</div>
{product.map((p)=>{
    return <div className="row">
        <div className="col-2">{p.billid}</div>
        <div className="col-4">{p.description}</div>
 <div className="col-4">{p.expensetype}</div>
 <div className="col-1">{p.amount}</div>
 {p.expensetype==="Hotel"||p.expensetype==="Travel"?<div className="col-1">
    <button className="btn btn-secondary btn-sm" >+</button>
 </div>:""}
    </div>
})}

<button  className="subtn" onClick={()=>this.showForm()}>Submit a New Bill</button>
    {openform===true?
    <div className="container">
        <h7 className="text-center">Enter Details of New Bill</h7>
        <br></br>
<h7 className="text-center text-success ">{str}</h7>
   <div className="form-group">
    <label>Description</label>
    <input
    type="text"
    className="form-control"
    id="description"
    name="description"
    placeholder="Enter Description"
    value={description}
    onChange={this.handleChange}

    />

   </div>
   <div className="form-group">
    <label>Expense Type</label>
    <input
    type="text"
    className="form-control"
    id="expensetype"
    name="expensetype"
    placeholder="Enter Expense Type"
    value={expensetype}
    onChange={this.handleChange}
    />
   </div>
   <div className="form-group">
    <label>Amount</label>
    <input
    type="text"
    className="form-control"
    id="amount"
    name="amount"
    placeholder="Enter Amount"
    value={amount}
    onChange={this.handleChange}
    />
    </div>
      <button className="btn btn-primary" onClick={this.handleSubmit} >Submit</button></div>:""}
 
    </div>

    }
    }
    export default ViewEmpBill