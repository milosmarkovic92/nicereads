import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import subgenres from '../../../js/constants/subgenres.json';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        subGenre: state.subGenres
    }
}

class AddSubgenre extends Component {

    render() {
        const { subGenre, activeSubgenre, step, nextStep, prevStep } = this.props;

        const subGenresList = subgenres.map(item =>
            <Button
                key={item.id}
                className={subGenre === item.subgenre ? "pl-5 pr-5 pt-3 pb-3 btn btn-light active" : "pl-5 pr-5 pt-3 pb-3 btn btn-light"}
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
                <div className="prevNextHolder">
                    {
                        step === 1 ?
                            <Button disabled variant="outline-secondary" className="btn btn-light pl-4 pr-4 pt-3 pb-3 mr-2 mt-4" onClick={prevStep}><i className="prevStep"></i>Back</Button> :
                            <Button variant="outline-secondary" className="btn btn-light pl-4 pr-4 pt-3 pb-3 mr-2 mt-4" onClick={prevStep}><i className="prevStep"></i>Back</Button>
                    }
                    <Button variant="outline-secondary" className="btn btn-light pl-4 pr-4 pt-3 pb-3 ml-2 mt-4" onClick={nextStep}>Next<i className="nextStep"></i></Button>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(AddSubgenre);