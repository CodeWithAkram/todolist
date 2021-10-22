import React, { useState } from 'react';
import './todomaterial.css';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ToDoMatCom from './ToDoMatCom';

const ToDoMaterial = () => {

    const [Items, setItems] = useState('');
    const [newItems, setNewItems] = useState([]);

    const inputItems = (event) => {
        setItems(event.target.value);
    }

    const addItems = () => {
        setNewItems((previous) => {
            return [...previous, Items];
        });
        setItems("");
    }

    return (
        <>
            <div className="main__div">
                <div className="center_div">
                    <h1>ToDo Material List</h1>
                    <input type="text" value={Items} placeholder="Add an Item" className="input__field" onChange={inputItems} />
                    <Button className="newbtn" onClick={addItems}> <AddIcon /> </Button>

                    <ol>
                        {newItems.map((val, index) => {
                            return <ToDoMatCom text={val}  key={index} />
                        })}
                    </ol>
                </div>
            </div>
        </>
    );
}

export default ToDoMaterial;