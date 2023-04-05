import React, { Component } from 'react'
import  http from  "./httpService.js"
export default class Orders extends Component {
 state={
    orders:[]
 }
 async componentDidMount(){
       
    let response=await http.get("/myJuniors")
    let {data}=response
  //  console.log(data)
    this.setState({orders:data})

}
  render() {
    let {orders}=this.state
    console.log(orders)
    return (
      <div>
<div className='row'>
    <div className='col-2'>Name</div>
    <div className='col-2'>EmpCode</div>
    <div className='col-2'>Department</div>
    <div className='col-2'>Designation</div>
    <div className='col-2'>Salary</div>
    <div className='col-2'>Gender</div>
</div>

{orders.map((p)=>{
  return <div className='row'>
    <div className='col-2'>{p.name}</div>
    <div className='col-2'>{p.empCode}</div>
    <div className='col-2'>{p.department}</div>
    <div className='col-2'>{p.designation}</div>
    <div className='col-2'>{p.salary}</div>
    <div className='col-2'>{p.gender}</div>
  </div>
})}
      </div>
    )
  }
}
