import React from 'react'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import './main.css'
import { useState } from 'react';
import { useEffect } from 'react';

function valuetext(value) {
    return `${value}Rs`;
}

function Main() {

    const [amount, setAmount] = useState(2000000);
    const [rate, setRate] = useState(8);
    const [duration, setDuration] = useState(0);
    const [EMI, setEMI] = useState(0);

    const handleEmi = () => {
        let interest = rate / 12 / 100;
        let emi = Math.floor(amount * interest * (Math.pow(1 + interest, duration) / (Math.pow(1 + interest, duration) - 1)))
        setEMI(emi)
    }

    return (
        <div>
            <div className='container'>
                <h2 className="heading">EMI CALCULATOR</h2>
                <div className='doubleCOl'>
                    <div className='inputBox'>
                        <Typography className='typo' variant="label" color="inherit" component="div">
                            Loan Amount :
                        </Typography>
                        <Box sx={{ width: '100%', margin: '20px 0' }}>
                            <Slider onChange={(e)=>setAmount(e.target.value) }
                                aria-label="Temperature"
                                defaultValue={2000000}
                                getAriaValueText={valuetext}
                                valueLabelDisplay="on"
                                step={1000000}
                                marks
                                min={1000000}
                                max={8000000}
                            />
                        </Box>
                        <Typography className='typo' variant="label" color="inherit" component="div">
                            Interest rate :
                        </Typography>
                        <Box sx={{ width: '70%', margin: '20px 0' }}>
                            <Slider onChange={(e) => setRate(e.target.value)}
                                aria-label="Temperature"
                                defaultValue={8}
                                getAriaValueText={valuetext}
                                valueLabelDisplay="on"
                                step={2}
                                marks
                                min={6}
                                max={12}
                            />
                        </Box>
                        <Typography className='typo' variant="label" color="inherit" component="div">
                            tenure (Month) :
                        </Typography>
                        <TextField onChange={(e) => setDuration(e.target.value)} id="filled-basic" label="Duration" variant="filled" />
                        <Button onClick={handleEmi} variant="contained">Submit</Button>
                    </div>
                    <div className="resultBox">
                        <div className='backLine'>
                            <h2>Your EMI Amount : <br />
                                &#8377;  {EMI}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main