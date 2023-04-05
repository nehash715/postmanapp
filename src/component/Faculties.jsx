import React,{Component} from "react";
import {Link} from "react-router-dom"
import queryString from "query-string"
import http from "./httpService"
import BankPanel from "./bankPanel";
import StudentPanel from "./StudentPanel";

class Faculties extends Component{
state={
    data:{},
  
    
}

 async fetchData(){
    let queryParams=queryString.parse(this.props.location.search)
    let searchStr=this.makeSearchString(queryParams)
    let {page="1"}=queryParams
    //let response= await http.get(`/personApp/persons?page=${page}`)
    let response= await http.get(`/faculty?page=${page}&${searchStr}`)
   console.log(response)
    let {data}=response
    this.setState({data:data})
}
   componentDidMount(){
       this.fetchData()
    }
componentDidUpdate(prevProps,prevState){
if(!prevProps!==this.props){
this.fetchData()
}

}

    handlePage=(incr)=>{
        
        let queryParams=queryString.parse(this.props.location.search)

        let {page="1"}=queryParams

        let newPage=+page + incr;
        queryParams.page=newPage
        this.callURL("/viewFaculties",queryParams)

    }
    handleOption=(options)=>{
    this.callURL("/viewFaculties",options)
    }
    callURL=(url,options)=>{
        let searchString=this.makeSearchString(options);
        this.props.history.push({
            pathname:url,
            search:searchString
        })
    }
    makeSearchString=(options)=>{
        let {courses,page}=options;
        let searchStr=""
       searchStr=this.addToQueryString(searchStr,"page",page)
       // searchStr=this.addToQueryString(searchStr,"courses",courses)
      
        return searchStr
    }
addToQueryString=(str,paramName,paramValue)=>{
  return  paramValue?str?`${str}&${paramName}=${paramValue}`:`${paramName}=${paramValue}`:str
}

    render(){
       let  {data}=this.state
      console.log(data)
let queryParams=queryString.parse(this.props.location.search)
let startIndex=(data.page-1)*3

        return <div className="container">
       
<div className="row">



{startIndex+1}-{startIndex +data.totalItems} of {data.totalNum}
   <div className="row border">
    <div className="col-4">Id</div>
    <div className="col-4">Name</div>
   
    <div className="col-4">courses</div>
    </div>
  
{data.items?.map((p)=>{
    return  <div className="row yellow">
    <div className="col-4">{p.id}</div>
    <div className="col-4">{p.name}</div>
   
    <div className="col-4">{p.courses}</div>
    </div>
})}

        <div className="row">
        {data.page>1? <div  className="col-3"><button className='btn btn-secondary btn-sm' onClick={()=>this.handlePage(-1)}>Prev</button></div>:""}
      {data.page<data.totalItems? <div  className="col-9"><button className='btn btn-secondary btn-sm' onClick={()=>this.handlePage(1)}>Next</button></div>:""}
        </div>
        </div>
        </div>
       
    }
}
export default  Faculties