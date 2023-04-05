import React,{Component} from "react";
import {Route,Switch,Redirect,Router} from "react-router-dom"
import BankLogin from "./BankLogin";
import BasicExample from "./basicnav";
import WlcmGbi from "./WlcmGbi";
import Logout from "./Logout";
import BankAllcust from "./BankAllcust";
import BankAddCust from "./BankAddCust";
import Cheques from "./cheques";
import CustCheques from "./CustCheques";
import NetBanking from "./netBanking";
import CustomerDetForm from "./customerDetForm";
import DepositCheque from "./depositCheque";
class BankMain extends Component{
    render(){
        return <div className="container">
        <BasicExample/>
        <Switch>
        <Route path="/login" component={BankLogin}/>
        <Route path="/wlcm" component={WlcmGbi}/>
        <Route path="/logout" component={Logout}/>
        <Route path="/viewcust" component={BankAllcust}/>
        <Route path="/addcust" component={BankAddCust}/>
        <Route path="/cheques" component={Cheques}/>
        <Route path="/depositcheque" component={DepositCheque}/>
        <Route path="/customers" component={CustomerDetForm}/>
        <Route path="/cust/cheques" component={CustCheques}/>
        <Route path="/cust/netbanking" component={NetBanking}/>
        </Switch>
        </div>
    }
}
export default BankMain