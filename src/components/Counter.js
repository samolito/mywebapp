import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
export default class Counter extends Component {
    state={
        counter:1,
        imageList:[]

    }
        compute=(op)=>{
            let sign = op ==='+'?1:-1;
            if(this.state.counter===1 && op==='-') sign=0;
            let newCounter= this.state.counter+sign;
            this.setState({
                counter:newCounter,
                imageList:new Array(newCounter).fill(0)
            })
}



render() 
{ 
    const {counter,imageList }=this.state;
    return (
    <div className="card">
        <div className="card-header">
        <strong>  {counter} : {this.props.value}</strong>  
        </div>
            <div className="ml-auto">
            <button onClick={()=>this.compute('+')} type="button" className="btn btn-primary m-2">+</button>
            
            <button onClick={()=>this.compute('-')} type="button" className="btn btn-primary m-2">-</button>
        </div>
            <div className="card-body">
                {
                imageList.map((value,index)=>(
                
                    <img src={this.props.image} alt="Here i'm"/> 
                   
                ))}
            </div>
        </div>
  );}
}

