import { useState } from 'react';

function GenerateMeme() {
  const [meme, setMeme] = useState('');

  return (
    <form>
      <input
        style={{
          border: '1px solid',
          borderRadius: '25px',
          padding: '10px',
          fontFamily: 'Monospace',
          fontStretch: 'ultra-expanded',
          fontSize: '1rem',
        }}
        type="image"
        id="image"
        src=""
        value={meme}
        onChange={(event) => setMeme(event.currentTarget.value)}
      />
    </form>
  );
}

export default function App() {
  return <GenerateMeme />;
}
