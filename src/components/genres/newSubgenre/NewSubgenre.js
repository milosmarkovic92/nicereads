import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { connect } from 'react-redux';
import { addNewGenreTitle, addNewGenreDescription } from '../../../js/actions/actions';
import "./NewSubgenre.css";
import { FaLink, FaAt } from "react-icons/fa";

const mapDispatchToProps = dispatch => {
  return {
    onChangeTitleValue: e => {
      dispatch(addNewGenreTitle(e.target.value));
    },
    onChangeDescriptionValue: e => {
      dispatch(addNewGenreDescription(e.target.value));
    }
  }
}

const mapStateToProps = state => {
  return {
      subGenreTitle: state.newBook.subGenreTitle,
      subGenreDescription: state.newBook.subGenreDescription
  }
}

class NewSubgenre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subGenreTitle: '',
      subGenreDescription: ''
    }
  }

  render() {
    const { step, prevStep, nextStep, subGenreTitle, subGenreDescription, onChangeDescriptionValue, onChangeTitleValue } = this.props;
    return (
      <div>
        <Form>
          <div className="w-100 overflow-hidden d-flex justify-content-center mb-3">
            <div className="w-75 flex-column mt-4">
              <Form.Control
                id="subGenreTitle"
                className="w-100"
                type="text"
                placeholder="Subgenre name"
                onChange = {onChangeTitleValue}
                value={subGenreTitle}
              />
            </div>
          </div>
          <div className="w-100 overflow-hidden d-flex justify-content-center mb-3">
            <div className="w-75 flex-column">
              <div id="box" className="w-100">
                <Form.Control
                  id="subGenreDescription"
                  className="w-100 noresize"
                  as="textarea"
                  rows="3"
                  placeholder="Type the description..."
                  value={subGenreDescription}
                  onChange = {onChangeDescriptionValue}
                />
                <div id="links">
                  <span className="ml-2 mr-2 font-weight-bold">
                    <a href="URL path to external link" title="Text">
                      <u>A</u>
                    </a>
                  </span>
                  <span className="mr-2">
                    <a href="URL path to external link" title="Link">
                      <FaLink />
                    </a>
                  </span>
                  <span className="mr-2">
                    <a href="URL path to external link" title="Tag">
                      <FaAt />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="prevNextHolder" id="prevNextHolder">
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
        </Form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewSubgenre);
