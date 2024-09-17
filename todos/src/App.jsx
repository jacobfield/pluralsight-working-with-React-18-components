import React, { useState } from "react";
import ToDoItem from "./comps/ToDoItem";
function App() {
  const toDoItem = { text: "Wash clothes", completed: false, important: true };
  return (
    <>
      <p> To do:</p>
      <div>
        <ToDoItem {...toDoItem}></ToDoItem>
      </div>
    </>
  );
}

export default App;
