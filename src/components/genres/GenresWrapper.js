import React, { Component } from 'react';
import AddGenre from './addGenre/AddGenre';
import AddSubgenre from './addSubgenre/AddSubgenre';
import NewSubgenre from './newSubgenre/NewSubgenre';
import Information from './information/Information';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        subGenre: state.subGenres
    }
}

class GenresWrapper extends Component {
    render() {
        const { step, activeGenre, activeSubgenre, subGenre, nextStep, prevStep } = this.props;
        switch(step) {
            case 1:
                return <AddGenre activeGenre={activeGenre} step={step} nextStep={nextStep} prevStep={prevStep}/>
            case 2:
                return <AddSubgenre activeSubgenre={activeSubgenre} step={step} nextStep={nextStep} prevStep={prevStep}/>
            case 3:
                return subGenre === 'Add new' ? 
                    <NewSubgenre step={step} nextStep={nextStep} prevStep={prevStep}/> :
                    <Information step={step} nextStep={nextStep} prevStep={prevStep}/>
            case 4:
                return <Information step={step} nextStep={nextStep} prevStep={prevStep}/>
            default:
                return alert('kuda mali?');
        }
    }
}

export default connect(mapStateToProps)(GenresWrapper);