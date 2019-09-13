import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Button } from 'react-bootstrap';
import "./Information.css";

class Information extends Component {
  render() {
    const { step, nextStep, prevStep } = this.props;
    return (
      <div>
        <Form>
          <div className="w-100 overflow-hidden d-flex justify-content-center mb-3">
            <div className="w-75 flex-column">
              <Form.Label className="label mt-4">Book title</Form.Label>
              <Form.Control
                className="w-100"
                type="text"
                placeholder="Book title"
              />
            </div>
          </div>
          <div className="w-100 overflow-hidden d-flex justify-content-center mb-3">
            <div className="w-75 flex-column">
              <Form.Label className="label">Author</Form.Label>
              <Form.Control as="select" className="w-100">
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
              <Form.Control className="w-100" type="text" placeholder="ISBN" />
            </div>
          </div>
          <div className="w-100 overflow-hidden d-flex justify-content-center mb-3">
            <div className="w-75 flex-column">
              <Form.Label className="label">Publisher</Form.Label>
              <Form.Control as="select" className="w-100">
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
              <Form.Control className="" type="date" placeholder="DD/MM/YYYY" />
            </div>
            <div className="w-25 float-left ml-5">
              <Form.Label className="label">Number of pages</Form.Label>
              <Form.Control
                className=""
                type="number"
                placeholder="Number of pages"
              />
            </div>
          </div>
          <div className="w-100 overflow-hidden d-flex justify-content-center mb-3">
            <div className="w-50 flex-column">
              <Form.Label className="label">Format</Form.Label>
              <Form.Control as="select" className="w-100">
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
              <Form.Control className="" type="text" placeholder="Edition" />
            </div>
            <div className="w-25 float-left ml-5">
              <Form.Label className="label">Edition language</Form.Label>
              <Form.Control as="select" className="">
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
              />
            </div>
          </div>
          <div className="prevNextHolder" id="prevNextInfo">
                    {
                        step === 1 ?
                            <Button disabled variant="outline-secondary" className="btn btn-light pl-4 pr-4 pt-3 pb-3 mr-2 mt-4" onClick={prevStep}><i className="prevStep"></i>Back</Button> :
                            <Button variant="outline-secondary" className="btn btn-light pl-4 pr-4 pt-3 pb-3 mr-2 mt-4" onClick={prevStep}><i className="prevStep"></i>Back</Button>
                    }
                    <Button variant="outline-secondary" className="btn btn-light pl-4 pr-4 pt-3 pb-3 ml-2 mt-4" onClick={nextStep}>Next<i className="nextStep"></i></Button>
                </div>
        </Form>
      </div>
    );
  }
}

export default Information;
