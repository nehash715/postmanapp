import React,{Component} from "react";
import http from "./httpService";
import  auth from "./AllService"
class AddProduct extends Component{
    state={
        product:{id:"",name:"",price:""},
edit:false,

    }



async getProductData(){
    const {id}=this.props.match.params
    if(id){
    let response=await http.get(`/empapp/empdept/${id}`)
    let {data}=response
    console.log(data)
    this.setState({product:data,edit:true})
    }
    else{
        let prod1={id:"",name:"",price:""}
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
       this.props.history.push("/products")
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
    async putData(url,obj){
        let response=await http.put(url,obj)
        console.log(response)
        this.props.history.push("/products")
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const {product,edit}=this.state
        edit?this.putData(`/productApp/products/${id}`,product):
        this.postData("/productApp/products",product)
        
    }
    render(){
let {id,name,price}=this.state.product
let {errors=null}=this.state
console.log(errors)

 return <div className="container">
   <div className="form-group">
    <label>Product Id</label>
    <input
    type="text"
    className="form-control"
    id="id"
    name="id"
    placeholder="Enter Product id"
    value={id}
    onChange={this.handleChange}
    readOnly={this.state.edit}
    />
    {errors && <span className="text-danger">{errors.id}</span>}
   </div>
   <div className="form-group">
    <label>Product Name</label>
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
    <label>Product Price</label>
    <input
    type="text"
    className="form-control"
    id="price"
    name="price"
    placeholder="Enter Product Price"
    value={price}
    onChange={this.handleChange}
    />
   </div>
   <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
        </div>

    }
    }
    export default AddProduct