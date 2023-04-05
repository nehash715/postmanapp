import React, { Component } from 'react'
import queryString from "query-string"
import http from "./httpService";
export default class NetBanking extends Component {
    state={
        all:{},
        
    }
    async fetchData(){
        let queryParams=queryString.parse(this.props.location.search)
        //let searchStr=this.makeSearchString(queryParams)
        let {page="1"}=queryParams
        let response= await http.get(`/getAllNetBankings?page=${page}`)
        //let response= await http.get(`/booksapp/books?${searchStr}`)
       console.log(response)
        let {data}=response
        this.setState({all:data})
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
console.log(queryParams)
    let newPage=+page + incr;
    queryParams.page=newPage
    this.callURL("/viewcust",queryParams)

}
handleOption=(options)=>{
this.callURL("/viewcust",options)
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



  render() {
    let {all}=this.state
    ///console.log(all)
    let startIndex=(all.page-1)*5
    console.log(startIndex)
    return (
      <div className='container'>
        <h4>All  NetBanking Details</h4>
         {startIndex+1}-{startIndex +all.totalItems} of {all.totalNum}
        <div className='row'>
            <div className='col-2'><b>Name</b></div>
            <div className='col-3'><b>BankName</b></div>
            <div className='col-2'><b>PayeeName</b></div>
            <div className='col-2'><b>Comment</b></div>
            <div className='col-3'><b>Amount</b></div>
        </div>
        {all.items?.map((p)=>{
            return   <div className='row'>
            <div className='col-2'>{p.name}</div>
            <div className='col-3'>{p.bankName}</div>
            <div className='col-2'>{p.payeeName}</div>
            <div className='col-2'>{p.comment}</div>
            <div className='col-3'>{p.amount}</div>
        </div>
        })}
 <div className='row'>
     {all.page>1? <div  className="col-3"><button className='btn btn-primary btn-sm' onClick={()=>this.handlePage(-1)}>Prev</button></div>:""}
      {all.page<3? <div  className="col-9"><button className='btn btn-primary btn-sm' onClick={()=>this.handlePage(1)}>Next</button></div>:""}
        </div>
      </div>
    )
  }
}
