import React,{Component} from "react"
class  OptionsCB extends Component{
    handleChange=(e)=>{
        const {currentTarget:input}=e
        let options={...this.props.options};
        if(input.name==="city" || input.name ==="company")
            options[input.name]=this.updateCB(
                options[input.name],
                input.checked,
                input.value
            );
        
           else  options[input.name]=input.value
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
            <option value="">{label}</option>
            {arr.map((opt)=>{
                return <option>{opt}</option>
            })}
        </select>
    </div>
}

makeCheckboxes=(arr,values,name,label)=>{
    return <>
     <label className="form-check-label font-weight-bold">{label}</label>
     {arr.map((opt)=>{
         return <div className="form-check" key={opt}>
             <input className="form-check-input"
             name={name}
             value={opt}
             type="checkbox"
             checked={values.find((val)=>val===opt)||false}
             onChange={this.handleChange}
             />
                <label className="form-check-label">{opt}</label> 

             
         </div>
     })}
     </>
 }
 render(){
    let {city="",company="",minAge=""}=this.props.options
    let {cities,companies,ages}=this.props
    return(
        <div className="row border bg-light">
            <div className="col-12">
                {this.makeCheckboxes(cities,city.split(","),"city","Select City")}
            </div>
        <div className="col-12">
            {this.makeCheckboxes(companies,company.split(","),"company","Select Company")}
        </div>
        <div className="col-12">
            {this.makeDropdown(ages,minAge,"minAge","Select minimum Age")}
        </div>
        </div>
    )
 }
    
    }



export default OptionsCB