
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const CharacterComponent = () => {


    const [data, setData] = useState({});

    function randomCharacter() {
        return Math.round(Math.random() * 88);
    }


  const fetchRandomCharacter = async () => {
    try{
        const response = await axios(`https://akabab.github.io/starwars-api/api/id/${randomCharacter()}.json`);
        setData(response.data);

    } catch(error) {
        console.log('Failed to fetch data', error);
    }
  };


   const characterInfo = [
    { key: 'image'},
    { key: 'name', label: 'Name'},
    { key: 'height', label: 'Height'},
    { key: 'mass', label: 'Mass'},
   ];



   return(
    <div>

     <h1>StarWars Generator</h1>
     <p>
     {characterInfo.map((item) => (
        <p key={item.key}>
        {item.label}{['Name', 'Height', 'Mass'].includes(item.label) ? ':' : ''}{' '}
        {item.key === 'image' && data[item.key]? (
        <img 
        src={data[item.key]} 
        alt='Character'
        className='character-img'/>
        ):(
        data[item.key]
     )}
        </p>
     ))}
     </p>
     <button onClick={fetchRandomCharacter}>Generate</button>
    </div>

    
   );
};


export default CharacterComponent;