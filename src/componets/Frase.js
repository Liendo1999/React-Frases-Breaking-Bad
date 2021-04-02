import React, {Fragment} from 'react';
import './Frase.css'

const Frase = ({frase}) => {
    return (
    <Fragment>
        <div id="frase">
            <h2>{frase.quote}</h2>
            <p>- {frase.author}</p>
        </div>
    </Fragment>)
};

export default Frase;
