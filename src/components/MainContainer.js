import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import GenresWrapper from './genres/GenresWrapper';
import './MainContainer.css';

export default class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            stepCheck: '',
            genre: '',
            subgenre: '',
            activeGenre: '',
            activeSubgenre: ''
        }
    }

    nextStep = () => {
        this.setState({
            step: this.state.step + 1
        })
    }

    prevStep = () => {
        this.setState({
            step: this.state.step - 1
        })
    }

    stepCheckHandler = (e) => {
        this.setState({
            stepCheck: e.target.value
        })
    }

    addGenreHandler = (e) => {
        this.setState({
            genre: e.target.name,
            activeGenre: e.target.name
        })
    }

    addSubgenreHandler = (e) => {
        this.setState({
            subgenre: e.target.value,
            activeSubgenre: e.target.value
        })
    }

    render() {
        const {step, genre, subgenre} = this.state;
        return (
            <div className={step === 4 ? "main-wrapper-long" : "main-wrapper"}>
                <h5>Add book - New book</h5>
                <div className="stepContainer">
                    <ul className="stepProgress">
                        <li className={this.state.step === 1 ? "activeStep" : ""}>Genre</li>
                        <li className={this.state.step === 2 ? "activeStep" : ""}>Subgenre</li>
                        {
                            this.state.step < 3 ?
                                <li className="dots"></li>:
                                null
                        }
                        {
                            this.state.step > 2 && this.state.subgenre === "Add new" ?
                                <React.Fragment>
                                    <li className={this.state.step === 3 ? "activeStep" : ""}>Add new subgenre</li>
                                    <li className={this.state.step === 4 ? "activeStep" : ""}>Information</li>
                                </React.Fragment> :
                                <li className={this.state.step === 3 ? "activeStep" : ""}>Information</li>
                        }
                    </ul>
                </div>
                <GenresWrapper step={step} activeGenre={this.addGenreHandler} activeSubgenre={this.addSubgenreHandler} genre={genre} subgenre={subgenre} />
                <div className="prevNextHolder">
                    {
                        this.state.step == 1 ?
                            <Button disabled variant="outline-secondary" className="btn btn-light pl-4 pr-4 pt-3 pb-3 mr-2 mt-4" onClick={this.prevStep}><i className="prevStep"></i>Back</Button> :
                            <Button variant="outline-secondary" className="btn btn-light pl-4 pr-4 pt-3 pb-3 mr-2 mt-4" onClick={this.prevStep}><i className="prevStep"></i>Back</Button>
                    }
                    <Button variant="outline-secondary" className="btn btn-light pl-4 pr-4 pt-3 pb-3 ml-2 mt-4" onClick={this.nextStep}>Next<i className="nextStep"></i></Button>
                </div>
            </div>
        )
    }
}
