import React,{Component} from "react"
import {Link} from "react-router-dom"
class  NewsPanel extends Component{

    state={
        order:["newest","oldest","relevance"],
        sectionarr:["business","technology","politics","lifeStyle"]
    }

    handleChange=(e)=>{
        const {currentTarget:input}=e
        let options={...this.props.options};
        
         options[input.name]=input.value
           console.log("optionCB",options)
           this.props.onOptionChange(options)
           
        }
        handlesubmit=()=>{
           // const {currentTarget:input}=e
            let options={...this.props.options};
            
             options[input.name]=input.value
               console.log("optionCB",options)
               this.props.onOptionChange(options)
               
            }
updateCB=(inpValue,checked,value)=>{
    let inpArr=inpValue?inpValue.split(","):[];
    if(checked) inpArr.push(value)
    else{
        let index=inpArr.findIndex((ele)=>ele===value);
        if(index>=0) inpArr.splice(index,1)
    }
    console.log(inpValue,inpArr)
    return inpArr.join(",")
}
makeDropdown=(arr,value,name,label)=>{
   return <div className="form-group">
        <select
        className="form-control"
        value={value}
        name={name}
        onChange={this.handleChange}
        >
            <option value="" disabled>{label}</option>
            {arr.map((opt)=>{
                return <option>{opt}</option>
            })}
        </select>
    </div>
}

makeCheckboxes=(arr,value,name,label)=>{
    return <>
     <label className="form-check-label font-weight-bold">{label}</label>
     {arr.map((opt)=>{
         return <div className="form-check" key={opt}>
             <input className="form-check-input"
             name={name}
             value={opt}
             type="radio"
           //  checked={value}
             onChange={this.handleChange}
             />
                <label className="form-check-label">{opt}</label> 

             
         </div>
     })}
     </>
 }
 render(){
    let {orderby="",section="",q=""}=this.props.options
    let {order,sectionarr}=this.state
    console.log(section)
    return(


        
        <div className="row border bg-light">
            
       
        <div className="col-12">
            {this.makeDropdown(order,orderby,"orderby","Select order")}
        </div>
        <br></br><br></br><br></br>
        <div className="col-12">
                {this.makeCheckboxes(sectionarr,section,"section","Section")}
            </div>
        
        <div className="searchbox">
   
    <input
    type="text"
    
    id="q"
    name="q"
    placeholder="Enter search text"
    value={q}
    onChange={this.handleChange}
    />
    <button className="buton" onClick={()=>this. handlesubmit}>Submit</button>
   </div>
        </div>
       
    )
 }
    
    }



export default NewsPanel
