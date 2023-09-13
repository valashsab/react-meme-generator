import axios from 'axios';
import { load } from 'cheerio';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

/* import filesystem modules from node library or else functions such as fs.mkdir will not work
fs.mkdir('./memes', function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('New directory successfully created.');
  }
}); */

// get html & extract img links
axios
  .get('https://memegen-link-examples-upleveled.netlify.app/')
  .then(({ data }) => {
    const $ = load(data);
    // console.log(data);

    // extracting attribute href; same for src
    const memes = $('img[src]')[0]; //.toArray();
    console.log(memes);
  })
  .catch((err) => console.error(err));
