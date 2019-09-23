import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./AddGenre.css";
import genres from "../../../js/constants/genres.json";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const mapStateToProps = state => {
  return {
    genre: state.newBook.genres
  };
};

class AddGenre extends Component {
  render() {
    const { genre, activeGenre, step, nextStep, prevStep } = this.props;

    const genresList = genres.map(item => (
      <Button
        key={item.id}
        className={
          genre === item.genre
            ? "pl-5 pr-5 pt-3 pb-3 btn btn-light active"
            : "pl-5 pr-5 pt-3 pb-3 btn btn-light"
        }
        variant="outline-secondary"
        name={item.genre}
        onClick={activeGenre}
      >
        {item.genre}
      </Button>
    ));
    return (
      <div className="segmentWrapper">
        <div className="segmentContainer">{genresList}</div>
        <div className="prevNextHolder">
          {step === 1 ? (
            <Button
              disabled
              variant="outline-secondary"
              className="btn btn-light pl-4 pr-4 pt-3 pb-3 mr-2 mt-4"
              onClick={prevStep}
            >
              <i className="prevStep"></i>Back
            </Button>
          ) : (
            <Button
              variant="outline-secondary"
              className="btn btn-light pl-4 pr-4 pt-3 pb-3 mr-2 mt-4"
              onClick={prevStep}
            >
              <i className="prevStep"></i>Back
            </Button>
          )}
          <Button
            variant="outline-secondary"
            className="btn btn-light pl-4 pr-4 pt-3 pb-3 ml-2 mt-4"
            onClick={nextStep}
          >
            Next<i className="nextStep"></i>
          </Button>
        </div>
      </div>
    );
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "newBook" }])
)(AddGenre);
