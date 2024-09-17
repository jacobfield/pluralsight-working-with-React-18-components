import React, { useState } from "react";
import ToDoItem from "./comps/ToDoItem";
function App() {
  return (
    <>
      <p> To do:</p>
      <div>
        <ToDoItem></ToDoItem>
      </div>
    </>
  );
}

export default App;
