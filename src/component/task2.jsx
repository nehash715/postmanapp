import React,{Component} from "react";
import {Link} from "react-router-dom"
import queryString from "query-string"
import http from "./httpService2"
import NewsPanel from "./newspanel";
import Navbar from "./navbar";
class Task2 extends Component{

state={
    data:{}
}


async fetchData(){
    let queryParams=queryString.parse(this.props.location?.search)
    let searchStr=this.makeSearchString(queryParams)
    //let {page="1"}=queryParams
   
    let response= await http.get(`&${searchStr}`)
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

    handleOption=(options)=>{
        this.callURL("/home",options)
        }
        callURL=(url,options)=>{
            let searchString=this.makeSearchString(options);
            this.props.history?.push({
                pathname:url,
                search:searchString
            })
        }
        makeSearchString=(options)=>{
            let {orderby,section,q,page,sports}=options;
           
            let searchStr=""
         
            searchStr=this.addToQueryString(searchStr,"page",page)
            //searchStr=this.addToQueryString(searchStr,"sports",sports)
            searchStr=this.addToQueryString(searchStr,"order-by",orderby)
            searchStr=this.addToQueryString(searchStr,"section",section)
            searchStr=this.addToQueryString(searchStr,"q",q)
            return searchStr
        }
    addToQueryString=(str,paramName,paramValue)=>{
      return  paramValue?str?`${str}&${paramName}=${paramValue}`:`${paramName}=${paramValue}`:str
    }
    handlePage=(incr)=>{
        
        let queryParams=queryString.parse(this.props.location.search)

        let {page="1"}=queryParams

        let newPage=+page + incr;
        queryParams.page=newPage
        this.callURL("/home",queryParams)

    }
    render(){
    let {data}=this.state
//console.log(data.response?.results)
let arr=data.response?.results
let pageNum=+data.response?.currentPage
console.log(arr)

let queryParams=queryString.parse(this.props.location?.search)
        return <div className="container">
          
            <div className="row">
                <div className="col-3">
                    <NewsPanel  options={queryParams} onOptionChange={this.handleOption}/>
                    <br></br><br></br><br></br>
                </div>
                
                <div className="col-9 ">
               <div className="row display" style={{marginTop:'100px'}}>
                {arr?.map((p)=>{
                    return <div className="col-3 bgcolor border m-2">
                    <p>{p.webTitle}</p>
                    <h6>Source:{p.webPublicationDate}</h6>
                    </div>
                })}
               </div>

                </div>
            </div>
            <div className="row">
            <div className="col-2">{data.response?.startIndex>1? <button className="btn  btn-primary btn-sm" 
            onClick={()=>this.handlePage(-1)}>Prev</button> :"" }</div>
            <div className="col-8"></div>
            <div className="col-2">{pageNum <data.response?.pages? <button className="btn  btn-primary btn-sm" 
            onClick={()=>this.handlePage(1)}>Next</button> :"" }</div>
        </div>
        </div>
    }

}
export default Task2