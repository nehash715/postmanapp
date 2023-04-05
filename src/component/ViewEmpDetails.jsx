import React,{Component} from "react";
import http from "./httpService";
import  auth from "./AllService"
class ViewEmpDetails extends Component{
    state={
        product:{department:"",designation:"",manager:""},
edit:false,
str:"",
bg:"",
addstr:""
    }



async getProductData(){

    let {str,bg}=this.state
    const {empuserid}=this.props.match.params
    if(empuserid){
    let response=await http.get(`/empapp/empdept/${empuserid}`)
    let {data}=response
    console.log(response)
    if("designation" in data){
    str="Displaying Department Detaild"
   bg="text-success"
    this.setState({product:data,edit:true})
    this.setState({str:str,bg:bg})
    }
    else{
        bg="text-danger"
str="No Department Detail Found! Please enter them"

this.setState({str:str,bg:bg})
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
    try{
        let response=await http.post(url,obj)
        let {data}=response
        console.log(data)
        str="Details have been successfully Added"
        bg="text-success"
        this.setState({edit:true,str:str,bg:bg})
       //this.props.history.push("/products")
    }
        
    catch(ex){
        console.log(ex)
        if(ex.response && ex.response.status===400){
            let errors={}
            errors.id=ex.response.data;
            this.setState({errors:errors})

        }
    }
    }
  
    handleSubmit=(e)=>{
        e.preventDefault();
        const {product,edit}=this.state
        const {empuserid}=this.props.match.params
        this.postData(`/empapp/empdept/${empuserid} `,product)
        
    }
    render(){
let {department,designation,manager}=this.state.product
let {errors=null,edit,str,bg,addstr}=this.state
console.log(errors)

 return <div className="container">
    <h2 className="text-center">Welome to Employee Management Portal</h2>
    <h4 className="text-center">Department Details of Employee</h4>
    <h6 className={"text-center "+bg}>{str}</h6>
   <div className="form-group">
    <label>Department</label>
    <input
    type="text"
    className="form-control"
    id="department"
    name="department"
    placeholder="Enter Department"
    value={department}
    onChange={this.handleChange}

    />

   </div>
   <div className="form-group">
    <label>Designation</label>
    <input
    type="text"
    className="form-control"
    id="designation"
    name="designation"
    placeholder="Enter Designation"
    value={designation}
    onChange={this.handleChange}
    />
   </div>
   <div className="form-group">
    <label>Manager Name</label>
    <input
    type="text"
    className="form-control"
    id="manager"
    name="manager"
    placeholder="Enter Manager"
    value={manager}
    onChange={this.handleChange}
    />
   </div>
   <button className="btn btn-primary" onClick={this.handleSubmit} disabled={edit}>Submit</button>
        </div>

    }
    }
    export default ViewEmpDetails