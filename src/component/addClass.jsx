import React,{Component} from "react";
import http from "./httpService";
class AddClass extends Component{
    state={
        person:{course:"",time:"",endTime:"",topic:""},
       coursearr:["REACT",'ANGULAR','JAVASCRIPT']
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
        this.props.history.push("/faculty")
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.postData("/faculty/class",this.state.person)
   alert("Class is successfully Schedule")
    }
    render(){
let {course,time,endTime,topic}=this.state.person
let {coursearr}=this.state
 return <div className="container">

<div className="form-group">
                <label>Course<span className="sup">*</span></label>
               <select className="form-control" name="course" value={course} onChange={this.handleChange}>
                <option disabled value="">
                    Select the  Course
                </option>
                {coursearr.map(c1=><option>{c1}</option>)}
               </select>
            </div>

   <div className="form-group">
    <label>Start Time<span className="sup">*</span></label>
    <input
    type="text"
    className="form-control"
    id="time"
    name="time"
    placeholder="Enter Start Time "
    value={time}
    onChange={this.handleChange}
    />
   </div>
   <div className="form-group">
    <label>End Time<span className="sup">*</span></label>
    <input
    type="text"
    className="form-control"
    id="endTime"
    name="endTime"
    placeholder="Enter End Time"
    value={endTime}
    onChange={this.handleChange}
    />
   </div>
   <div className="form-group">
    <label>Topic<span className="sup">*</span></label>
    <input
    type="text"
    className="form-control"
    id="topic"
    name="topic"
    placeholder="Enter Topic"
    value={topic}
    onChange={this.handleChange}
    />
   </div>

   

   
   <button className="btn btn-primary" onClick={this.handleSubmit}>Schedule</button>
        </div>

    }
    }
    export default AddClass