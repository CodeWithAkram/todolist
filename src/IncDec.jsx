import React, { useState } from 'react';
import './incdec.css';

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';

import Clock from 'react-digital-clock';


const IncDec = () => {

    const [num, setNum] = useState(0)

    const Increm = () => {
        setNum(num + 1);
    };

    const Decrem = () => {
        if (num > 0) {
            setNum(num - 1);
        } else {
            alert('Sorry, Zero Limit Reached!!!');
            setNum(0);
        }
    };

    return (
        <>
            <div className="container">
                
               
                <div className="inner_div">
                    <h2><Clock /></h2>
                    <h1>{num}</h1>
                    <Button onClick={Increm} className="button__green"> <AddIcon /> </Button>
                    <Button onClick={Decrem} className="button__red"> <RemoveIcon />  </Button>
                </div>
            </div>
        </>
    )
}

export default IncDec;
