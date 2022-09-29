import { useState } from "react";
import InformationCard from "./components/infomationcard/InformationCard";
import NavBar from "./components/navbar/NavBar";
import { CharacterContext } from "./components/context/CharacterContext";

function App() {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <CharacterContext.Provider
        value={{
          page,
          setPage,
          characters,
          setCharacters,
          loading,
          setLoading,
        }}
      >
        <NavBar />
        <InformationCard />
      </CharacterContext.Provider>
    </div>
  );
}

export default App;
