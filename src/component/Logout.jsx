import React, { Component } from 'react'
import auth from "./AllService"

export default class Logout extends Component {

componentDidMount(){
auth.logout();
this.props.history.push("/login")
//window.location="/login"
}

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
