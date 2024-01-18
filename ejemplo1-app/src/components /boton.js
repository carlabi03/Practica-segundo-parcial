import React, { useState } from 'react';
import boton from './boton';
import '../styles/boton.css';

function boton({ valor, funcion }) {
  return (
      <button className="nota" onClick={() => setShow((show) => !show)}> Show / Hide
          {valor}
      </button>
  );
}

export default boton;

