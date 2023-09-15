import { useState } from 'react';
import BottomText from './Components/BottomText.js';
import DownloadButton from './Components/DownloadButton.js';
import GenerateButton from './Components/GenerateButton.js';
import Header from './Components/Header.js';
import MemeTemplate from './Components/MemeTemplate.js';
import TopText from './Components/TopText.js';

export default function App() {
  const [bottomText, setBottomText] = useState('');
  const [topText, setTopText] = useState('');
  const [memeTemplate, setMemeTemplate] = useState('');

  return (
    <>
      <Header />
      <br />
      <br />
      <TopText topText={topText} setTopText={setTopText} />
      <br />
      <BottomText bottomText={bottomText} setBottomText={setBottomText} />
      <br />
      <MemeTemplate
        memeTemplate={memeTemplate}
        setMemeTemplate={setMemeTemplate}
      />
      <br />
      <GenerateButton />
      <DownloadButton />
      <br />
      <img
        src={`https://api.memegen.link/images/both/${topText}/${bottomText}.png?height=450&width=800&token=6alj86spiq9iyevbknm3`}
        alt="sassy little girl"
        width="500px"
        data-test-id="meme-image"
      />
    </>
  );
}
