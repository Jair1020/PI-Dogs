import React from 'react';
import img   from '../../Images/dog-run.gif'

export default function Loader() {
  return <div>
  <hr/>
  <h2>Loading...</h2>
    <img src= {img} />

  </div>;
}
