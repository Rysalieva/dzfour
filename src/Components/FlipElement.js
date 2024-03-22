import React, { useState } from 'react';

function FlipElement() {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleDoubleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div
            style={{
                width: "100px",
                height: "100px",
                margin: "20px",
                backgroundColor: "lightblue",
                transform: isFlipped ? "rotate(180deg)" : "none",
                transition: "transform 0.3s"
            }}
            onDoubleClick={handleDoubleClick}
        >
            Дважды кликни, чтобы перевернуть
        </div>
    );
}

export default FlipElement;
