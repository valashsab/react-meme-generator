import React, { useEffect, useState } from 'react';

export default function App() {
  return (
    <div>
      <form
      {{style
          font: 'courier new'}}
      >
        <label for="toptext">
          Top text:
          <br />
        </label>
        <input type="text" id="toptext" name="toptext"></input>
        <br />
        <br />
        <label for="bottomtext">
          Bottom text:
          <br />
        </label>
        <input type="text" id="bottomtext" name="bottomtext"></input>
        <br />
        <br />
        <label for="memetemplate">
          Meme template:
          <br />
        </label>
        <input type="text" id="memetemplate" name="memetemplate"></input>
        <br />
        <br />
      </form>
      <br />
      <button type="button">Download</button>
    </div>
  );
}
