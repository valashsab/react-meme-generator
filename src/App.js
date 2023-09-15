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
        src={`https://api.memegen.link/images/${memeTemplate}/${topText}/${bottomText}.png?token=wxgjeu3jll4dt9q6fihy&width=800&frames=50`}
        alt="buzz"
        width="400px"
      />
    </>
  );
}
