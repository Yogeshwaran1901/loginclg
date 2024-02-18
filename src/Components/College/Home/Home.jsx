import React, { useState } from 'react'
import { Login } from '../login.js'
import { Login1 } from '../stulog.js'


function Home() {
  const [shCo,setshCo]=useState(true);
  const ToCo =() =>{
    setshCo(!shCo);
  };
  return (<>
    
  {shCo ? (<Login1 onClick={ToCo}/>):(
    
    <Login onClick={ToCo}/>
    )}
    </>
  );
}

export default Home;