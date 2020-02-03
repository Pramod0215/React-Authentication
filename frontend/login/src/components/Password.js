import React, { Component } from 'react';

class Password extends Component{
    constructor(props){
        super(props);
        this.state={
            Input:''
        }
        
    }

    render(){
        return(
            <div>
                <input type='password' onChange={(event)=>this.setState({Input:event.target.value})}></input>
            </div>
            
        );
    }
}
export default Password;