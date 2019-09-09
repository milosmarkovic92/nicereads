import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './AddGenre.css';
import genres from '../../../constants/genres.json';
import { connect } from 'react-redux';
import { addBook } from '../../../actions/booksActions';


class AddGenre extends Component {

    render() {
        const { genre, activeGenre } = this.props;

        const genresList = genres.map(item =>
            <Button
                key={item.id}
                className={genre === item.genre ? "pl-5 pr-5 pt-3 pb-3 btn btn-light active" : "pl-5 pr-5 pt-3 pb-3 btn btn-light"}
                variant="outline-secondary"
                name={item.genre}
                onClick={activeGenre}>
                {item.genre}
            </Button>
        );
        return (
            <div className="segmentWrapper">
                <div className="segmentContainer">
                    {genresList}
                </div>
            </div>
        )
    }
}

export default AddGenre;