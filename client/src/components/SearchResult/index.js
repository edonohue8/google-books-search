import React from "react";
import "./style.css";

const SearchResult = props => {
    return (
        <div className="searchBox">
            <h3>Search Results</h3>
            {props.books.map(book => {
                return (
                    <div className="card mb-5">
                        <div className="card-body">
                            <div id={book.title + "Card"} key={book._id}>
                                <div className="imageStyling">
                                    <img src={book.image} alt={book.title} />
                                </div>
                                <br></br>
                                <div>
                                    <h3 className="bookTitle">{book.title}</h3>
                                    <h4 className="bookAuthors">{book.authors}</h4>
                                    <br></br>
                                    <p className="bookDescription pr-3">{book.description}</p>
                                </div>
                            </div>
                            <div>
                                <button className="saveButton btn mt-4 ml-3 mr-1" id={book.id} onClick={(event) => props.handleSavedButton(event)}>
                                    Save this book
                                </button>
                                {/* "noopener noreferrer" for website security */}
                                <a href={book.link} target="_blank" rel="noopener noreferrer">
                                <button className="viewButton btn mt-4">
                                    View this book
                                </button>
                                </a>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
};

export default SearchResult;