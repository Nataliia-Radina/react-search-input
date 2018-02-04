import React, { Component } from 'react';
import Button from './Button';
import SearchSuggestion from './SearchSuggestion';


class SearchInput extends Component {

    constructor(props){
        super(props)
        this.state = {
            value: '',
            focus: false,
            suggestions: []
        }
        this.baseState = this.state
    }


    handleChange = (event) => {
        this.setState({ value: event.target.value })
    }

    getSearchSuggestions = (event) => {

        let searchString = this.state.value.trim().toLowerCase();

        let url = "http://localhost:5000/search?q=";

        fetch(url + event.target.value)
            .then(response => {
                if (response.ok) {
                   return  response.json()
                }
                else {
                    throw new Error ('something went wrong')
                }
            })
            .then(response => {
                this.setState({
                    suggestions: response.suggestions.filter((s)=>{
                        return s.searchterm.toLowerCase().match(searchString);
                    })
                })

            })
            .catch(err=> { console.log(err)});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('search for ' + this.state.value)
    }

    onFocus = () => this.setState({focus: true});

    onBlur = () => setTimeout(() => {
        this.setState({focus: false});
    }, 100);


    clearInput = () => {
        this.setState(this.baseState);
    }



    render() {
        return (
            <form  className={'search-form' + (this.state.focus ? ' search-form-active' : '')}>
                <input type="search"
                       onChange={this.handleChange}
                       onKeyUp={this.getSearchSuggestions}
                       value={this.state.value}
                       className="search-input"
                       onBlur={this.onBlur}
                       onFocus={this.onFocus}
                       placeholder="Zoeken"
                       aria-label="Zoeken"/>
                <Button onClick={this.clearInput} className="button-clear" label="Reset" type="reset" />
                <Button onClick={this.handleSubmit} className="button-submit" label="Submit" type="reset" />
                {this.state.focus && this.state.value.length > 2 && <div>{this.state.suggestions.map(s => (
                    <SearchSuggestion
                        match={this.state.value}
                        key={s.searchterm}
                        text={s.searchterm}
                        quantity={s.nrResults}
                        onClick={this.handleSubmit} />
                ))}</div>}
            </form>

        );
    }
}

export default SearchInput;