import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';


export default function Singlepokemon(props) {
  const [aa,setaa] = useState('')
  //console.log(props.pokemon)
  

  function desc(url){
    //const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    axios.get(url)
      .then(data => setaa(data))
      .catch(error => console.log(error));
    return aa  
  }  
  return (
    <Card sx={{ maxWidth: 299 }} style={{ marginRight: '2%', marginTop: '1%' }}>
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.pokemon.name}
        </Typography>
        
      </CardContent>
      
    </Card>
  );
}
