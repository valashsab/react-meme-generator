import BottomText from './Components/BottomText.js';
import DownloadButton from './Components/DownloadButton.js';
import GenerateButton from './Components/GenerateButton.js';
import Header from './Components/Header.js';
import MemeTemplate from './Components/MemeTemplate.js';
import MemeTemplates from './Components/RenderMemes.js';
import TopText from './Components/TopText.js';

export default function App() {
  return (
    <>
      <Header />
      <br />
      <br />
      <TopText />
      <br />
      <BottomText />
      <br />
      <MemeTemplate />
      <br />
      <GenerateButton />
      <DownloadButton />
      <br />
      <MemeTemplates />
    </>
  );
}
