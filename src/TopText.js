import { useState } from 'react';

function TopText() {
  const [topText, setTopText] = useState('');

  return (
    <form
      style={{
        fontFamily: 'Monospace',
        fontStretch: 'ultra-expanded',
        fontSize: '1.25rem',
        fontWeight: 'bold',
        color: '#b4aaae',
        marginLeft: '10px',
        marginBottom: '10px',
        textTransform: 'uppercase',
      }}
    >
      <label htmlFor="toptext">
        Top text:
        <br />
      </label>
      <input
        style={{
          border: '1px solid',
          borderRadius: '25px',
          padding: '10px',
          fontFamily: 'Monospace',
          fontStretch: 'ultra-expanded',
          fontSize: '1rem',
        }}
        id="toptext"
        name="toptext"
        value={topText}
        onChange={(event) => setTopText(event.currentTarget.value)}
      />
    </form>
  );
}

export default function App() {
  return <TopText />;
}
