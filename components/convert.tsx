import { convert } from '@americanexpress/css-to-js'; 

const Convert = () => {

    const handleClick = () => {
        const output = convert(`.myClass { color: 'red' }`);
        console.log(output);
    };

    return (
        <button onClick={handleClick}>Convert</button>
    );
};

export default Convert;
