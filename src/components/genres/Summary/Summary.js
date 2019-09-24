import React, { Component } from "react";
import { connect } from "react-redux";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";
import { addBook } from "../../../js/actions/actions";

const mapStateToProps = state => {
  // console.log(state);
  return {
    bookInfo: [
      {
        bookTitle: state.newBook.bookTitle,
        author: state.newBook.author,
        isbn: state.newBook.isbn,
        publisher: state.newBook.publisher,
        datePublished: state.newBook.datePublished,
        pagesNumber: state.newBook.pagesNumber,
        format: state.newBook.format,
        edition: state.newBook.edition,
        editionLanguage: state.newBook.editionLanguage,
        bookDescription: state.newBook.bookDescription,
        genres: state.newBook.genres,
        subGenres: state.newBook.subGenres
      }
    ]
  };
};

const mapDispatchToProps = dispatch => {
  // console.log(dispatch);
  return {
    addBook: genre => dispatch(addBook(genre))
  };
};

class Summary extends Component {
  sendDataHandler = e => {
    e.preventDefault();
    // console.log(this.props.bookInfo[0]);
    this.props.addBook(this.props.bookInfo[0]);
  };

  render() {
    const { isOpen, toggle } = this.props;
    const {
      bookTitle,
      author,
      genres,
      subGenres,
      format,
      edition,
      pagesNumber,
      publisher
    } = this.props.bookInfo[0];
    console.log(this.props)
    return (
      <MDBContainer>
        <MDBModal isOpen={isOpen} toggle={toggle}>
          <MDBModalHeader toggle={toggle}>Summary</MDBModalHeader>
          <MDBModalBody>
            <h6>Book Title</h6>
            <p>{bookTitle}</p>
            <hr />
            <h6>Author</h6>
            <p>{author}</p>
            <hr />
            <h6>Genre</h6>
            <p>{genres}</p>
            <hr />
            <h6>Subgenre</h6>
            <p>{subGenres}</p>
            <hr />
            <h6>Format</h6>
            <p>{format}</p>
            <hr />
            <h6>Pages Number</h6>
            <p>{pagesNumber}</p>
            <hr />
            <h6>Edition</h6>
            <p>{edition}</p>
            <hr />
            <h6>Publisher</h6>
            <p>{publisher}</p>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={toggle}>
              Close
            </MDBBtn>
            <MDBBtn color="primary" onClick={this.sendDataHandler}>
              Finish
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Summary);
