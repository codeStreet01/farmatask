import React, { useEffect, useState } from 'react'
import Singlepokemon from './singlepokemon/Singlepokemon'
import axios from 'axios';

export default function Allpokemon() {

        const [poke, setpoke] = useState([])
        //const [cond, setCond] = useState(false)

        //const url = `https://pokeapi.co/api/v2/pokemon`;
        //console.log('hey')

        useEffect(() => {
                //console.log('first')
                for (let i = 1; i < 400; i++) {
                        //console.log(i)
                        i = String(i)
                        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
                        axios.get(url)
                                .then(data => {
                                        //console.log((data.data))
                                        //let a = poke
                                        //a.push(data.data.name)
                                        //setpoke(a)
                                        setpoke(oldArray => [...oldArray, data.data]);

                                        //console.log("pokkkkk", a);
                                        //console.log("pokkkkk 2", poke);
                                        //setCond(true)
                                })
                                .catch(error => console.log(error));
                }

        }, []);
        //console.log("=================",poke)
        //let bb  =['w','r','t']
        //console.log(bb)

        return (
                <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap' }}>

                        {
                                poke.map(d => <Singlepokemon pokemon={d} />)
                        }

                </div>
        )
}
