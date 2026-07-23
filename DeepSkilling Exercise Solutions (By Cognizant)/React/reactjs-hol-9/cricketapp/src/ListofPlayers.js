import React from 'react';

export function ListofPlayers({ players }) {
  return (
    <div>
      {players.map((item, index) => {
        return (
          <div key={index}>
            <li>Mr. {item.name} <span>{item.score}</span></li>
          </div>
        );
      })}
    </div>
  );
}
