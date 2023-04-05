import React, { Component } from 'react'
import http from "./httpService"
export default class ViewEmp extends Component {

state={
    data:[]
}

async componentDidMount(){
    let response=await http.get("/empapp/emps")
    let {data}=response
    this.setState({data:data})
}

details=(empuserid)=>{
  this.props.history.push(`/empapp/viewemp/${empuserid}`)
}

  render() {
    let {data}=this.state
    console.log(data.data)
    return (
      <div className='container'>
        <div className="row">
            <div className="col-4">Name</div>
            <div className="col-4">Email Id</div>
        </div>
        {data.data?.map((p)=>{
            return <div className='row'>
            <div className='col-4'>{p.name}</div>
            <div className='col-4'>{p.email}</div>
            {p.role==="EMPLOYEE"?<div className='col-4'>
                <button className='btn btn-secondary btn-sm' onClick={()=>this.details(p.empuserid)}>Details</button>
            </div>:""}
            </div>
        })}
      </div>
    )
  }
}
