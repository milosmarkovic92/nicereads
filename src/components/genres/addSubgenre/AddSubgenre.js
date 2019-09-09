import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import subgenres from '../../../constants/subgenres.json';

class AddSubgenre extends Component {

    render() {
        const { subgenre, activeSubgenre } = this.props;

        const subGenresList = subgenres.map(item =>
            <Button
                key={item.id}
                className={subgenre === item.subgenre ? "pl-5 pr-5 pt-3 pb-3 btn btn-light active" : "pl-5 pr-5 pt-3 pb-3 btn btn-light"}
                variant="outline-secondary"
                value={item.subgenre}
                onClick={activeSubgenre}>
                {item.subgenre}
            </Button>
        );
        return (
            <div className="segmentWrapper">
                <div className="segmentContainer">
                    {subGenresList}
                </div>
            </div>
        )
    }
}

export default AddSubgenre;