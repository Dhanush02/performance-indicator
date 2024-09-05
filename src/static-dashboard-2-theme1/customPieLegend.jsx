import React from 'react';

const customPieLegend = (props) => {
  const { payload } = props;

  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {payload.map((entry, index) => (
        <li key={`item-${index}`} style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              width: '12px',
              height: '12px',
              backgroundColor: entry.color,
              borderRadius: '50%',
              marginRight: '8px',
            }}
          />
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div
                style={{
                  width: '0',
                  height: '0',
                  borderLeft: '6px solid transparent',
                  borderRight: '6px solid transparent',
                  borderTop: `6px solid ${entry.color}`,
                  marginRight: '8px',
                }}
              />
              <span>{entry.payload.month}</span>
            </div>
            <div style={{ paddingLeft: '16px', color: '#888' }}>
              <span>{entry.payload.desktop}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default customPieLegend;
