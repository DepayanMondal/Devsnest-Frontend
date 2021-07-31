import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Meme from "./components/meme.jsx";

import TemplateCard from "./components/template.jsx";

const AppContainer = styled.div`
  height: 100vh;
  position: relative;
`;

function App() {
  const [templates, setTemplates] = useState([]);
  const [meme, setMeme] = useState(null);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setTemplates(data.data.memes));
  }, []);
  return (
    <AppContainer>
      <h2 style={{ textAlign: "center" }}>Meme Generator</h2>
      {meme !== null ? (
        <Meme data={meme} setMeme={setMeme} />
      ) : (
        templates.map((template) => {
          return (
            <TemplateCard
              templateData={template}
              key={template.id}
              setMeme={setMeme}
            />
          );
        })
      )}
    </AppContainer>
  );
}

export default App;
