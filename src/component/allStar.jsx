import React,{Component} from "react";
import {Link} from "react-router-dom"
import queryString from "query-string"
import http from "./httpService"
import SportPanel from "./sportPanel";
class AllStar extends Component{
state={
    data:{},
    countries:["India","Australia","Portugal","Argentina","Brazil","France"]
    
}

 async fetchData(){
    let queryParams=queryString.parse(this.props.location.search)
    let searchStr=this.makeSearchString(queryParams)
    //let {page="1"}=queryParams
    //let response= await http.get(`/personApp/persons?page=${page}`)
    let response= await http.get(`/sporticons/stars?${searchStr}`)
   // console.log(response)
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
        this.callURL("/all",queryParams)

    }
    handleOption=(options)=>{
    this.callURL("/all",options)
    }
    callURL=(url,options)=>{
        let searchString=this.makeSearchString(options);
        this.props.history.push({
            pathname:url,
            search:searchString
        })
    }
    makeSearchString=(options)=>{
        let {countries,page}=options;
        let searchStr=""
        searchStr=this.addToQueryString(searchStr,"page",page)
        searchStr=this.addToQueryString(searchStr,"countries",countries)
       
        return searchStr
    }
addToQueryString=(str,paramName,paramValue)=>{
  return  paramValue?str?`${str}&${paramName}=${paramValue}`:`${paramName}=${paramValue}`:str
}

    render(){
        const {pageInfo,stars=[]}=this.state.data
       // let {pageNumber,numberOfPages,numOfItems,totalItemCount}=pageInfo
        const {countries}=this.state
       // console.log(pageInfo?.pageNumber)
        //let pageNum=+pageNumber
        let queryParams=queryString.parse(this.props.location.search)
let pageNum=+pageInfo?.pageNumber
console.log(pageNum)
let startIndex=(pageNum-1)*pageInfo?.numOfItems
let endIndex=stars.length> (startIndex+ pageInfo?.numOfItems -1)?startIndex+pageInfo?.numOfItems-1:stars.length-1
console.log('start',startIndex)
console.log('end',endIndex)
        return <div className="container">
       
<div className="row">

<div className="col-3">
    <SportPanel  options={queryParams} Countries={countries}  onOptionChange={this.handleOption}/>
</div>
<div className="col-9">
   <div className="row border header">
    <div className="col-4">Name</div>
    <div className="col-4">Country</div>
    <div className="col-4">Sport</div>
   </div>
        {stars.map((p)=>{
            return(
                <div className="row">
                    <div className="col-4 border">
                    <Link to={`/details/${p.id}`}>{p.name}</Link>
                    </div>

                    <div className="col-4 border">{p.country}</div>
                    <div className="col-4 border">{p.sport}</div>
                  
                </div>
            )
        })}
        <div className="row">
            <div className="col-2">{startIndex>1? <button className="btn  btn-primary btn-sm" 
            onClick={()=>this.handlePage(-1)}>Prev</button> :"" }</div>
            <div className="col-8"></div>
            <div className="col-2">{ pageNum< pageInfo?.numberOfPages  ? <button className="btn  btn-primary btn-sm" 
            onClick={()=>this.handlePage(1)}>Next</button> :"" }</div>
        </div>
        </div>
        </div>
        </div>
    }
}
export default AllStar