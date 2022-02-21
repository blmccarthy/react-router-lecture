import React from 'react';
import { useHistory } from 'react-router-dom';

function Home() {

  const history = useHistory();

  const handleClick = () => {
    alert('Hey you clicked me!');
    // change location
    history.push('/animals')
  }

  return (
    <div>
      <button onClick={handleClick}>Letsa Goooo!</button>
      <h1>HOME</h1>
      <img src="https://pixy.org/download/4718707/" width={500}/>
    </div>
  );
}

export default Home;
