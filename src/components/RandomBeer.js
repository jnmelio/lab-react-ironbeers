import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import axios from 'axios';
import { Link } from 'react-router-dom';

function RandomBeer() {
  const [randomBeer, updateRandomBeer] = useState([]);
  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
        updateRandomBeer(response.data);
      })
      .catch(() => {});
  }, []);
  return (
    <div>
      <NavBar />
      <div>
        <div className="beerSolo">
          <img
            className="beerImg"
            src={randomBeer.image_url}
            alt="beer pic"
          ></img>
          <h3>{randomBeer.name}</h3>
          <p>{randomBeer.tagline}</p>
          <p>{randomBeer.first_brewed}</p>
          <p>{randomBeer.attenuation_level}</p>
          <p>{randomBeer.description}</p>
          <p>{randomBeer.contributed_by}</p>
        </div>
      </div>
      <Link to='/beers'><button>Back to the list</button></Link>
    </div>
  );
}

export default RandomBeer;
