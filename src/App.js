import React, { useEffect } from 'react'
import Allpokemon from './components/allpokemon/Allpokemon';
import Header from './components/header/Header'

export default function App() {
  //console.log('appp')
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Header />
      <div style={{ width: '100%', height: '85%' ,overflow:'auto',paddingLeft:'2%'}}><Allpokemon /></div>
      <div style={{width:'100%',height:'5%',backgroundColor:'white',display:'flex',justifyContent:'center',alignItems:'center'}}>Created with ❤ by vaibhav</div>
    </div>
  )
}
