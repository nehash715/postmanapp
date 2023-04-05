import React,{Component} from "react";
import {Link} from "react-router-dom"
import queryString from "query-string"
import http from "./httpService"
import BankPanel from "./bankPanel";

class CustCheques extends Component{
state={
    data:{},
  
    
}

 async fetchData(){
    let queryParams=queryString.parse(this.props.location.search)
   // let searchStr=this.makeSearchString(queryParams)
    let {page="1"}=queryParams
    let response= await http.get(`/getAllCheques?page=${page}`)
    //let response= await http.get(`/getAllCheques?page=${page}&${searchStr}`)
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
        this.callURL("/cust/cheques",queryParams)

    }
    handleOption=(options)=>{
    this.callURL("/cust/cheques",options)
    }
    callURL=(url,options)=>{
        let searchString=this.makeSearchString(options);
        this.props.history.push({
            pathname:url,
            search:searchString
        })
    }
    makeSearchString=(options)=>{
        let {page}=options;
        let searchStr=""
        searchStr=this.addToQueryString(searchStr,"page",page)
       
        return searchStr
    }
addToQueryString=(str,paramName,paramValue)=>{
  return  paramValue?str?`${str}&${paramName}=${paramValue}`:`${paramName}=${paramValue}`:str
}

    render(){
       let  {data}=this.state
      

let startIndex=(data.page-1)*5

        return <div className="container">
       

{startIndex+1}-{startIndex +data.totalItems} of {data.totalNum}
   <div className="row border header">
    <div className="col-3">Name</div>
    <div className="col-3">Cheque Number</div>
    <div className="col-2">Bank Name</div>
    <div className="col-1">Branch</div>
    <div className="col-1">Amount</div>
    </div>
  
{data.items?.map((p)=>{
    return  <div className="row ">
    <div className="col-3">{p.name}</div>
    <div className="col-3">{p.chequeNumber}</div>
    <div className="col-2">{p.bankName}</div>
    <div className="col-1">{p.branch}</div>
    <div className="col-1">{p.amount}</div>
    </div>
})}

        <div className="row">
        {data.page>1? <div  className="col-3"><button className='btn btn-primary btn-sm' onClick={()=>this.handlePage(-1)}>Prev</button></div>:""}
      {data.page<3? <div  className="col-9"><button className='btn btn-primary btn-sm' onClick={()=>this.handlePage(1)}>Next</button></div>:""}
        </div>
        </div>
       
    }
}
export default CustCheques