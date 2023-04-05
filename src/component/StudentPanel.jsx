import React,{Component} from "react"
class  StudentPanel extends Component{
state={
    cousearr:["ANGULAR","REACT","BOOTSTRAP","CSS","REST AND MICROSERVICES","NODE"]
}

    handleChange=(e)=>{
        const {currentTarget:input}=e
        let options={...this .props.options};
       
            options[input.name]=this.updateCB(
                options[input.name],
                input.checked,
                input.value
            );
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

makeCheckboxes=(arr,values,name,label)=>{
    return <>
     <label className="form-check-label font-weight-bold">{label}</label>
     {arr.map((opt)=>{
         return <div className="form-check" key={opt}>
             <input className="form-check-input"
             name={name}
             value={opt}
             type="checkbox"
             checked={values?.find((val)=>val===opt)||false}
             onChange={this.handleChange}
             />
                <label className="form-check-label">{opt}</label> 

             
         </div>
     })}
     </>
 }
 render(){
  let {cousearr}=this.state
  
    let {courses}=this.props.options
    return(
        <div className="container">


        <div className="row border bg-light">
            <div className="col-12">
                {this.makeCheckboxes(cousearr,courses?.split(","),"courses","Courses")}
          </div>
        </div>
        </div>
    )
 }
    
    }



export default StudentPanel