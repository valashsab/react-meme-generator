import { useState } from 'react';
import BottomText from './Components/BottomText.js';
import MemeTemplate from './Components/MemeTemplate.js';
import TopText from './Components/TopText.js';

export default function App() {
  const [bottomText, setBottomText] = useState('');
  const [topText, setTopText] = useState('');
  const [memeTemplate, setMemeTemplate] = useState('');

  return (
    <div>
      <h1
        style={{
          fontFamily: 'Monospace',
          fontStretch: 'ultra-expanded',
          fontSize: '2rem',
          color: '#6A7142',
          marginLeft: '10px',
          marginBottom: '10px',
          textTransform: 'uppercase',
        }}
      >
        Meme Generator
      </h1>
      <br />
      <br />
      <TopText topText={topText} setTopText={setTopText} />
      <br />
      <BottomText bottomText={bottomText} setBottomText={setBottomText} />
      <br />
      <MemeTemplate
        memetemplate={memeTemplate}
        setMemeTemplate={setMemeTemplate}
      />

      <form
        action="#"
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
        <label htmlFor="memeTemplate">
          Meme Template:
          <br />
        </label>
        <select
          name="dropdown"
          id="dropdown"
          style={{
            border: '1px solid',
            borderRadius: '25px',
            padding: '10px',
            fontFamily: 'Monospace',
            fontStretch: 'ultra-expanded',
            fontSize: '1rem',
          }}
        >
          <option value="buzz">
            <a href="https://api.memegen.link/images/buzz/memes/memes_everywhere.gif">
              Buzz
            </a>
          </option>
          <option value="doge">
            <a href="https://api.memegen.link/images/doge/such_meme/very_skill.png">
              Doge
            </a>
          </option>
          <option value="drunk">
            <a href="https://api.memegen.link/images/drunk/Walk_in_a_straight_line~q/Officer,_I_can_barely_stand.png">
              Drunk
            </a>
          </option>
          <option value="ermg">
            <a href=" https://api.memegen.link/images/ermg/ermahgerd/memes.png">
              Ergm
            </a>
          </option>
        </select>
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
          border: '1px solid',
          borderRadius: '25px',
          padding: '10px',
        }}
        type="button"
      >
        Generate
      </button>
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
          border: '1px solid',
          borderRadius: '25px',
          padding: '10px',
        }}
        type="button"
      >
        Download
      </button>
      <br />
      <img
        src={`https://api.memegen.link/images/both/${topText}/${bottomText}.png?height=450&width=800&token=6alj86spiq9iyevbknm3`}
        alt="sassy little girl"
        width="500px"
        data-test-id="meme-image"
      />
    </div>
  );
}
