import React from "react";
import styled from "styled-components";
import useLocalStorage from "./useLocalStorage";

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [localStoreState, setLocalStoreState] = useLocalStorage(
    "what You ate last", // key
    "Name of the food" // default value
  );
  const [ate, setAte] = React.useState("");

  return (
    <div className="App">
      <AppContainer>
        <div>
          <h3>Store what you ate last in the local storage!</h3>
          <input
            type="text"
            value={ate}
            onChange={(e) => setAte(e.target.value)}
          />
          <button onClick={() => setLocalStoreState(ate)}>Update</button>
          <br />
          Last time you ate{" "}
          <span style={{ fontWeight: 900 }}>{localStoreState}</span>!
        </div>
      </AppContainer>
    </div>
  );
}

export default App;
