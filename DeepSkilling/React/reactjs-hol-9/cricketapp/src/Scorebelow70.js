import React from 'react';

export function Scorebelow70({ players }) {
  let players70 = [];
  
  // Filter the players using arrow functions
  players.map((item) => {
    if (item.score <= 70) {
      players70.push(item);
    }
    return null; 
  });

  return (
    <div>
      {players70.map((item, index) => {
        return (
          <div key={index}>
            <li>Mr. {item.name} <span>{item.score}</span></li>
          </div>
        );
      })}
    </div>
  );
}
