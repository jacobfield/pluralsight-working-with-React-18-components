import { useState, useEffect } from "react";
export default function ToDoItem({ text, completed, important }) {
  // declaring state variables, and declaring date as local time string
  const [textState, setTextState] = useState(text);
  let date = new Date().toLocaleTimeString();
  const [dateState, setDateState] = useState(date);
  const [completedState, setCompletedState] = useState(completed);
  // setting interval hook to update date every one second
  const interval = setInterval(() => {
    setDateState(new Date().toLocaleTimeString());
  }, 1000);
  useEffect(() => {
    setTextState(`${text} ${date}`);
  }, [interval]);

  function toggleLine(completedState) {
    if (completedState !== true) {
      setCompletedState(true);
      console.log(completedState);
    }
    if (completedState) {
      setCompletedState(false);
      console.log(completedState);
    }
  }

  return (
    <>
      <div className={completedState ? "completed" : ""}>
        {important ? "*" : ""}
        {textState}
        <br></br>
        <button onClick={() => toggleLine(completedState)}>Finished?</button>
      </div>
    </>
  );
}

// declare state for completed, set true or false.
// set toggle function, which switches completed state
// create button that for users to click, which toggles completed state: onClick={toggle}
// add button to return statement
// ternary operator to add completed class to div if completed is true
// css class to add the strike out
