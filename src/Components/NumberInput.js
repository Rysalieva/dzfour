import React from 'react';

function NumberInput() {
    const handleBlur = (event) => {
        const number = parseInt(event.target.value);
        if (!isNaN(number)) {
            console.log(number * 10);
        }
    };

    return (
        <input
            type="number"
            onBlur={handleBlur}
        />
    );
}

export default NumberInput;
