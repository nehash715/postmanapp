import React,{Component} from "react";
import http from "./httpService";
import  auth from "./AllService"
class AddFaculty extends Component{
    state={
        product:{name:"",code:"",description:"",students:[]},
edit:false,
studentName:[]
    }
async getStudentName(){
    let response=await http.get("/getFacultyNames")
    let {data}=response
    this.setState({studentName:data})
}


async getProductData(){
    const {courseId}=this.props.match.params
    if(courseId){
    let response=await http.get(`/courses/${courseId}`)
    let {data}=response
   // console.log(data)
   
    this.setState({product:data,edit:true})
    }
    else{
        let prod1={name:"",code:"",description:"",student:[]}
        this.setState({product:prod1,edit:false})
    }
}



 componentDidMount(){
    
this.getProductData()
this.getStudentName()
}

componentDidUpdate(prevProps,prevState){
if(prevProps!==this.props){
this.getProductData()
}
}

    handleChange=(e)=>{
       /*const {currentTarget:input}=e
       
        s1.product[input.name]=input.value;*/
        let s1={...this.state}
        let {currentTarget: input}=e
        input.name==="faculty"?s1.product.faculty=
        this.updateCB(
            s1.product.faculty,
            input.checked,
            input.value ,
            s1.product.faculty
            )
       :s1.product[input.name]=input.value;
        this.setState(s1)
        
    }

   async postData(url,obj){
   
    try{
        let response=await http.post(url,obj)
        let {data}=response
        console.log(data)
       this.props.history.push("/facultyCourse")
    }
        
    catch(ex){
        console.log(ex)
        if(ex.response && ex.response.status===400){
            let errors={}
            errors.id=ex.response.data;
            this.setState({errors:errors})

        }
    }
    }
    async putData(url,obj){
        let response=await http.put(url,obj)
        console.log(response)
        this.props.history.push("/facultyCourse")
       // alert("edit successfully")
    }
    handleSubmit=(e)=>{
        e.preventDefault();
    const {courseId}=this.props.match.params

        const {product,edit}=this.state
        edit?this.putData(`/courses/${courseId}`,product):
        this.postData("/courses",product)
        
    }
    makeCheckboxes=(arr,values,name,label)=>{
      //  let {students}=this.state.product
       // values=students
//console.log(values)
        
        return <>
         <label className="form-check-label font-weight-bold">{label}</label>
         {arr.map((opt)=>{
             return <div className="form-check" key={opt}>
                 <input className="form-check-input"
                 name={name}
                 value={opt}
                 type="checkbox"
                 checked={values?values.find((val)=>val===opt):false}
                
                 onChange={this.handleChange}
                 />
                    <label className="form-check-label">{opt}</label> 

                 
             </div>
         })}
         </>
     }

    /* onOptionChange=(students)=>{
        let s1={...this.state}
        s1.product.students=students
        
            this.setState(s1)
     }

     handleChange1=(e)=>{
        const {currentTarget:input}=e
        let s1={...this.state}
       let {students}=this.state.product
            students[input.name]=this.updateCB(
                students[input.name],
                input.checked,
                input.value 
            );
            
            this.onOptionChange(s1)
             
           
        }*/

        
updateCB=(inpValue,checked,value,inpArr)=>{
//let inpArr=inpValue?inpValue.split(","):[];
  // let inpArr=[]
    if(checked) inpArr.push(value)
    else{
        let index=inpArr.findIndex((ele)=>ele===value);
        if(index>=0) inpArr.splice(index,1)
    }
    console.log(inpValue,inpArr)
    return inpArr
}

    render(){
let {name,code,description,students,faculty}=this.state.product
let {studentName}=this.state

//console.log(students)

 return <div className="container">
   <div className="form-group">
    <label>Name</label>
    <input
    type="text"
    className="form-control"
    id="name"
    name="name"
    placeholder="Enter Name"
    value={name}
    onChange={this.handleChange}
    readOnly={this.state.edit}
    />
   
   </div>
   <div className="form-group">
    <label>Course Code</label>
    <input
    type="text"
    className="form-control"
    id="code"
    name="code"
    placeholder="Enter Code"
    value={code}
    onChange={this.handleChange}
    />
   </div>
   <div className="form-group">
    <label>Description</label>
    <input
    type="text"
    className="form-control"
    id="description"
    name="description"
    placeholder="Enter Description"
    value={description}
    onChange={this.handleChange}
    />
   </div>
   {this.makeCheckboxes(studentName,faculty, "faculty","Faculty")}
   <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
        </div>

    }
    }
    export default AddFaculty