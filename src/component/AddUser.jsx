import React,{Component} from "react";
import http from "./httpService";
import  auth from "./AllService"
class AddUser extends Component{
    state={
        product:{username:"",password:"",name:"",role:""},
edit:false,
rolearr:["user","admin"]

    }



async getProductData(){
    const {username}=this.props.match.params
    if(username){
    let response=await http.get(`/productApp/users/${username}`)
    let {data}=response
    console.log(data)
    this.setState({product:data,edit:true})
    }
    else{
        let prod1={username:"",password:"",name:"",role:""}
        this.setState({product:prod1,edit:false})
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
   
    try{
        let response=await http.post(url,obj)
        let {data}=response
        console.log(data)
       this.props.history.push("/users")
    }
        
    catch(ex){
        console.log(ex)
        if(ex.response && ex.response.status===400){
            let errors={}
            errors.username=ex.response.data;
            this.setState({errors:errors})

        }
    }
    }
    async putData(url,obj){
        let response=await http.put(url,obj)
        console.log(response)
        this.props.history.push("/users")
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const {product,edit}=this.state
        edit?this.putData(`/productApp/users/${username}`,product):
        this.postData("/productApp/users",product)
        
    }
    render(){
let {username,password,name,role}=this.state.product
let {errors=null}=this.state
let {rolearr}=this.state
console.log(errors)

 return <div className="container">
   <div className="form-group">
    <label>Username</label>
    <input
    type="text"
    className="form-control"
    id="username"
    name="username"
    placeholder="Enter Username"
    value={username}
    onChange={this.handleChange}
    readOnly={this.state.edit}
    />
    {errors && <span className="text-danger">{errors.username}</span>}
   </div>
   <div className="form-group">
    <label> Name</label>
    <input
    type="text"
    className="form-control"
    id="name"
    name="name"
    placeholder="Enter Product Name"
    value={name}
    onChange={this.handleChange}
    />
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
    />
   </div>
   <div className="form-group">
                <label>Role</label>
               <select className="form-control" name="role" value={role} onChange={this.handleChange}>
                <option disabled value="">
                    Select the Role
                </option>
                {rolearr.map(c1=><option>{c1}</option>)}
               </select>
            </div>
   <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
        </div>

    }
    }
    export default AddUser