import React, { Component } from 'react';
import Input from '../../inputs/Input';
import './NewSubgenre.css';

class NewSubgenre extends Component {
    render() {
        return (
            <div className="newSegmentWrapper">
                <div className="newSegmentContainer">
                    <Input />
                </div>
            </div>
        )
    }
}

export default NewSubgenre;