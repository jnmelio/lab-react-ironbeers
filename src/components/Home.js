import React from 'react';
import { Link } from 'react-router-dom';
import RandomBeerPic from '../assets/random-beer.png';
import BeersPic from '../assets/beers.png';
import NewBeerPic from '../assets/new-beer.png';


function Home() {
  return (
    <div>
      <div className="flexBox">
        <Link className="link" to="/beers">
          <img src={BeersPic} alt="beers"></img>
          <h2>All Beers</h2>
        </Link>
      </div>
      <div className="flexBox">
        <Link className="link" to="/random-beer">
          <img src={RandomBeerPic} alt="randombeer"></img>
          <h2>Random Beer</h2>
        </Link>
      </div>
      <div className="flexBox">
        <Link className="link" to="/new-beer">
          <img src={NewBeerPic} alt="newbeer"></img>
          <h2>New Beer</h2>
        </Link>
      </div>
    </div>
  );
}

export default Home;
