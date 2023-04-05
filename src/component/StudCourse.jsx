import React, { Component } from 'react'
import http from "./httpService";
import auth from "./AllService"
export default class StudCourse extends Component {
state={
    data:[]
}

async componentDidMount(){
    const user=auth.getUser()
    let response=await http.get(`/getStudentCourse/${user.name}`)
    let {data}=response
    this.setState({data:data})
    console.log(response)
}

  render() {
    let {data}=this.state
    return (
      <div className='container'>
          <h2>Courses Assigned</h2>
         <div className="row border">
    <div className="col-2">CourseId</div>
    <div className="col-1">Name</div>
    <div className="col-2">Course Code</div>
    <div className="col-4">Description</div>
 
    </div>
  
{data.map((p)=>{
    return  <div className="row green">
    <div className="col-2">{p.courseId}</div>
    <div className="col-1">{p.name}</div>
    <div className="col-2">{p.code}</div>
    <div className="col-4">{p.description}</div>
   
    </div>
})}
      </div>
    )
  }
}
