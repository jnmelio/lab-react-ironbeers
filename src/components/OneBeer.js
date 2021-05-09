import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import axios from 'axios';
import { Link } from 'react-router-dom';

function OneBeer(props) {
  const [oneBeer, updateOneBeer] = useState([]);
  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        updateOneBeer(response.data);
      })
      .catch(() => {});
  }, []);

  let idProps = props.match.params.beerId;

  return (
    <div>
      <NavBar />
      <div>
        {oneBeer.map((beer) => {
          if (beer._id === idProps) {
            return (
              <div className="beerSolo">
                <img
                  className="beerImg"
                  src={beer.image_url}
                  alt="beer pic"
                ></img>
                  <h3>{beer.name}</h3>
                <p>{beer.tagline}</p>
                <p>{beer.attenuation_level}</p>
                <p>{beer.description}</p>
                <p>{beer.contributed_by}</p>
              </div>
            );
          }
        })}
        <Link to='/beers'>Back to the list</Link>
      </div>
    </div>
  );
}

export default OneBeer;
