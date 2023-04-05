import React,{Component} from "react";
import http from "./httpService";
class AddStar extends Component{
    state={
        person:{name:"",info:"",dob:"",country:"",genre:""},
        countriesarr:["India","Australia","Portugal","Argentina","Brazil","France"],
        genrearr:["Cricket","Football"]
    }
    handleChange=(e)=>{
        const {currentTarget:input}=e
        let s1={...this.state}
        s1.person[input.name]=input.value;
        this.setState(s1)
    }

   async postData(url,obj){
        let response=await http.post(url,obj)
        console.log(response)
        this.props.history.push("/all")
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.postData("/sporticons/star",this.state.person)

    }
    render(){
let {name,info,dob,country,sport=""}=this.state.person
let {countriesarr,genrearr}=this.state
 return <div className="container">
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
    <label>Info</label>
    <input
    type="text"
    className="form-control"
    id="info"
    name="info"
    placeholder="Enter Info"
    value={info}
    onChange={this.handleChange}
    />
   </div>
   <div className="form-group">
    <label>DOB</label>
    <input
    type="text"
    className="form-control"
    id="dob"
    name="dob"
    placeholder="Enter dob"
    value={dob}
    onChange={this.handleChange}
    />
   </div>

   <div className="form-group">
                <label>Country</label>
               <select className="form-control" name="country" value={country} onChange={this.handleChange}>
                <option disabled value="">
                    Select the  Country
                </option>
                {countriesarr.map(c1=><option>{c1}</option>)}
               </select>
            </div>


   <div className="form-group">
                <label>Genre</label>
               <select className="form-control" name="sport" value={sport} onChange={this.handleChange}>
                <option disabled value="">
                    Select the Sport
                </option>
                {genrearr.map(c1=><option>{c1}</option>)}
               </select>
            </div>
   <button className="btn btn-primary" onClick={this.handleSubmit}>Create</button>
        </div>

    }
    }
    export default AddStar