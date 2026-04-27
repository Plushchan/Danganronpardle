import React, { useEffect, useState } from "react";
import Table from "./components/Table";
import TextInput from "./components/TextInput";
import findCharacterByName from "./utils/findCharacterByName";
import correctCharacterGenerate from "./utils/correctCharacterGenerate";
import "./assets/tableColor.css";
import Panel from "./components/Panel";

function App() {
  const [characterName, setCharacterName] = useState("");
  const [rows, setRows] = useState([]);
  const [correctCharacter, setCorrectCharacter] = useState();

  useEffect(() => {
    const correctCharacterGen = correctCharacterGenerate();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCorrectCharacter(correctCharacterGen);

    console.log(correctCharacterGen);
  }, []);

  function addRow(e) {
    e.preventDefault();

    const character = findCharacterByName(characterName);

    setRows((prev) => [...prev, character]);
  }

  return (
    <div>
      <Panel>
        <form onSubmit={addRow}>
          <TextInput
            value={characterName}
            handler={(e) => {
              setCharacterName(e.target.value);
            }}
            placeholder={"Character Name"}
          />
        </form>

        <Table rows={rows} correctCharacter={correctCharacter} />
      </Panel>
    </div>
  );
}

export default App;
