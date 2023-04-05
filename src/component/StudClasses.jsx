import React, { Component } from 'react'
import http from "./httpService";
import auth from "./AllService"
export default class StudClasses extends Component {
state={
    data:[]
}

async componentDidMount(){
    const user=auth.getUser()
    let response=await http.get(`/getStudentClass/${user.name}`)
    let {data}=response
    this.setState({data:data})
    console.log(response)
}

  render() {
    let {data}=this.state
    return (
      <div className='container'>
          <h2>All Scheduled Classes</h2>
         <div className="row border">
    <div className="col-3">Course Name</div>
    <div className="col-2">Start Time</div>
    <div className="col-2">End Time</div>
    <div className="col-3">Faculty Name</div>
    <div className="col-2">Topic</div>
    </div>
  
{data.map((p)=>{
    return  <div className="row green">
     <div className="col-3">{p.course}</div>
    <div className="col-2">{p.time}</div>
    <div className="col-2">{p.endTime}</div>
    <div className="col-3">{p.facultyName}</div>
    <div className="col-2">{p.topic}</div>
   
    </div>
})}
      </div>
    )
  }
}
