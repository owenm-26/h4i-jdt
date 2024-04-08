import React from "react";
import "./task.css";
import { useState } from "react";
import { MdDelete } from "react-icons/md";

function Task({ name, index, deletefxn }) {

    const [checked, setChecked] = useState(false);

    return (
        <div className="task">
            <input type="checkbox" 
                checked={checked}
                onChange={() => setChecked(!checked)}
            />
            <span
                style={{ textDecoration: checked ? 'line-through' : 'none' }}
            >
                {name}
            </span>
            <div className="delete">
                <MdDelete color="#fff" size="1.3em"
                    onClick={() => deletefxn(index)}
                />
            </div>
        </div>
    );
}

export default Task;


