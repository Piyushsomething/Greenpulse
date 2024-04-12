import React from 'react';

const MissionStatement = ({ statement }) => (
 <div className="m-2 p-4 bg-green-100 rounded-lg">
    <h2 className="text-2xl font-bold mb-4 text-green-700">Mission Statement</h2>
    <p className="text-lg text-green-700">{statement}</p>
 </div>
);

export default MissionStatement;