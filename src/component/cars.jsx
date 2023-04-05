import React,{Component} from "react";
import {Link} from "react-router-dom"
import queryString from "query-string"
import http from "./httpService"
import CarPanel from "./carpanel";
import Navbar from "./navbar";
class Cars extends Component{

state={
    data:[]
}


async fetchData(){
    let queryParams=queryString.parse(this.props.location?.search)
    let searchStr=this.makeSearchString(queryParams)
    //let {page="1"}=queryParams
   
    let response= await http.get(`/cars?${searchStr}`)
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
        this.callURL("/cars",options)
        }
        callURL=(url,options)=>{
            let searchString=this.makeSearchString(options);
            this.props.history?.push({
                pathname:url,
                search:searchString
            })
        }
        makeSearchString=(options)=>{
            let {fuel,type,sort,maxprice,minprice}=options;
           
            let searchStr=""
         
            searchStr=this.addToQueryString(searchStr,"fuel",fuel)
            searchStr=this.addToQueryString(searchStr,"minprice",minprice)
            searchStr=this.addToQueryString(searchStr,"type",type)
            searchStr=this.addToQueryString(searchStr,"sort",sort)
            searchStr=this.addToQueryString(searchStr,"maxprice",maxprice)
            return searchStr
        }
    addToQueryString=(str,paramName,paramValue)=>{
      return  paramValue?str?`${str}&${paramName}=${paramValue}`:`${paramName}=${paramValue}`:str
    }
    
    
    render(){
    let {data}=this.state
console.log(data)



let queryParams=queryString.parse(this.props.location?.search)
        return <div className="container">
          
            <div className="row">
                <div className="col-3">
                    <CarPanel  options={queryParams} onOptionChange={this.handleOption}/>
                    <br></br><br></br><br></br>
                </div>
                
                <div className="col-9 ">
               <div className="row display" style={{marginTop:'100px'}}>
               {data.map((p)=>{
                    return <div className="col-3  border m-2 bg-warning">
                    <h6>{p.model}</h6>
                    <p>Price:{p.price}</p>
                    <p>Color:{p.color}</p>
                    <p>Mileage:{p.kms} kms</p>
                    <p>Manufactured in {p.year}</p>
                    </div>
                })}
               </div>

                </div>
            </div>
          
        </div>
    }

}
export default Cars