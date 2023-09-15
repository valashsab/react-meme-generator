// Creat URL that generates memes - source API
// variable that saves URL
const api = 'https://api.memegen.link/templates/';
console.log(api);
// variable that saves id - meaning img name
const memeId = api.id;
// variable that saves top text
const apiTopText = api.example.text[0];
// variable that saves bottom text
const apiBottomText = api.example.text[1];
// variable that saves img format .png, .gif
const imgFormat = () => {
  if (api.url.includes('.png')) {
    return '.png';
  } else {
    return '.gif';
  }
};

const MemeGenerateUrl = () => {
  return `${api} + ${memeId} + ${apiTopText} + ${apiBottomText} + ${imgFormat}`;
};

console.log(MemeGenerateUrl);

export default function App() {
  return <MemeGenerateUrl />;
}
