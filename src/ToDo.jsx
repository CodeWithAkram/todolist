import React, { useState } from 'react';
import ToDoList from './ToDoList';


const ToDo = () => {

  const [inputList, setinputList] = useState("");

  const [Items, setItems] = useState([]);

  const itemsEvents = (event) => {
    setinputList(event.target.value);
  };

  const addItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setinputList('');
  }
  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });

  }

  return (
    <>
      <div className="container">
        <div className="container__inner">
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add a Items" value={inputList} onChange={itemsEvents} />
          <button onClick={addItems}>+</button>
          <div className="todo__style">
            <ol>
              {Items.map((itemVal, index) => {
                return <ToDoList key={index} id={index} text={itemVal} onSelect={deleteItems} />
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  )
}

export default ToDo;



