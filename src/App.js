import React, { useState } from 'react';

export default function App() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeTemplate, setMemeTemplate] = useState('');

  return (
    <div>
      <h1
        style={{
          fontFamily: 'Monospace',
          fontStretch: 'ultra-expanded',
          fontSize: '2rem',
          color: '#444444',
          marginLeft: '10px',
          marginBottom: '10px',
          textTransform: 'uppercase',
        }}
      >
        Meme Generator
      </h1>
      <br />
      <br />

      <form
        style={{
          fontFamily: 'Monospace',
          fontStretch: 'ultra-expanded',
          fontSize: '1rem',
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
          type="text"
          id="toptext"
          name="toptext"
          value={topText}
          onChange={(event) => setTopText(event.currentTarget.value)}
        />
        <br />
        <br />
        <label htmlFor="bottomtext">
          Bottom text:
          <br />
        </label>
        <input
          type="text"
          id="bottomtext"
          name="bottomtext"
          value={bottomText}
          onChange={(event) => setBottomText(event.currentTarget.value)}
        />
        <br />
        <br />
        <label htmlFor="memetemplate">
          Meme template:
          <br />
        </label>
        <input
          type="text"
          id="memetemplate"
          name="memetemplate"
          value={memeTemplate}
          onChange={(event) => setMemeTemplate(event.currentTarget.value)}
        />
        <br />
        <br />
        {/*  <input
          type="imgage"
          src="https://api.memegen.link/images/buzz/memes/memes_everywhere.gif?token=wxgjeu3jll4dt9q6fihy&width=800&frames=50"
          alt="Submit"
        >
          Image
        </input> */}
      </form>
      <br />
      <button
        style={{
          fontFamily: 'Monospace',
          fontStretch: 'ultra-expanded',
          fontSize: '1rem',
          fontWeight: 'lighter',
          backgroundColor: '#c7bfc2',
          marginLeft: '10px',
          marginBottom: '10px',
          textTransform: 'uppercase',
        }}
        type="button"
      >
        Download
      </button>
    </div>
  );
}
