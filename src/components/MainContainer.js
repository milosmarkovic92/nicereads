import React, { Component } from 'react';
import GenresWrapper from './genres/GenresWrapper';
import { connect } from 'react-redux';
import { addGenre, addSubgenre } from '../js/actions/actions';
import './MainContainer.css';

const mapDispatchToProps = dispatch => {
    return {
        addGenre: genres => dispatch(addGenre(genres)),
        addSubgenre: subGenres => dispatch(addSubgenre(subGenres))
    }
}

const mapStateToProps = state => {
    return {
        subGenre: state.subGenres
    }
}

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            stepCheck: '',
            subGenreTitle: '',
            subGenreDescription: ''
        }
    }

    nextStep = (e) => {
        e.preventDefault();
        this.setState({
            step: this.state.step + 1
        })
    }

    prevStep = (e) => {
        e.preventDefault();
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
        this.props.addGenre(e.target.name);
    }

    addSubgenreHandler = (e) => {
        this.props.addSubgenre(e.target.value);
    }

    render() {
        const {step} = this.state;
        const {subGenre} = this.props;
        return (
            <div className={step >= 3 ? "main-wrapper-long" : "main-wrapper"}>
                <h5>Add book - New book</h5>
                <div className="stepContainer">
                    <ul className="stepProgress">
                        <li className={step === 1 ? "activeStep" : ""}>Genre</li>
                        <li className={step === 2 ? "activeStep" : ""}>Subgenre</li>
                        {
                            step < 3 ?
                                <li className="dots"></li>:
                                null
                        }
                        {
                            step > 2 && subGenre === "Add new" ?
                                <React.Fragment>
                                    <li className={step === 3 ? "activeStep" : ""}>Add new subgenre</li>
                                    <li className={step === 4 ? "activeStep" : ""}>Information</li>
                                </React.Fragment> :
                                <li className={step === 3 ? "activeStep" : ""}>Information</li>
                        }
                    </ul>
                </div>
                <GenresWrapper step={step} activeGenre={this.addGenreHandler} activeSubgenre={this.addSubgenreHandler} nextStep={this.nextStep} prevStep={this.prevStep}/>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);