import React from 'react';
import { LabelList } from 'recharts';

const MultilineLabel = ({ x, y, value, ...props }) => {
  console.log("props", x);
  // Split the value into multiple lines based on some delimiter
  const lines = value.split('\n');

  return (
    <g {...props} >
      {lines.map((line, index) => (
        <text
          key={index}
          // x={0}
          // y={index * 190} // Adjust spacing between lines as needed
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#666"
        >
          {line}
        </text>
      ))}
    </g>
  );
};

export default MultilineLabel;
