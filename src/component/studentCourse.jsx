import React, { Component } from 'react'
import http from "./httpService"
import {Link} from "react-router-dom"
export default class StudentCourse extends Component {
    state={
        data:[]
    }

async componentDidMount(){
    let response=await  http.get("/courses")
    let {data}=response
    //console.log(response)
    //console.log(data)
    this.setState({data:data})
}
edit=(courseId)=>{
  this.props.history.push(`/course/edit/${courseId}`)
}


  render() {
    let {data}=this.state
    console.log(data)
    return (
      <div className="container">
        <h4>Add Student to Course</h4>
         <div className="row border">
    <div className="col-2">CourseId</div>
    <div className="col-1">Name</div>
    <div className="col-2">Course Code</div>
    <div className="col-4">Description</div>
    <div className="col-2">Student Name</div>
    </div>
  
{data.map((p)=>{
    return  <div className="row yellow">
    <div className="col-2">{p.courseId}</div>
    <div className="col-1">{p.name}</div>
    <div className="col-2">{p.code}</div>
    <div className="col-4">{p.description}</div>
    <div className="col-2">{p.students.map((k)=>{
        return <div className="row"><div className="col-8"> {k}</div> </div>
    })}</div>
    <div className='col-1'><button className='btn btn-secondary' onClick={()=>this.edit(p.courseId)} >Edit</button></div>
    </div>
})}
      </div>
    )
  }
}
