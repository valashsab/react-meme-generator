import { useState } from 'react';

function MemeTemplate() {
  const [memeTemplate, setMemeTemplate] = useState('');

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
      <label htmlFor="memetemplate">
        Meme Template:
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
        id="memetemplate"
        name="memetemplate"
        value={memeTemplate}
        onChange={(event) => setMemeTemplate(event.currentTarget.value)}
      />
    </form>
  );
}

export default function App() {
  return <MemeTemplate />;
}
