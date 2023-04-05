import React,{Component} from "react";
import {Link} from "react-router-dom"
import queryString from "query-string"
import http from "./httpService"
import PanelBook from "./panelbook";
class Mystery extends Component{
state={
    data:{},
   barr:["Yes","No"],
   larr:["English","French","Latin","Other"]
    
}

 async fetchData(){
    let queryParams=queryString.parse(this.props.location.search)
    let searchStr=this.makeSearchString(queryParams)
    //let {page="1"}=queryParams
    //let response= await http.get(`/personApp/persons?page=${page}`)
    let response= await http.get(`/booksapp/books/mystery?${searchStr}`)
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
        this.callURL("/mystery",queryParams)

    }
    handleOption=(options)=>{
    this.callURL("/mystery",options)
    }
    callURL=(url,options)=>{
        let searchString=this.makeSearchString(options);
        this.props.history.push({
            pathname:url,
            search:searchString
        })
    }
    makeSearchString=(options)=>{
        let {bestseller,language,page}=options;
        let searchStr=""
        searchStr=this.addToQueryString(searchStr,"page",page)
        searchStr=this.addToQueryString(searchStr,"bestseller",bestseller)
        searchStr=this.addToQueryString(searchStr,"language",language)
        return searchStr
    }
addToQueryString=(str,paramName,paramValue)=>{
  return  paramValue?str?`${str}&${paramName}=${paramValue}`:`${paramName}=${paramValue}`:str
}

    render(){
        const {pageInfo,books=[]}=this .state.data

 console.log(books)
       // let {pageNumber,numberOfPages,numOfItems,totalItemCount}=pageInfo
        const {barr,larr}=this.state
       // console.log(pageInfo?.pageNumber)
        //let pageNum=+pageNumber
        let queryParams=queryString.parse(this.props.location.search)
let pageNum=+pageInfo?.pageNumber
console.log(pageNum)
let startIndex=(pageNum-1)*pageInfo?.numOfItems
let endIndex=books.length> (startIndex+ pageInfo?.numOfItems -1)?startIndex+pageInfo?.numOfItems-1:books.length-1
console.log('start',startIndex)

        return <div className="container">
       
<div className="row">

<div className="col-3">
    <PanelBook  options={queryParams} barr={barr} larr={larr}  onOptionChange={this.handleOption}/>
</div>
<div className="col-9">

   <div className="row border header">
    <div className="col-3">Title</div>
    <div className="col-3">Author</div>
    <div className="col-2">Language</div>
    <div className="col-1">Genre</div>
    <div className="col-1">Price</div>
    <div className="col-1">Bes...</div>
   </div>
   {books.map((p)=>{
    return <div className="row">
        <div className="col-3">{p.name}</div>
        <div className="col-3">{p.author}</div>
    <div className="col-2">{p.language}</div>
    <div className="col-1">{p.genre}</div>
    <div className="col-1">{p.price}</div>
    <div className="col-1">{p.bestseller}</div>
    </div>
   })}   
        <div className="row">
            <div className="col-2">{startIndex>1? <button className="btn  btn-primary btn-sm" 
            onClick={()=>this.handlePage(-1)}>Prev</button> :"" }</div>
            <div className="col-8"></div>
            <div className="col-2">{pageNum< pageInfo?.numberOfPages  ? <button className="btn  btn-primary btn-sm" 
            onClick={()=>this.handlePage(1)}>Next</button> :"" }</div>
        </div>
        </div>
        </div>
        </div>
    }
}
export default Mystery