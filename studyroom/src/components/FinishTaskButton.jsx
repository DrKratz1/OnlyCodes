import React from 'react';
import '../styles/FinishTaskButton.css';

function FinishTaskButton() {
    return (
        <div>
            <a href="/NewTask">
                <button className="css-button-3d--blue">
                    Finish Task!
                </button>
            </a>
        </div>
    );
}

export default FinishTaskButton;
