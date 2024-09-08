import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function createNotes(e) {
  return <Note key={e.key} title={e.title} content={e.content} />;
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(createNotes)}

      <Footer />
    </div>
  );
}

export default App;
