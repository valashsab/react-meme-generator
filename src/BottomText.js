import { useState } from 'react';

function BottomText() {
  const [bottomText, setBottomText] = useState('');

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
      <label htmlFor="bottomtext">
        Bottom text:
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
        id="bottomtext"
        name="bottomtext"
        value={bottomText}
        onChange={(event) => setBottomText(event.currentTarget.value)}
      />
    </form>
  );
}

export default function App() {
  return <BottomText />;
}
