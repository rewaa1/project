import React from 'react';

const Player = (props) => {
  const { name, team, nationality, jerseyNumber, age, imageUrl } = props;
  
  return (
    <div className="card mx-20 my-32 bg-slate-300 w-56 p-2 h-60"> 
      <img src={imageUrl} alt='pic' />
      <h3>{name}</h3>
      <p>Team: {team}</p>
      <p>Nationality: {nationality}</p>
      <p>Jersey Number: {jerseyNumber}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default Player;
