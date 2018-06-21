import React, { Component } from 'react';

class OutputBox extends Component{
	render(){

		return <input type= "text" className="output-box" value = {this.props.data}/>
	}
}

export default OutputBox;