import React,{Component} from "react";
import http from "./httpService";
class CustomerDetForm extends Component{
    state={
        person:{},
       genderarr:["Male","Female"],
       yeararr:["1995","1996","1997","1998","1999"],
       montharr:['January',
       'February',
       'March',
       'April',
       'May',
       'June',
       'July',
       'August',
       'September',
       'October',
       'November',
       'December'],
       datearr:["1","2","3","4","5","6","7","8"],
       statearr : [ "Andhra Pradesh",
       "Arunachal Pradesh",
       "Assam",
       "Bihar",
       "Chhattisgarh",
       "Goa",
       "Gujarat",
       "Haryana",
       "Himachal Pradesh",
       "Jammu and Kashmir",
       "Jharkhand",
       "Karnataka",
       "Kerala",
       "Madhya Pradesh",
       "Maharashtra",
       "Manipur",
       "Meghalaya",
       "Mizoram",
       "Nagaland",
       "Odisha",
       "Punjab",
       "Rajasthan",
       "Sikkim",
       "Tamil Nadu",
       "Telangana",
       "Tripura",
       "Uttarakhand",
       "Uttar Pradesh",
       "West Bengal",
       "Andaman and Nicobar Islands",
       "Chandigarh",
       "Dadra and Nagar Haveli",
       "Daman and Diu",
       "Delhi",
       "Lakshadweep",
       "Puducherry"],
       citiesarr:["Lucknow","Aligarh"],
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
        
            let response=await http.get("/getCustomer/Apoorv")
           // console.log(response)
            let {data}=response
            console.log(data)
            this.setState({person:data,edit:true})
      
        
      
    }
    handleChange=(e)=>{
        const {currentTarget:input}=e
        let s1={...this.state}
        s1.person[input.name]=input.value;
        this.setState(s1)
    }

    makeRadios=(arr,value,name,label,asterik="")=>{
        console.log(value)
        return <>
         <label className="form-check-label font-weight-bold"><b>{label}<sup className="sup">{asterik}</sup></b></label>
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
     makeDropdown=(arr,value,name,label)=>{
        return <div className="form-group">
             <select
             className="form-control"
             value={value}
             name={name}
             onChange={this.handleChange}
             >
                 <option value="">{label}</option>
                 {arr.map((opt)=>{
                     return <option>{opt}</option>
                 })}
             </select>
         </div>
     }
  
   
    render(){
let {gender,addressLine1,state,city,dob,PAN,addressLine2}=this.state.person
let {genderarr,yeararr,montharr,datearr,statearr}=this.state
console.log(dob?.substring(0,1))
 return <div className="container">
   <h3>Customers Details</h3> <br></br>
    {this.makeRadios(genderarr,gender,'gender',"Gender","*")}
    {this.makeDropdown(yeararr,dob?.substring(9),"dob","DOB")}
    {this.makeDropdown(montharr,dob?.substring(2,8),"dob","DOB")}
    {this.makeDropdown(datearr,dob?.substring(0,1),"dob","DOB")}
   <div className="form-group">
    
    <label>PAN</label>
    <input
    type="text"
    className="form-control"
    id="PAN"
    name="PAN"
   // placeholder="Enter Name"
    value={PAN}
    onChange={this.handleChange}
    />
   </div>
   <div className="form-group">
    <label>AdressLine1</label>
    <input
    type="text"
    className="form-control"
    id="age"
    name="addressLine1"
   // placeholder="Enter Age"
    value={addressLine1}
    onChange={this.handleChange}
    />
   </div>

   <div className="form-group">
    <label>AdressLine2</label>
    <input
    type="text"
    className="form-control"
    id="age"
    name="addressLine2"
   // placeholder="Enter Age"
    value={addressLine2}
    onChange={this.handleChange}
    />
   </div>
{this.makeDropdown(statearr,state,"state","State")}
   

   
   
        </div>

    }
    }
    export default CustomerDetForm