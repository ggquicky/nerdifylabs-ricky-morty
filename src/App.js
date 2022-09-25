import { useState } from "react";
import InformationCard from "./components/infomationcard/InformationCard";
import NavBar from "./components/navbar/NavBar";

function App() {
  const [page, setPage] = useState(1);
  return (
    <div>
      <NavBar page={page} setPage={setPage} />
      <InformationCard page={page} />
    </div>
  );
}

export default App;
