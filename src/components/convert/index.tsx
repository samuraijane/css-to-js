import { useState } from 'react';
import { convert } from '@americanexpress/css-to-js';
import stringifyObject from 'stringify-object';
import Modal from '../modal';
import './style.scss';

const Convert = () => {
    const [isShowModal, setIsShowModal] = useState(false);
    const [message, setMessage] = useState('CSS has been converted to a JavaScript object and copied to the clipboard.');
    const [output, setOutput] = useState('');
    const [userProvidedText, setUserProvidedText] = useState('');

    let timer;

    const flashModal = (isError) => {
        isError && setMessage('We tried to copy the converted CSS to the clipboard but there was a problem. You will have to copy it manually.');
        setIsShowModal(true);
        timer = setTimeout(() => {
        setIsShowModal(false);
        }, 4000);
    };

    const handleChange = e => {
        setUserProvidedText(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        const output = convert(userProvidedText);
        const outputAsHtml = stringifyObject(output, {
            indent: '  ',
            singleQuotes: false
        });
        setOutput(outputAsHtml);
        navigator.clipboard.writeText(outputAsHtml).then(() => {
            flashModal(false);
          }, function(err) {
            flashModal(true);
            console.error('Could not copy text. ', err);
          });
    };

    return (
        <>
            <div className="conversion-form">
                <div className="conversion-form__form">
                    <h2>Add the CSS syntax you wish to convert below.</h2>
                    <form onSubmit={handleSubmit}>
                        <textarea onChange={handleChange} value={userProvidedText}></textarea>
                        <button>Convert</button>
                    </form>
                </div>
                {output && (
                    <div className="conversion-form__output">
                        <h2>Below is a string representation of your converted CSS.</h2>
                        <div><pre>{output}</pre></div>
                    </div>
                )}
            </div>
            {isShowModal && <Modal message={message} />}
        </>
    );
};

export default Convert;
