import React from 'react';
import {Redirect} from 'react-router-dom';
import '../../App.css';
import Cards from '../Cards';


function Home({authorized}) {
    if(authorized){
        return <Redirect to ="/Login"/>;
    }
    return(
        <>   
        <Cards />
        </>
    );
    
}

export default Home;