import React,{Component} from "react";
import http from "./httpService";
class AddCustomer extends Component{
    state={
        person:{id:"", name:"",age:"",city:"",gender:"",payment:""},
        cities:["Delhi", "Noida", "Gurgaon","Jaipur"],
    paymentopt:["Credit Card","Debit Card","Wallet"],
    genderopt:["Male","Female"],
        edit:false
    }
    async componentDidMount(){
       this.fetchData()
    }
    async componentDidUpdate(prevProps,prevState){
        if(prevProps!==this.props){
            this.fetchData()
        }
    }
    async fetchData(){
        const {id}=this.props.match.params;
        
        if(id){
            let response=await http.get(`/customers/${id}`)
           // console.log(response)
            let {data}=response
            console.log(data)
            this.setState({person:data,edit:true})
        }
        else{
          let  person={id:"", name:"",age:"",city:"",gender:"",payment:""}
          this.setState({person:person,edit:false})
        }
    }
    handleChange=(e)=>{
        const {currentTarget:input}=e
        let s1={...this.state}
        s1.person[input.name]=input.value;
        this.setState(s1)
    }
    makeRadios=(arr,value,name,label)=>{
        console.log(value)
        return <>
         <label className="form-check-label font-weight-bold">{label}</label>
         {arr.map((opt)=>{
             return <div className="form-check" key={opt}>
                 <input className="form-check-input"
                 name={name}
                 value={opt}
                 type="radio"
            checked={value===opt}
                 onChange={this.handleChange}
                 />
                    <label className="form-check-label">{opt}</label> 
    
                 
             </div>
         })}
         </>
     }
   async postData(url,obj){
        let response=await http.post(url,obj)
        console.log(response)
        this.props.history.push("/customers")
    }
    async putData(url,obj){
        let response=await http.put(url,obj)
        console.log(response)
        this.props.history.push("/customers")
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        let {person,edit}=this.state
        edit?this.putData(`/customers/${person.id}`,person)
        :
        this.postData("/customers",this.state.person)

    }
    render(){
let {id,name,age,city,gender,payment}=this.state.person
let {cities,paymentopt,genderopt}=this.state
 return <div className="container">
    <div className="form-group">
    <label>ID</label>
    <input
    type="text"
    className="form-control"
    id="id"
    name="id"
    placeholder="Enter ID"
    value={id}
    onChange={this.handleChange}
    />
   </div>
   <div className="form-group">
    <label>Name</label>
    <input
    type="text"
    className="form-control"
    id="name"
    name="name"
    placeholder="Enter Name"
    value={name}
    onChange={this.handleChange}
    />
   </div>
   <div className="form-group">
    <label>Age</label>
    <input
    type="text"
    className="form-control"
    id="age"
    name="age"
    placeholder="Enter Age"
    value={age}
    onChange={this.handleChange}
    />
   </div>


   <div className="form-group">
                <label>City</label>
               <select className="form-control" name="city" value={city} onChange={this.handleChange}>
                <option disabled value="">
                    Select the City
                </option>
                {cities.map(c1=><option>{c1}</option>)}
               </select>
            </div>

<br></br>
{this.makeRadios(genderopt,gender,'gender',"Select the Gender")}
{this.makeRadios(paymentopt,payment,'payment','Select Payment Method')}
   
   <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
        </div>

    }
    }
    export default AddCustomer