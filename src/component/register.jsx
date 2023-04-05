import React,{Component} from "react";
import http from "./httpService";
import  auth from "./AllService"
class Register extends Component{
    state={
        product:{name:"",email:"",passowrd:"",role:""},
error:{},
password2:""

    }





    handleChange=(e)=>{
        const {currentTarget:input}=e
        let s1={...this.state}
        s1.product[input.name]=input.value;
        this.handleValidate(e)
        this.setState(s1)
    }

    handleChange2=(e)=>{
        const {currentTarget:input}=e
        let s1={...this.state}
        s1.password2=input.value;
        this.handleValidate(e)
        this.setState(s1)
    }




   async postData(url,obj){
   
   
        let response=await http.post(url,obj)
        let {data}=response
        console.log(data)
      // this.props.history.push("/admin/viewemp")
   
    }
  
    handleSubmit=(e)=>{
        e.preventDefault();
        const {product}=this.state
let errors=this.validateAll();
if(this.isValid(errors)){
    
    this.postData("/admin/register",product)
    alert("Register Successfully")
}
  else{
    let s1={...this.state}
    s1.error=errors
    this.setState(s1)
  }
        }

handleValidate=(e)=>{
    let {currentTarget:input}=e
    let s1={...this.state}
    switch(input.name){
        case "name":s1.error.name=this.validateName(input.value)
        break;
        case "email":s1.error.email=this.validateEmail(input.value)
        break;
        case "password":s1.error.password=this.validatePassword(input.value)
        break;
        case "password2":s1.error.password2=this.validatePassword2(input.value)
        default:break
    }
    this.setState(s1)
}
isValid=(errors)=>{
    //errors would have keys with non empty string as value
    let keys=Object.keys(errors)//keys in array
   let count= keys.reduce((acc,curr)=>{
        return errors[curr]?acc+1:acc
    },0)
    return count===0;
  }
validateAll=()=>{
    let {name,email,password}=this.state.product
    let {password2}=this.state
    let errors={}
    errors.name=this.validateName(name)
    errors.email=this.validateEmail(email)
    errors.passowrd=this.validatePassword(password)
    errors.password2=this.validatePassword2(password2)
    return errors
}
validateName=(name)=>{
    return !name?"Name must be entered":name.length<8?"Name should have minimum 8 characters":""
}
validateEmail=(email)=>{
    return !email?"Email must be entered":!email.includes('@')?"Not  a valid email":""
}

validatePassword=(password)=>{
    return !password?"Password must be entered":password.length<8?"Password should have minimum 8 characters":!/[A-Z]/.test(password)?
    "Password  must contain uppercase":!/[a-z]/.test(password)?"Password must contain one lowercase":!/\d/.test(password)?
    "Password must contain one digit":""
}
validatePassword2=(password2)=>{
    let {password}=this.state.product
    return !password2?"Re enter the password":password!==password2?"Password do not match":""
}

isFormValid=()=>{
    let errors=this.validateAll();
   
//this.isValid(errors)
  //console.log(this.isValid(errors))
    return !this.isValid(errors)
  }
    render(){
let {name,email,password}=this.state.product

let {password2,error}=this.state
console.log(password===password2)
 return <div className="container">
   
    <h4 className="text-center">Register</h4>
    {this.isFormValid()===false?<h6 className="text-success-center">Employee succcessfully added</h6>:""}
   <div className="form-group">
    <label>Email</label>
    <input
    type="text"
    className="form-control"
    id="email"
    name="email"
    placeholder="Enter email"
    value={email}
    onChange={this.handleChange}
    onBlur={this.handleValidate}
    />
    {error.email?<span className="text-danger">{error.email}</span>:""}
   </div>
   <div className="form-group">
    <label> Name</label>
    <input
    type="text"
    className="form-control"
    id="name"
    name="name"
    placeholder="Enter  Name"
    value={name}
    onChange={this.handleChange}
    onBlur={this.handleValidate}
    />
    {error.name?<span className="text-danger">{error.name}</span>:""}
   </div>
   <div className="form-group">
    <label>Password</label>
    <input
    type="password"
    className="form-control"
    id="password"
    name="password"
    placeholder="Enter Password"
    value={password}
    onChange={this.handleChange}
    onBlur={this.handleValidate}
    />
    {error.password?<span className="text-danger">{error.password}</span>:""}
   </div>
   <br></br>
   <input
    type="password"
    className="form-control"
    id="password2"
    name="password2"
    placeholder="Re enter password"
    value={password2}
    onChange={this.handleChange2}
    />
    {error.password2?<span className="text-danger">{error.password2}</span>:""}
<br></br><b>Role</b>
    <div className="form-check">
    <label>Student</label>
    <input 
    type="radio"
    className="form-check-input"
    id="role"
    name="role"
  value="student"
    
    onChange={this.handleChange}
   
    />
    </div><br></br>
    <div className="form-check">
    <label>Faculty</label>
    <input 
    type="radio"
    className="form-check-input"
    id="role"
    name="role"
  
    value="faculty"
    onChange={this.handleChange}
   
    />
    </div>
   <button className="btn btn-primary" onClick={this.handleSubmit} disabled={this.isFormValid()}>Submit</button>
        </div>

    }
    }
    export default Register