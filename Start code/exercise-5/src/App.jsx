import React from "react";
import { All_Staff } from "./data";
import Staff from "./components/staff";

function App() {
  return (
    <>
      <header>
        <h1>Our Staff</h1>
        <p>Meet the team</p>
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