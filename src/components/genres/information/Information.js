import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class Information extends Component {
    render() {
        return (
            <div className="newSegmentWrapper">
                <div className="newSegmentContainer">
                    <Form>
                        <Form.Label>Book title</Form.Label>
                        <Form.Group controlId="title">
                            <Form.Control className="mt-4 w-75" type="text" placeholder="Book title" />
                        </Form.Group>
                        <Form.Label>Author</Form.Label>
                        <Form.Control as="select" className="mt-4 w-75">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                        <Form.Label>ISBN</Form.Label>
                        <Form.Group controlId="isbn">
                            <Form.Control className="mt-4 w-75" type="text" placeholder="ISBN" />
                        </Form.Group>
                        <Form.Label>Publisher</Form.Label>
                        <Form.Control as="select" className="mt-4 w-75">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                        <Form.Label>Date published</Form.Label>
                        <Form.Group controlId="date">
                            <Form.Control className="mt-4 w-25" type="date" placeholder="DD/MM/YYYY" />
                        </Form.Group>
                        <Form.Label>Number of pages</Form.Label>
                        <Form.Group controlId="pages">
                            <Form.Control className="mt-4 w-25" type="number" placeholder="Number of pages" />
                        </Form.Group>
                        <Form.Label>Format</Form.Label>
                        <Form.Control as="select" className="mt-4 w-25">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                        <Form.Label>Edition</Form.Label>
                        <Form.Group controlId="edition">
                            <Form.Control className="mt-4 w-25" type="text" placeholder="Edition" />
                        </Form.Group>
                        <Form.Label>Edition language</Form.Label>
                        <Form.Control as="select" className="mt-4 w-25">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                        <Form.Label>Description</Form.Label>
                        <Form.Group controlId="subgenre1">
                            <Form.Control className="mt-4 w-75 noresize" as="textarea" rows="3" placeholder="Type the description" />
                        </Form.Group>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Information;