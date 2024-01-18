import React, { useState } from 'react';
import Nota from './nota';
import '../styles/nota.css';

function components() {
   
    const [show, setShow] = useState(true);
  
    return (
      <div className="n">
        <button onClick={() => setShow((show) => !show)}> Show / Hide</button>
        {show ? <h1>Welcome to React Challenges</h1> : null}
      </div>
    );
  }
  export default components;