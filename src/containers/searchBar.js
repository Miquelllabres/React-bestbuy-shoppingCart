import React, { Component } from "react";
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { fetchData } from '../actions/index'

class SearchBar extends Component { 
	constructor(props){
		super(props);

		this.state = { term: '(categoryPath.id=abcat0502000)'};
		this.onInputChange = this.onInputChange.bind(this);
		this.onClickSelect = this.onClickSelect.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.onMouseEnter = this.onMouseEnter.bind(this);
		this.props.fetchData(this.state.term);
		
	}


	onInputChange(evt) {
		this.setState({ term: evt.target.value});
	}

	onFormSubmit(evt){
		evt.preventDefault();
		//here we will fetch products.'
		this.props.fetchData(this.state.term);//this.state.term comes from the input field.
		this.setState({term: ''});
	
	}
	
	onClickSelect(evt){
		this.props.fetchData(this.state.term);
		this.setState({term: ''});

	}
	onMouseEnter(evt){
		this.setState({ term: evt.target.value});
		console.log(evt.target.value);
	}

	render(){
		return(
			<div>
				<button  value="(categoryPath.id=abcat0101000)" onMouseEnter={this.onMouseEnter} onClick={this.onClickSelect} className="btn btn-secondary">Televisions</button> 
				<button  value="(categoryPath.id=abcat0502000)" onMouseEnter={this.onMouseEnter} onClick={this.onClickSelect} className="btn btn-secondary">Laptops</button> 
				<button  value="(categoryPath.id=abcat0401000)" onMouseEnter={this.onMouseEnter} onClick={this.onClickSelect} className="btn btn-secondary">Cameras</button> 
				<button  value="(categoryPath.id=pcmcat209400050001)" onMouseEnter={this.onMouseEnter} onClick={this.onClickSelect} className="btn btn-secondary">Phones</button> 
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
					placeholder="Look for your favourite brands"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange} />

				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Search</button> 
				</span>
			</form>
			</div>
			);
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ fetchData }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar); 