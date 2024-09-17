export default function ToDoItem() {
  const text = "Wash Clothes";
  const completed = false;
  return (
    <>
      <div className={completed ? "completed" : ""}>{text}</div>
    </>
  );
}
