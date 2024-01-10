// src/RichestPeopleTable.js
import React from 'react';

const Table = () => {
  const richestPeople = [
    { rank: 1, name: 'Elon Musk', netWorth: '$236B', source: 'Tesla, SpaceX' },
    { rank: 2, name: 'Jeff Bezos', netWorth: '$190B', source: 'Amazon' },
    { rank: 3, name: 'Bernard Arnault', netWorth: '$185B', source: 'LVMH' },
    { rank: 4, name: 'Bill Gates', netWorth: '$134B', source: 'Microsoft' },
    { rank: 5, name: 'Mark Zuckerberg', netWorth: '$126B', source: 'Facebook' },
    // Add more entries as needed
  ];

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">World's Richest People</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b ">Rank</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Net Worth</th>
            <th className="py-2 px-4 border-b">Source</th>
          </tr>
        </thead>
        <tbody>
          {richestPeople.map((person) => (
            <tr key={person.rank}>
              <td className="py-2 px-4 border-b">{person.rank}</td>
              <td className="py-2 px-4 border-b">{person.name}</td>
              <td className="py-2 px-4 border-b">{person.netWorth}</td>
              <td className="py-2 px-4 border-b">{person.source}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default Table;
