import React, { Component } from 'react'
import http from "./httpService";
import auth from './authService';
export default class PostmanMain extends Component {
    state={
        arr:["GET","POST","PUT","DELETE"],
arr2:["none","form-data","x-www-form-url-encoded","raw","binary","GraphQL"],
url:'',
method:'GET',
data:"",
post:{},
del:{},
status:'',
statustext:'',
time:'',
head:-1,
token:''
    }


showhead=()=>{
  this.setState({head:1})
}
showbody=()=>{
  this.setState({head:-1})
}

    handleChange=(e)=>{
      const {currentTarget:input}=e
      let s1={...this.state}
      s1[input.name]=input.value;
      console.log(s1)
      input.name=="token"?auth.storeToken(input.value):""
      this.setState(s1)
  }
  handleChange1=(e)=>{
    const {currentTarget:input}=e
    let s1={...this.state}
    s1.post=input.value;
    console.log(s1)
    this.setState(s1)
}

  async putData(url,obj){
  console.log("I m in putdat", obj)
    try{
    let response=await http.put(url,obj)

    console.log(response)
    let {data}=response
    console.log(data)
    this.setState({data:JSON.stringify(data)})
  
    }
    catch(err){
      this.setState({data:"Not Found",statustext:"404 Not found"})
    }
}
async delete(url,obj){

  try{
  let response=await http.deleteApi(url)
  let {data}=response
  console.log(data)
  this.setState({data:JSON.stringify(data)})
  
  }
  catch(err){
    this.setState({data:"Not Found",statustext:"404 Not found"})
  }
  
}
async postData(url,obj){
 
  try{

    let response=await http.post(url,obj)
  let {data}=response
  console.log(data)
  this.setState({data:JSON.stringify(data)})
  //auth.storeToken(token)
  }
  catch(err){
    this.setState({data:"Not Found",statustext:"404 Not found"})
  }

}
async  fetchurl(fetchurl){
  
  // console.log(fetchurl)
  try{
   let response=await http.get(fetchurl)
   console.log(response)
   let {data}=response
   this.setState({data:JSON.stringify(data),status:response.status,statustext:response.statusText})
   //auth.storeToken(token)
  }
  catch(err){
    this.setState({data:"Not Found",statustext:"404 Not found"})
  }
   
}

  submit=()=>{
    let {method,url,post,del,data,token}=this.state
   console.log("method", method)
   console.log('url',url)
   console.log('data',data)
    if(method=="GET"){
        
        this.fetchurl(url)
       
    }
    else if(method=="POST"){
        let i1=post.indexOf('{')
        let i2=post.indexOf('}')
        let d=post.substring(i1,i2+1)
        this.postData(url,JSON.parse(d))
    }
    else if(method== "PUT"){

      let i1=post.indexOf('{')
      let i2=post.indexOf('}')
      let d=post.substring(i1,i2+1)
      this.putData(`${url}`,JSON.parse(d))
    }
    else if(method=="DELETE"){
this.delete(`${url}`)
    }
   

}
    makeRadios=(arr,value,name)=>{
        console.log(value)
        return <>
         <div className='rad2'>
         {arr.map((opt)=>{
             return <div className="form-check rad " key={opt}>
                 <input className="form-check-input"
                 name={name}
                 value={opt}
                 type="radio"
            checked={value===opt}
                 onChange={this.handleChange}
                 />
                    <label className="form-check-label text-secondary">{opt}</label> 
                    </div>
            
         })}
         </div>
         </>
     }
  render() {
    let {method,data,post,url,status,statustext,head}=this.state
    console.log(head)
    let {arr,arr2}=this.state
    return (
      <div className='container'>
        <div className='row'>
            <div className='col-3'>
              <div className='left-part'>
                <div className='text-secondary left'>Collection</div>
                <div className='text-secondary left'>Api</div>
                <div className='text-secondary left'>Monitor</div>
                <div className='text-secondary left'>Filter</div>
                <div className='text-secondary left'>History</div>
                </div>
 </div>
    <div className='col-9'>
        <div className='head'>
            <div className="form-group size"> 
               <select className="form-control" name="method" value={method} onChange={this.handleChange}>
              
                {arr.map(c1=><option>{c1}</option>)}
               </select>
            </div>
              <div className="form-group inp">
               
                 <input
                type="text"
                className="form-control"
                id="url"
                name="url"
                onChange={this.handleChange}
               value={url}
               placeholder='Enter Requested Url'
                />
             </div>
             <button className='btn btn-primary' onClick={()=>this.submit()}>Submit</button>
        </div>

    <div className='params'>
        <div className="text-secondary evev">QueryParams</div>
        <div className='text-secondary evev'  onClick={()=>this.showhead()} >Headers</div>
        <div className='text-secondary evev' onClick={()=>this.showbody()}>Body </div>
    </div>
    {head==-1?this.makeRadios(arr2,"",'raw'):""}
       <div className="input-group t-area">
         <div className="input-group-prepend">
   
    </div>
         {head==-1? <textarea className="form-control post" aria-label="With textarea"  onChange={this.handleChange1} ></textarea>:""}
         
         {head==1?<>
         <div className='auth'>
          <div className='key'>Key</div>
          <div className='val'>Value</div>
          <div className='des'>Description</div>
         </div>
         <div className='row'>
         <div className='col-3'> <div className="form-group">
    <input type="text" className="form-control" id="headerkey" name="headerkey" placeholder='Key' onChange={this.handleChange} />
   </div>
   </div>
          <div className='col-6'> <div className="form-group">
    <input type="text" className="form-control" id="token" name="token" placeholder='Value' onChange={this.handleChange} />
   </div></div>
          <div className='col-3'> <div className="form-group back">
    <input type="text" className="form-control" id="description" name="description" placeholder='Description' onChange={this.handleChange} />
   </div></div>
         </div>
         <div className='row'>
         <div className='col-3'> <div className="form-group">
    <input type="text" className="form-control" id="headerkey" name="headerkey" placeholder='Key' onChange={this.handleChange} />
   </div>
   </div>
          <div className='col-6'> <div className="form-group">
    <input type="text" className="form-control" id="token" name="token" placeholder='Value' onChange={this.handleChange} />
   </div></div>
          <div className='col-3'> <div className="form-group back">
    <input type="text" className="form-control" id="description" name="description" placeholder='Description' onChange={this.handleChange} />
   </div></div>
         </div>
         <div className='row'>
         <div className='col-3'> <div className="form-group">
    <input type="text" className="form-control" id="headerkey" name="headerkey" placeholder='Key' onChange={this.handleChange} />
   </div>
   </div>
          <div className='col-6'> <div className="form-group">
    <input type="text" className="form-control" id="token" name="token" placeholder='Value' onChange={this.handleChange} />
   </div></div>
          <div className='col-3'> <div className="form-group back">
    <input type="text" className="form-control" id="description" name="description" placeholder='Description' onChange={this.handleChange} />
   </div></div>
         </div>
         </>:""}
        
           </div>
           <div className='reshead'>
            <div className='text-secondary response'>Response </div>
{status==200?<div className='text-success status'>Status:{status} Ok</div>:""}
            
  {statustext!=""?<div className='text-secondary text'>Status-text:{statustext}</div>:''}
          </div>
          <textarea className="form-control res-Area" aria-label="With textarea" value={data}></textarea>
    </div>
   
</div>
</div>
    )
  }
}
