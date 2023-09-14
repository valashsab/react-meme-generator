import axios from 'axios';

function WebsiteRender() {
  return axios
    .get('https://memegen.link/')
    .then((response) => {
      // Handle the response data here
      console.log(response.data);
    })
    .catch((error) => {
      // Handle any errors here
      console.error(error);
    });
}

export default function App() {
  return console.log(WebsiteRender);
}
