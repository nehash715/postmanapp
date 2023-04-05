import React,{Component} from "react";
import http from "./httpService";
class StudentDetail extends Component{
    state={
        person:{gender:"",dob:"",about:"",  year:"",
        month:"",
        day:"",},
      
        montharr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"],
        genderarr:["Male","Female"]
    }
    handleChange=(e)=>{
        const {currentTarget:input}=e
        let s1={...this.state}
        s1.person[input.name]=input.value;
       // s1[input.name]=input.value
        console.log(s1.person)
        s1.person.dob=s1.person.day+'-'+s1.person.month+'-'+s1.person.year
        this.setState(s1)
    }

   async postData(url,obj){
        let response=await http.post(url,obj)
        console.log(response)
        alert("student details are added")
        this.props.history.push("/student")
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        let s1={...this.state}
       // s1.person.dob=s1.person.day+'-'+s1.person.month+'-'+s1.person.year
        let item={gender:s1.person.gender,dob:s1.person.dob,about:s1.person.about}
        //this.postData("/postStudentDetails",this.state.person)
        console.log(item)
 this.postData("/postStudentDetails",item)
    }
    makeRadios=(arr,value,name,label)=>{
        //console.log(value)
        return <>
         <label className="form-check-label font-weight-bold">{label}<span className="sup">*</span></label>
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
let {gender,dob,about,year,month,day}=this.state.person

let {genderarr,montharr}=this.state
let yeararr=[]
let dayarr=[]

for(let i=1990;i<2020;i++){
    yeararr.push(i)
}
for(let i=1;i<=31;i++){
dayarr.push(i)
}

 return <div className="container">
 {this.makeRadios(genderarr,gender,'gender',"Gender")}
  
  
   

   <div className="form-group">
                <label>Date Of Birth<span className="sup">*</span> </label>
               <select className="form-control" name="year" value={year} onChange={this.handleChange}>
                <option disabled value="">
                    Select the  Year
                </option>
                {yeararr.map(c1=><option>{c1}</option>)}
               </select>
            </div>
            <div className="form-group">
               
               <select className="form-control" name="month" value={month} onChange={this.handleChange}>
                <option disabled value="">
                    Select the  Month
                </option>
                {montharr.map(c1=><option>{c1}</option>)}
               </select>
            </div>
            <div className="form-group">
            
               <select className="form-control" name="day" value={day} onChange={this.handleChange}>
                <option disabled value="">
                    Select the day
                </option>
                {dayarr.map(c1=><option>{c1}</option>)}
               </select>
            </div>

            
            <div className="form-group">
    <label>About</label>
    <input
    type="text"
    className="form-control"
    id="about"
    name="about"
  
    value={about}
    onChange={this.handleChange}
    />
   </div>
  
   <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
        </div>

    }
    }
    export default StudentDetail