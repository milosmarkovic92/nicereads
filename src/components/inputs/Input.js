import React from 'react';
import Form from 'react-bootstrap/Form';
import './Input.css';

export default function Input(props) {
    const { label, name, defaultValues, onChange, type } = props;
    return (
        <Form>
            <Form.Group controlId="subgenre">
                <Form.Control className="mt-4 w-75" type="text" placeholder="Subgenre name" />
            </Form.Group>
            <Form.Group controlId="subgenre1">
                <Form.Control className="mt-4 w-75 noresize" as="textarea" rows="3" placeholder="Type the description" />
            </Form.Group>
            <Form.Group controlId="subgenre2">
                <Form.Check
                    type='checkbox'
                    label='Description is required for this subgenre'
                />
            </Form.Group>
            {/* <label htmlFor={name}>{label}</label> */}
            {/* <input className="input" type={type} name={name} onChange={onChange} placeholder={label} value={defaultValues} /> */}
        </Form>
    )
}