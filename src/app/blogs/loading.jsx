import React from 'react';
import "../globals.css";

const loading = () => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const spinnerStyle = {
    border: '8px solid #f3f3f3',    // Light gray background
    borderTop: '8px solid #000',    // Black color for the top border
    borderRadius: '50%',
    width: '128px',                 // Equivalent to h-32 and w-32 in Tailwind
    height: '128px',
    animation: 'spin 1s linear infinite',
  };

  return (
    <div style={containerStyle}>
      <div style={spinnerStyle}></div>
    </div>
  );
};

export default loading;
