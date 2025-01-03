import React from 'react';
import './LandingPage.css' ;
import Button from '@mui/material/Button';

export default function LandingPage(){
    return (
        <div className="slogan">
            
            <Button className="button" variant="contained" >Contained</Button>
            <Button className="button" variant="outlined">Outlined</Button>
            <h1>Discover the Pulse of </h1>
            <h1>Sports Worldwide</h1>
           
        </div>
        );
}