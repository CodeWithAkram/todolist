import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const ToDoMatCom = (props) => {

    const [line, setLine] = useState(false)

    const cutLine = () => {
        setLine(true);
    }
    return (
        <>
            <div className="todo__style">
                <li style={{ textDecoration: line ? "line-through" : "none" }}>
                <span onClick={cutLine}><DeleteIcon className="deleteicon" /> </span>
                {props.text}
            </li>
        </div>
        </>
    )
}

export default ToDoMatCom;
