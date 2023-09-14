import BottomText from './BottomText.js';
import DownloadButton from './DownloadButton.js';
import Header from './Header.js';
import MemeTemplate from './MemeTemplate.js';
import TopText from './TopText.js';
import WebsiteRender from './WebsiteRender.js';

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
      <DownloadButton />
      <br />
      <WebsiteRender />
    </>
  );
}

/*  <input
          type="imgage"
          src="https://api.memegen.link/images/buzz/memes/memes_everywhere.gif?token=wxgjeu3jll4dt9q6fihy&width=800&frames=50"
          alt="Submit"
        >
          Image
        </input>
      </form>
      <br />
 */
