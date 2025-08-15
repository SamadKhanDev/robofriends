// Importing React so we can use JSX
import React from 'react';

// This component takes in props: name, email, id
// It displays one robot's card
const Card = ({ name, email, id }) => {
  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      {/* Robot image generated using their id */}
      <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
      <div>
        {/* Robot's name and email */}
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

// Export this component so we can use it in other files
export default Card;

