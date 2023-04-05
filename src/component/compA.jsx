import React,{Component} from "react";
class CompA extends Component {
state={counter:0}
increment=()=>{
    this.setState({counter:this.state.counter+1})
}
componentDidMount(){
    console.log(`AAAA:componentdidmount counter=${this.state.counter}`)
}
componentDidUpdate(prevProps,prevState){
console.log(`AAAA:componentdidupdate counter=${this.state.counter}`)
}
componentWillUnmount(){
    console.log(`AAAA:componentunmount counter=${this.state.counter}`)
}
shouldComponentUpdate(prevProps,prevState){
    console.log(`AAAA:shouldcomponentupdate counter=${this.state.counter}`)
    return false;

}
render(){
    const  {counter}=this.state
    console.log(`AAAA:render counter=${this.state.counter}`)
    return (
        <div className="container bg-warning text-dark">
            Component AAAA<br></br>
            Counter :{counter}
            <button className="btn btn-danger  btn-sm ml-3"
            onClick={()=>this.increment()}
            >Increment</button>
        </div>
    )
}

}
export default CompA