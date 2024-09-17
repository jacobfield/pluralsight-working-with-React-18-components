import { useState, useEffect } from "react";
export default function ToDoItem({ text, completed, important }) {
  // declaring state variables, and declaring date as local time string
  const [textState, setTextState] = useState(text);
  let date = new Date().toLocaleTimeString();
  const [dateState, setDateState] = useState(date);
  // setting interval hook to update date every one second
  const interval = setInterval(() => {
    setDateState(new Date().toLocaleTimeString());
  }, 1000);
  useEffect(() => {
    setTextState(`${text} ${date}`);
  }, [interval]);
  return (
    <>
      <div className={completed ? "completed" : ""}>
        {important ? "*" : ""}
        {textState}
      </div>
    </>
  );
}
