import React from "react";
import "./style.css";

function SearchForm(props){
    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <label htmlFor="search"><h2>Search and save your favorite books!</h2></label>
                    <input
                        onChange={props.handleInputChange}
                        value={props.search}
                        name="searchBooks"
                        type="text"
                        className="form-control"
                        placeholder="Enter Search"
                        id="search"
                    />
                    <button type="submit" onClick={props.handleFormSubmit} className="submitButton btn-dark mt-3 mb-5">
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SearchForm;