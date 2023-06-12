import { useState } from 'react';
import { convert } from '@americanexpress/css-to-js';
import './style.scss';

const Convert = () => {
    const [userProvidedText, setUserProvidedText] = useState('');

    const handleChange = e => {
        setUserProvidedText(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        const output = convert(userProvidedText);
        console.log('p', output);
    };

    return (
        <div className="conversion-form">
            <div className="conversion-form__form">
                <h2>Add the CSS syntax you wish to convert below.</h2>
                <form onSubmit={handleSubmit}>
                    <textarea onChange={handleChange} value={userProvidedText}></textarea>
                    <button>Convert</button>
                </form>
            </div>
        </div>
    );
};

export default Convert;
