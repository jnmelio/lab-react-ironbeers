import React from 'react';
import NavBar from './NavBar';

function NewBeer(props) {
  const { addBeer } = props;
  return (
    <div>
      <NavBar />
      <div >
        <form className="flexBox" onSubmit={addBeer}>
          <input name="name" type="text" placeholder="Enter a beer name" />
          <input name="tagline" type="text" placeholder="Enter a tagline" />
          <input
            name="description"
            type="text"
            placeholder="Enter a description"
          />
          <input name="first_brewed" type="text" placeholder="Enter a date" />
          <input name="brewer_tips" type="text" placeholder="Enter a tip" />
          <input
            name="attenuation_level"
            type="number"
            placeholder="Enter an attenuation level"
          />
          <input
            name="contributed_by"
            type="text"
            placeholder="Enter your name"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default NewBeer;
