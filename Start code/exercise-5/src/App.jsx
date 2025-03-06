import React from "react";
import { All_Staff } from "./data";
import Staff from "./components/Staff";

function App() {
  return (
    <>
      <header>
        <h1>This is our Staff.</h1>
      </header>
      <main className="cards-view">
        <div className="cards-grid">
          {All_Staff.map((staff) => (
            <Staff key={staff.id} staff={staff} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;