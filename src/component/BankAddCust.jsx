import React, { Component } from 'react'

export default class BankAddCust extends Component {
  render() {
    return (
      <div className='container'>
        <h3>New Customer</h3>
         <div className="form-group">
    <label>Name</label>
    <input
    type="text"
    className="form-control"
    id="name"
    name="name"
    placeholder="Enter Name"
    //value={name}
    //onChange={this.handleChange}
    
    />
    
      </div>
      <div className="form-group">
    <label>Password</label>
    <input
    type="text"
    className="form-control"
    id="password"
    name="password"
    
    //value={password}
    //onChange={this.handleChange}
   
    />
    
      </div>
      <div className="form-group">
    <label>Confirm Password</label>
    <input
    type="text"
    className="form-control"
    id="password"
    name="password"
  
    //value={passowrd}
    //onChange={this.handleChange}
   
    />
    
      </div>
      <button className="btn btn-primary" >Create</button>
      </div>
    )
  }
}
