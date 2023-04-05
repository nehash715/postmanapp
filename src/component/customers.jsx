import React,{Component} from "react";
import {Link} from "react-router-dom"
import CustomerPanel from "./customerPanel";
import queryString from "query-string"
import http from "./httpService"
class Customers extends Component{
    state={
        cusdata:[],
    }
    async fetchData(){
let  queryParams=queryString.parse(this.props.location.search)
let searchStr=this.makeSearchString(queryParams)
let response=await http.get(`/customers?${searchStr}`)
let {data}=response
this.setState({cusdata:data})
    }
    async componentDidMount(){
      this.fetchData()
    }

    componentDidUpdate(prevProps,prevState){
        if(!prevProps!==this.props){
            this.fetchData()
        }
    }
    handleOption=(options)=>{
        this.callURL("/customers",options)
        }
        callURL=(url,options)=>{
            let searchString=this.makeSearchString(options);
            this.props.history.push({
                pathname:url,
                search:searchString
            })
        }
        makeSearchString=(options)=>{
            let {city,gender,payment}=options;
            let searchStr=""
          
            searchStr=this.addToQueryString(searchStr,"city",city)
            searchStr=this.addToQueryString(searchStr,"gender",gender)
            searchStr=this.addToQueryString(searchStr,"payment",payment)
            return searchStr
        }
    addToQueryString=(str,paramName,paramValue)=>{
      return  paramValue?str?`${str}&${paramName}=${paramValue}`:`${paramName}=${paramValue}`:str
    }
    
    
    render(){
let {cusdata}=this.state
//console.log(cusdata)
let queryParams=queryString.parse(this.props.location.search)
const {id}=this.props.match.params;
return (
    <div className="container">
<div className="row">
<div className="col-3">
    <CustomerPanel  options={queryParams} onOptionChange={this.handleOption}/>
</div>
<div className="col-9">
        <div className="row ">
            <div className="col-1">ID</div>
            <div className="col-2">Name</div>
            <div className="col-1">Age</div>
            <div className="col-2">City</div>
<div className="col-2">Gender</div>
<div className="col-2">Payment</div>
<div className="col-1"></div>
<div className="col-1"></div>

    </div>
    {cusdata.map((p)=>{
        return <div className="row border">
    <div className="col-1">{p.id}</div>
            <div className="col-2">{p.name}</div>
            <div className="col-1">{p.name}</div>
            <div className="col-2">{p.city}</div>
<div className="col-2">{p.gender}</div>
<div className="col-2">{p.payment}</div>
<div className="col-1"><button className="btn btn-danger btn-sm"><Link to={`/customers/${p.id}/edit`}>Delete</Link></button></div>
<div className="col-1"><button className="btn btn-warning btn-sm"><Link to={`/customers/${p.id}/edit`}>Edit</Link></button></div>
        </div>
    })}
    </div>
    </div>
    </div>
)
    }
}
export default Customers