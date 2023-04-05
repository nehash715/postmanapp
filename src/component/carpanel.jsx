import React,{Component} from "react"
import {Link} from "react-router-dom"
class  CarPanel extends Component{

    state={
        fuelarr:["Diesel", "Petrol"],
    typearr:["Sedan","Hatchback"],
    sortarr:["kms","price","year"],
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

makeRadios=(arr,value,name,label)=>{
    console.log(value)
    return <>
     <label className="form-check-label font-weight-bold">{label}</label>
     {arr.map((opt)=>{
         return <div className="form-check" key={opt}>
             <input className="form-check-input"
             name={name}
             value={opt}
             type="radio"
        checked={value===opt}
             onChange={this.handleChange}
             />
                <label className="form-check-label">{opt}</label> 

             
         </div>
     })}
     </>
 }

 render(){
    let {type="",fuel="",sort="",minprice,maxprice}=this.props.options
    let {typearr,fuelarr,sortarr}=this.state
    
    return(
  <div className="row border bg-light">
              <div className="col-12">
         {this.makeRadios(fuelarr,fuel,'fuel',"Fuel")}
        </div>
        <br></br>
        <div className="col-12">
        {this.makeRadios(typearr,type,'type',"Type")}
            </div>
        <br></br>
        <div className="col-12">
            {this.makeRadios(sortarr,sort,'sort',"Sort")}
        </div>
 <div className="searchbox">
   Price range:
   <input
   type="text"
   
   id="minprice"
   name="minprice"
   placeholder="minprice"
   value={minprice}
   onChange={this.handleChange}
   />
   
   <input
   type="text"
   
   id="maxprice"
   name="maxprice"
   placeholder="maxprice"
   value={maxprice}
   onChange={this.handleChange}
   />
  
  </div>
        </div>
       
    )
 }
    
    }



export default  CarPanel
