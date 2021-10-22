import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const ToDoList = (props) => {

    return (
        <>
            <li><FontAwesomeIcon icon={faTimes} className="faTimes" onClick={() => {
                props.onSelect(props.id);
            }} /> {props.text} </li>
        </>
    );
}

export default ToDoList;