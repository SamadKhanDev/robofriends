// Import React and the Card component
import React from 'react';
import Card from './Card';

// This component receives the whole robots array as props
// It loops (maps) through each robot and renders a Card for it
const CardList = ({ robots }) => {
  return (
    <div>
      {
        // Loop through robots array and create Card for each
        robots.map((robot, i) => {
          return (
            <Card
              key={i} // unique key helps React identify each Card
              id={robot.id}
              name={robot.name}
              email={robot.email}
            />
          );
        })
      }
    </div>
  );
};

// Export this component so we can use it in index.js
export default CardList;
