import React from 'react';

function TotalText({ text, value, total }) {
  return (
    <div className="flex justify-between w-full">
      {total ? <h2 className="text-lg font-bold">{text}</h2> : <h2>{text}</h2>}
      <h2 className="font-bold">{value}</h2>
    </div>
  );
}

export default TotalText;
