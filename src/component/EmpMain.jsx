import React,{Component} from "react";
import {Route,Switch,Redirect,Router} from "react-router-dom"
import BasicExample from "./basicnav";
import EmplogIn from "./EmplogIn";
import Logout from "./Logout";
import auth from "./AllService"
import AdminPage from "./adminpage";
import EmpPage from "./EmpPage";
import ViewEmp from "./ViewEmp";
import AddEmp from "./AddEmp";
import ViewEmpDetails from "./ViewEmpDetails";
import EmpContactDet from "./EmpContactDet";
import ViewEmpBill from "./EmpBIll";
class EmpMain extends Component{
render(){
    const user=auth.getUser()
    //console.log(user)
    return <div className="container">
        <BasicExample user={user}/>

        <Switch>
        <Route path="/empapp/viewemp/:empuserid" component={ViewEmpDetails}/>
        <Route path="/admin/viewemp" component={ViewEmp}/>
        <Route path="/emp/bills" component={ViewEmpBill}/>
        <Route path="/admin/addemp" component={AddEmp}/>
        <Route path="/emp/contact" component={EmpContactDet}/>
            <Route path="/login" component={EmplogIn}/>
            <Route path="/admin" component={AdminPage}/>
            <Route path="/logout" component={Logout}/>
            <Route path="/emp" component={EmpPage}/>
         
                <Redirect from="/" to="/"/>
    </Switch>
    </div>

}
}
export default EmpMain