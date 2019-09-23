import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import Summary from '../Summary/Summary';
import {
  addAuthor,
  addBookDescription,
  addBookTitle,
  addDatePublished,
  addEdition,
  addEditionLanguage,
  addFormat,
  addIsbn,
  addPagesNumber,
  addPublisher
} from "../../../js/actions/actions";
import "./Information.css";

const mapStateToProps = state => {
  return {
    bookTitle: state.newBook.bookTitle,
    author: state.newBook.author,
    isbn: state.newBook.isbn,
    publisher: state.newBook.publisher,
    datePublished: state.newBook.datePublished,
    pagesNumber: state.newBook.pagesNumber,
    format: state.newBook.format,
    edition: state.newBook.edition,
    editionLanguage: state.newBook.editionLanguage,
    bookDescription: state.newBook.bookDescription
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeAuthorValue: e => {
      dispatch(addAuthor(e.target.value));
    },
    onChangeBookDescriptionValue: e => {
      dispatch(addBookDescription(e.target.value));
    },
    onChangeBookTitleValue: e => {
      dispatch(addBookTitle(e.target.value));
    },
    onChangeDatePublishedValue: e => {
      dispatch(addDatePublished(e.target.value));
    },
    onChangeEditionValue: e => {
      dispatch(addEdition(e.target.value));
    },
    onChangeEditionLanguageValue: e => {
      dispatch(addEditionLanguage(e.target.value));
    },
    onChangeFormatValue: e => {
      dispatch(addFormat(e.target.value));
    },
    onChangeIsbnValue: e => {
      dispatch(addIsbn(e.target.value));
    },
    onChangePagesNumberValue: e => {
      dispatch(addPagesNumber(e.target.value));
    },
    onChangePublisherValue: e => {
      dispatch(addPublisher(e.target.value));
    }
  };
};

class Information extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    const {
      step,
      nextStep,
      prevStep,
      onChangeAuthorValue,
      onChangeBookDescriptionValue,
      onChangeBookTitleValue,
      onChangeDatePublishedValue,
      onChangeEditionLanguageValue,
      onChangeEditionValue,
      onChangeFormatValue,
      onChangeIsbnValue,
      onChangePagesNumberValue,
      onChangePublisherValue,
      bookTitle,
      author,
      isbn,
      format,
      edition,
      editionLanguage,
      pagesNumber,
      bookDescription,
      publisher,
      datePublished
    } = this.props;
    return (
      <div>
        <Summary toggle={this.toggle} isOpen={this.state.modal} nextStep={nextStep}/>
        <Form>
          <div className="w-100 overflow-hidden d-flex justify-content-center mb-3">
            <div className="w-75 flex-column">
              <Form.Label className="label mt-4">Book title</Form.Label>
              <Form.Control
                className="w-100"
                type="text"
                placeholder="Book title"
                onChange={onChangeBookTitleValue}
                value={bookTitle}
              />
            </div>
          </div>
          <div className="w-100 overflow-hidden d-flex justify-content-center mb-3">
            <div className="w-75 flex-column">
              <Form.Label className="label">Author</Form.Label>
              <Form.Control
                as="select"
                className="w-100"
                onChange={onChangeAuthorValue}
                value={author}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </div>
          </div>
          <div className="w-100 overflow-hidden d-flex justify-content-center mb-3">
            <div className="w-75 flex-column">
              <Form.Label className="label">ISBN</Form.Label>
              <Form.Control
                className="w-100"
                type="text"
                placeholder="ISBN"
                onChange={onChangeIsbnValue}
                value={isbn}
              />
            </div>
          </div>
          <div className="w-100 overflow-hidden d-flex justify-content-center mb-3">
            <div className="w-75 flex-column">
              <Form.Label className="label">Publisher</Form.Label>
              <Form.Control
                as="select"
                className="w-100"
                onChange={onChangePublisherValue}
                value={publisher}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </div>
          </div>
          <div className="w-100 overflow-hidden d-flex justify-content-center mb-3">
            <div className="float-left w-25 mr-5">
              <Form.Label className="label">Date published</Form.Label>
              <Form.Control
                className=""
                type="date"
                placeholder="DD/MM/YYYY"
                onChange={onChangeDatePublishedValue}
                value={datePublished}
              />
            </div>
            <div className="w-25 float-left ml-5">
              <Form.Label className="label">Number of pages</Form.Label>
              <Form.Control
                className=""
                type="number"
                placeholder="Number of pages"
                onChange={onChangePagesNumberValue}
                value={pagesNumber}
              />
            </div>
          </div>
          <div className="w-100 overflow-hidden d-flex justify-content-center mb-3">
            <div className="w-50 flex-column">
              <Form.Label className="label">Format</Form.Label>
              <Form.Control
                as="select"
                className="w-100"
                onChange={onChangeFormatValue}
                value={format}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </div>
          </div>
          <div className="w-100 overflow-hidden d-flex justify-content-center mb-3">
            <div className="float-left w-25 mr-5">
              <Form.Label className="label">Edition</Form.Label>
              <Form.Control
                className=""
                type="text"
                placeholder="Edition"
                onChange={onChangeEditionValue}
                value={edition}
              />
            </div>
            <div className="w-25 float-left ml-5">
              <Form.Label className="label">Edition language</Form.Label>
              <Form.Control
                as="select"
                className=""
                onChange={onChangeEditionLanguageValue}
                value={editionLanguage}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </div>
          </div>
          <div className="w-100 overflow-hidden d-flex justify-content-center mb-3">
            <div className="w-75 flex-column">
              <Form.Label className="label">Description</Form.Label>
              <Form.Control
                className="w-100 noresize"
                as="textarea"
                rows="3"
                placeholder="Type the description..."
                onChange={onChangeBookDescriptionValue}
                value={bookDescription}
              />
            </div>
          </div>
          <div className="prevNextHolder" id="prevNextInfo">
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
              onClick={this.toggle}
            >
              Next<i className="nextStep"></i>
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Information);
