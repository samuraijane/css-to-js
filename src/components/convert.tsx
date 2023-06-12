import { useState } from 'react';
import { convert } from '@americanexpress/css-to-js';

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
        <>
            <form onSubmit={handleSubmit}>
                <textarea onChange={handleChange} value={userProvidedText}></textarea>
                <button>Convert</button>
            </form>
        </>
    );
};

export default Convert;
