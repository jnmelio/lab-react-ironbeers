import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import { Switch, Route } from 'react-router-dom';
import AllBeers from './components/AllBeers';
import OneBeer from './components/OneBeer';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import axios from 'axios';

function App() {
  const [allBeers, updateAllBeers] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        updateAllBeers(response.data);
      })
      .catch(() => {});
  }, []);

  const handleAdd = (event) => {
    event.preventDefault();

    let newBeer = {
      name: event.target.name.value,
      tagline: event.target.tagline.value,
      description: event.target.description.value,
      firstBrewed: event.target.first_brewed.value,
      brewerTips: event.target.brewer_tips.value,
      attenuationLevel: event.target.attenuation_level.value,
      contributedBy: event.target.contributed_by.value,
    };
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
      .then((response) => {
        updateAllBeers([response.data, ...allBeers], props => {
          props.history.push('/beers');
        });
      })
      .catch(() => {
        console.log('addition failed');
      });
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={AllBeers} />
        <Route
          exact
          path="/beers/:beerId"
          render={(routeProps) => {
            return <OneBeer {...routeProps} />;
          }}
        />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route
          path="/new-beer"
          render={() => {
            return <NewBeer addBeer={handleAdd} />;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
