import React,{Component} from "react";
import http from "./httpService";
import  auth from "./AllService"
class EmpContactDet extends Component{
    state={
        product:{country:"", pincode:"", address:"", city:"", mobile:""},
edit:false,
str:"",
bg:"",
addstr:""
    }



async getProductData(){

    let {str,bg}=this.state
    const user=auth.getUser()
    console.log(user)
    if(user.empuserid){
    let response=await http.get(`/empapp/empcontact/${user.empuserid}`)
    let {data}=response
    console.log(data)
    if("mobile" in data){
    str="Displaying Contact Details"
   bg="text-success"
    this.setState({product:data,edit:true})
    this.setState({str:str,bg:bg})
    }
    else{
        bg="text-danger"
str="No Contact Detail Found! Please enter them"

this.setState({str:str,bg:bg,edit:false})
    }
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
        s1.product[input.name]=input.value;
        this.setState(s1)
    }

   async postData(url,obj){
   let {edit,str,bg}=this.state
   
        let response=await http.post(url,obj)
        let {data}=response
        console.log(data)
        str="Details have been successfully Added"
        bg="text-success"
        this.setState({edit:true,str:str,bg:bg})
     
  }
  
    handleSubmit=(e)=>{
        e.preventDefault();
        const {product,edit}=this.state
        const user=auth.getUser()
        this.postData(`/empapp/empcontact/${user.empuserid}`,product)
        
    }
    render(){
let {country, pincode, address, city, mobile}=this.state.product
let {errors=null,edit,str,bg}=this.state
console.log(errors)

 return <div className="container">
    <h2 className="text-center">Welome to Employee Management Portal</h2>
    <h4 className="text-center">Your Contact Details</h4>
    <h6 className={"text-center "+bg}>{str}</h6>
   <div className="form-group">
    <label>Mobile</label>
    <input
    type="text"
    className="form-control"
    id="mobile"
    name="mobile"
    placeholder="Enter Mobile"
    value={mobile}
    onChange={this.handleChange}

    />

   </div>
   <div className="form-group">
    <label>Address</label>
    <input
    type="text"
    className="form-control"
    id="address"
    name="address"
    placeholder="Enter address"
    value={address}
    onChange={this.handleChange}
    />
   </div>
   <div className="form-group">
    <label>City</label>
    <input
    type="text"
    className="form-control"
    id="city"
    name="city"
    placeholder="Enter City"
    value={city}
    onChange={this.handleChange}
    />
   </div>
   <div className="form-group">
    <label>Country</label>
    <input
    type="text"
    className="form-control"
    id="country"
    name="country"
    placeholder="Enter Country"
    value={country}
    onChange={this.handleChange}
    />
   </div>
   <div className="form-group">
    <label>Pin Code</label>
    <input
    type="text"
    className="form-control"
    id="pincode"
    name="pincode"
    placeholder="Enter Pincode"
    value={pincode}
    onChange={this.handleChange}
    />
   </div>
   <button className="btn btn-primary" onClick={this.handleSubmit} disabled={edit}>Submit</button>
        </div>

    }
    }
    export default EmpContactDet