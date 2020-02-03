import React, { Component } from 'react';

class Button extends Component{
    constructor(props){
        super(props);
        this.state={
            Button:this.props.ButtonName
        }
    }
    render(){
        return(
            <div>
                <button className='button'>{this.state.Button}</button>
            </div>
        );
    }
}

export default Button;