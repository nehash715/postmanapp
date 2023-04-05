import React,{Component} from "react";
import {Link} from "react-router-dom"
import queryString from "query-string"
import http from "./httpService"
import OptionsCB from "./optionsCB";
class Persons extends Component{
state={
    data:{},
    cities:["London","Paris","New Delhi","Banglore"],
 companies:["Apple","Google","Facebook","Microsoft","Tesla"],
 ages:[25,30,35,40,45,50]
}

 async fetchData(){
    let queryParams=queryString.parse(this.props.location.search)
    let searchStr=this.makeSearchString(queryParams)
    //let {page="1"}=queryParams
    //let response= await http.get(`/personApp/persons?page=${page}`)
    let response= await http.get(`/personApp/persons?${searchStr}`)
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
        this.callURL("/persons",queryParams)

    }
    handleOption=(options)=>{
    this.callURL("/persons",options)
    }
    callURL=(url,options)=>{
        let searchString=this.makeSearchString(options);
        this.props.history.push({
            pathname:url,
            search:searchString
        })
    }
    makeSearchString=(options)=>{
        let {page,city,company,minAge}=options;
        let searchStr=""
        searchStr=this.addToQueryString(searchStr,"page",page)
        searchStr=this.addToQueryString(searchStr,"city",city)
        searchStr=this.addToQueryString(searchStr,"company",company)
        searchStr=this.addToQueryString(searchStr,"minAge",minAge)
        return searchStr
    }
addToQueryString=(str,paramName,paramValue)=>{
  return  paramValue?str?`${str}&${paramName}=${paramValue}`:`${paramName}=${paramValue}`:str
}

    render(){
        const {startIndex,endIndex,numOfItems,persons=[]}=this.state.data
        const {cities,companies,ages}=this.state
        let queryParams=queryString.parse(this.props.location.search)
        return <div className="container">
       
<div className="row">

<div className="col-3">
    <OptionsCB  options={queryParams} cities={cities} companies={companies} ages={ages} onOptionChange={this.handleOption}/>
</div>
<div className="col-9">
<h4>List of Persons</h4>
        <h6>Showing {startIndex} to {endIndex} of {numOfItems}</h6>
        {persons.map((p)=>{
            return(
                <div className="row">
                    <div className="col-2 border">
                    <Link to={`persons/${p.id}`}>{p?.id}</Link>
                    </div>
                    <div className="col-3 border">{p.name}</div>
                    <div className="col-1 border">{p.age}</div>
                    <div className="col-2 border">{p.city}</div>
                    <div className="col-2 border">{p.company}</div>
                </div>
            )
        })}
        <div className="row">
            <div className="col-2">{startIndex>1? <button className="btn  btn-primary btn-sm" 
            onClick={()=>this.handlePage(-1)}>Prev</button> :"" }</div>
            <div className="col-8"></div>
            <div className="col-2">{startIndex+1<numOfItems? <button className="btn  btn-primary btn-sm" 
            onClick={()=>this.handlePage(1)}>Next</button> :"" }</div>
        </div>
        </div>
        </div>
        </div>
    }
}
export default Persons