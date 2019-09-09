import React, { Component } from 'react';
import AddGenre from './addGenre/AddGenre';
import AddSubgenre from './addSubgenre/AddSubgenre';
import NewSubgenre from './newSubgenre/NewSubgenre';
import Information from './information/Information';

class GenresWrapper extends Component {
    render() {
        const { step, activeGenre, activeSubgenre, genre, subgenre } = this.props;
        console.log(genre);
        console.log(subgenre);
        switch(step) {
            case 1:
                return <AddGenre activeGenre={activeGenre}  genre={genre}/>
            case 2:
                return <AddSubgenre activeSubgenre={activeSubgenre} subgenre={subgenre}/>
            case 3:
                return subgenre === 'Add new' ? 
                    <NewSubgenre /> :
                    <Information />
            case 4:
                return <Information />
        }
    }
}

export default GenresWrapper;