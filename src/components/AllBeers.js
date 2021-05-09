import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { TextField } from '@material-ui/core';

function AllBeers() {
  const [allBeers, updateAllBeers] = useState([]);
  const [filteredBeers, updateFilteredBeers] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        updateAllBeers(response.data);
        updateFilteredBeers(response.data)
      })
      .catch(() => {});
  }, []);

  const handleSearch = (e) => {
    let input = e.target.value;


    let filteredBeers = allBeers.filter((singleBeer) => {
      return singleBeer.name.toLowerCase().includes(input.toLowerCase());
    });
    updateFilteredBeers(filteredBeers);
  };

  return (
    <div>
      <NavBar />
      <div>
        <TextField
          onChange={handleSearch}
          label="Search"
          placeholder="Search a beer"
        />
      </div>
      <div className="beer">
        {filteredBeers.map((beer) => {
          return (
            <div className="beerSolo">
              <img
                className="beerImg"
                src={beer.image_url}
                alt="beer pic"
              ></img>
              <Link to={`/beers/${beer._id}`}>
                <h3>{beer.name}</h3>
              </Link>
              <p>{beer.tagline}</p>
              <p>{beer.contributed_by}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllBeers;
