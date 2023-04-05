import React, { Component } from 'react'
import http from "./httpService";
export default class Axiosapp extends Component {
state={
    arr:["GET","POST"],
    fetchurl:"",
    post:{customer:"",product:"",quantity:""},
    method:"",
    data:'',
    postData:{}
}
 


async  fetchurl(fetchurl){
   // console.log(fetchurl)
    let response=await http.get(`${fetchurl}`)
    console.log(response)
    let {data}=response
    this.setState({data:JSON.stringify(data)})
    
}
handleChange=(e)=>{
    const {currentTarget:input}=e
    let s1={...this.state}
    s1[input.name]=input.value;
    console.log(s1)
    this.setState(s1)
}



async postData(url,obj){
   
   
        let response=await http.post(url,obj)
        let {data}=response
        console.log(data)
        this.setState({data:JSON.stringify(data)})
       //this.props.history.push("/users")
    
}
submit=()=>{
    let {method,fetchurl,post}=this.state
   let u=fetchurl.substring(21)
console.log(u)
    if(method=="GET"){
        this.fetchurl(fetchurl)
    }
    else{
        let i1=post.indexOf('{')
        let i2=post.indexOf('}')
        let d=post.substring(i1,i2+1)
        this.postData(`${fetchurl}`,JSON.parse( d))
    }

}


  render() {
    let {arr,fetchurl,post,method,data,postData}=this.state
   // let u=fetchurl.substring(21)
//console.log(u)
    console.log(data)
    return (
      <div class="container">
<div className="form-group">
                <label>Select Method</label>
               <select className="form-control" name="method" value={method} onChange={this.handleChange}>
                <option disabled value="">
                    Select the  Method
                </option>
                {arr.map(c1=><option>{c1}</option>)}
               </select>
            </div>

    <div className="form-group">
      <label>URL</label>
      <input
      type="text"
       className="form-control"
       id="fetchurl"
       name="fetchurl"
       onChange={this.handleChange}
       value={fetchurl}
   
        />
    </div>
   <div className="form-group">
    <label> Enter JSON Data to POST </label>
    <input
    type="text"
    className="form-control"
    id="post"
    name="post"
  
    
    onChange={this.handleChange}
    />
   </div>
    <button className='btn btn-primary' onClick={()=>this.submit()}>Submit</button>
     <br></br>
     <h4>Response</h4>
{/*u=='/myServer/customers' ||u== '/myServer/products'?data.map((p)=>{
    return <h6>
        {p}
    </h6>
}):""*/}
{/*u!=='/myServer/customers' ||u!== '/myServer/products' ?data.map((p)=>{
    return <div className='row'>
        <div className='col'>{p.customer}</div>
        <div className='col'>{p.product}</div>
        <div className='col'>{p.quantity}</div>
        
    </div>
}):""*/}
{data}

      </div>
    )
  }
}
