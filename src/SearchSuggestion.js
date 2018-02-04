import React from 'react';


const SearchSuggestion = (props) => {
    let searchString = props.text;
    let match = props.match;
    let text = searchString.replace(match, ','+match+',')
    let splits = text.split(',');
    // TODO: find better solution for spliting string without deleting separator

    return (
        <div className="search-suggestion" onClick={props.onClick}>
            <span className="search-suggestion-text">
                {splits.map(s => (s===match ? <span key={s} className="search-match">{s}</span> : s))}
            </span>
            <span> ({props.quantity})</span>
        </div>
    );
}

export default SearchSuggestion;
