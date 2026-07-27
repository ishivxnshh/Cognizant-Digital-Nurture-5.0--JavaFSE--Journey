import React from 'react';

// Use Destructuring features of ES6 for Odd Team Players
export function OddPlayers([first, , third, , fifth]) {
  return (
    <div>
      <li>First : {first} </li>
      <li>Third : {third} </li>
      <li>Fifth : {fifth}</li>
    </div>
  );
}

// Use Destructuring features of ES6 for Even Team Players[cite: 4]
export function EvenPlayers([, second, , fourth, , sixth]) {
    return (
      <div>
        <li>Second : {second} </li>
        <li>Fourth : {fourth} </li>
        <li>Sixth : {sixth}</li>
      </div>
    );
  }

// Declare two arrays and merge them using the Merge feature of ES6[cite: 4]
const T20Players = ['First Player', 'Second Player', 'Third Player'];
const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];
export const IndianPlayersMerged = [...T20Players, ...RanjiTrophyPlayers];

export function ListofIndianPlayers({ IndianPlayers }) {
    return (
        <div>
            {IndianPlayers.map((player, index) => (
                <li key={index}>Mr. {player}</li>
            ))}
        </div>
    )
}
