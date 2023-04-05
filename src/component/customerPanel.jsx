import React,{Component} from "react"
import {Link} from "react-router-dom"
class  CustomerPanel extends Component{

    state={
        cities:["Delhi", "Noida", "Gurgaon","Jaipur"],
    paymentopt:["Credit Card","Debit Card","Wallet"],
    genderopt:["Male","Female"],
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
    let {city="",gender="",payment=""}=this.props.options
    let {cities,genderopt,paymentopt}=this.state
    
    return(
  <div className="row border bg-light">
              <div className="col-12">
         {this.makeRadios(cities,city,'city',"Select city")}
        </div>
        <br></br>
        <div className="col-12">
        {this.makeRadios(genderopt,gender,'gender',"Select Gender")}
            </div>
        <br></br>
        <div className="col-12">
            {this.makeRadios(paymentopt,payment,'payment',"Select payment")}
        </div>
      
        </div>
       
    )
 }
    
    }



export default  CustomerPanel
