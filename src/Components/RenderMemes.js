import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MemeTemplates = () => {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.memegen.link/templates/')
      .then((response) => {
        setTemplates(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {/* Render the meme templates */}
      {templates.map((template) => (
        <div key={`meme-${template.id}`}>
          <img src={template.example} alt={template.name} />
        </div>
      ))}
    </div>
  );
};

export default MemeTemplates;
