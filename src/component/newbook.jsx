import React,{Component} from "react";
import http from "./httpService";
class NewBook extends Component{
    state={
        person:{name:"",author:"",description:"",blurb:"",review:"",
        price:"",year:"",publisher:"",rating:"",genre:"",language:"",bestseller:"",newarrival:""},
        langarr:["Latin", "English", "French", "Others"],
        genrearr:["Fiction","Children","Mystery", "Management"],
        rd:["Yes","No"]
    }
    handleChange=(e)=>{
        const {currentTarget:input}=e
        let s1={...this.state}
        s1.person[input.name]=input.value;
        this.setState(s1)
    }

   async postData(url,obj){
        let response=await http.post(url,obj)
        console.log(response)
        this.props.history.push("/books")
    }
    makeCheckboxes=(arr,value,name,label)=>{
        return <>
         <label className="form-check-label font-weight-bold">{label}</label>
         {arr.map((opt)=>{
             return <div className="form-check" key={opt}>
                 <input className="form-check-input"
                 name={name}
                 value={value}
                 type="radio"
                 checked={opt}
                 onChange={this.handleChange}
                 />
                    <label className="form-check-label">{opt}</label> 
    
                 
             </div>
         })}
         </>
     }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.postData("/booksapp/book",this.state.person)

    }
    render(){
let {name,author,description,blurb,review,price,year,publisher,rating,genre,language,bestseller="",newarrival=""}=this.state.person
let {langarr,genrearr,rd}=this.state
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
    />
   </div>
   <div className="form-group">
    <label>Author</label>
    <input
    type="text"
    className="form-control"
    id="author"
    name="author"
    
    value={author}
    onChange={this.handleChange}
    />
   </div>
   <div className="form-group">
    <label>Description</label>
    <input
    type="text"
    className="form-control"
    id="dob"
    name="description"
    
    value={description}
    onChange={this.handleChange}
    />
   </div>
   <div className="form-group">
    <label>Blurb</label>
    <input
    type="text"
    className="form-control"
    id="dob"
    name="blurb"
    
    value={blurb}
    onChange={this.handleChange}
    />
   </div>
   <div className="form-group">
    <label>Review</label>
    <input
    type="text"
    className="form-control"
    id="dob"
    name="review"
    
    value={review}
    onChange={this.handleChange}
    />
   </div>
   <div className="form-group">
    <label>Price</label>
    <input
    type="text"
    className="form-control"
    id="dob"
    name="price"
    
    value={price}
    onChange={this.handleChange}
    />
   </div>
   <div className="form-group">
    <label>Year</label>
    <input
    type="text"
    className="form-control"
    id="dob"
    name="year"
    
    value={year}
    onChange={this.handleChange}
    />
   </div>
   <div className="form-group">
    <label>Publisher</label>
    <input
    type="text"
    className="form-control"
    id="dob"
    name="publisher"
    
    value={publisher}
    onChange={this.handleChange}
    />
   </div>
   <div className="form-group">
    <label>Rating</label>
    <input
    type="text"
    className="form-control"
    id="dob"
    name="rating"
    
    value={rating}
    onChange={this.handleChange}
    />
   </div>
   <div className="form-group">
                <label>Genre</label>
               <select className="form-control" name="genre" value={genre} onChange={this.handleChange}>
                <option disabled value="">
                    Select the  Genre
                </option>
                {genrearr.map(c1=><option>{c1}</option>)}
               </select>
            </div>


   <div className="form-group">
                <label>Language</label>
               <select className="form-control" name="language" value={language} onChange={this.handleChange}>
                <option disabled value="">
                    Select the Language
                </option>
                {langarr.map(c1=><option>{c1}</option>)}
               </select>
            </div>
            {this.makeCheckboxes(rd,bestseller, "bestseller",'BestSeller')}<br></br>
            {this.makeCheckboxes(rd,newarrival,"newarrival",'New Arrival' )}
   <button className="btn btn-primary" onClick={this.handleSubmit}>Create</button>
        </div>

    }
    }
    export default NewBook