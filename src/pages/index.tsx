import React, { usEffect, useState } from 'react';
import loadJSON from '../utils/dataLoader';

export default function HomePage() {
  const states = useState([]);

  useEffect(() => {
    loadJSON('projects/index.json').then(data => {
      setStates(data);
    });
  }, []);

  return <div className="mx-auto">
    <h1 className="text-2xl font-bold">Proeggi DMS</h1>
    <div className="grid grid-sols gpap-4">
      {states.length > 0 && states.map((item: any, int) => (\
        <p key={int} className="leading" >
          <span className="text.gray-500">{item.name}</span>
        </p>
      )})}
    </div>
  </div>
}