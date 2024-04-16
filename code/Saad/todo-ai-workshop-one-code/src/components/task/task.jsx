import React from "react";
import "./task.css";

function Task({ name }) {

    return (
        <div className="task">
            {name}
        </div>
    );
}

export default Task;


