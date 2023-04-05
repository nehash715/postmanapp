import React, { Component } from 'react'
import auth from "./AllService"
export default class EmpPage extends Component {
  render() {
    const user=auth.getUser()
    return (
      <div>
      <h1> Welcome {user.name} to the Employee Management Portal</h1>
      </div>
    )
  }
}
