import React from 'react';

function Form() {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ title: "Hello", body: "world" });
    };

    const handleCancel = () => {
        console.log("Отменено");
    };

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Send</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
        </form>
    );
}

export default Form;
