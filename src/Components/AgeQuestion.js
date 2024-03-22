import React from 'react';

function AgeQuestion() {
    const askAge = () => {
        const age = prompt("Сколько тебе лет?");
        if (age !== null) {
            if (parseInt(age) >= 18) {
                alert("Можно войти");
            } else {
                alert("Нельзя войти");
            }
        }
    };

    return (
        <button onClick={askAge}>Сколько тебе лет?</button>
    );
}

export default AgeQuestion;
