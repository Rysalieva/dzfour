import React from "react";
import AgeQuestion from "./Components/AgeQuestion";
import FlipElement from "./Components/FlipElement";
import NumberInput from "./Components/NumberInput";
import Form from "./Components/Form";

function App() {
    return (
        <div>
            <h1>Добро пожаловать!</h1>
            <AgeQuestion />
            <FlipElement />
            <NumberInput />
            <Form />
        </div>
    );
}

export default App;
