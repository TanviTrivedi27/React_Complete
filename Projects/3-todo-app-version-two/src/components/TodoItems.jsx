import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const TodoItems = ({ todoItems }) => {
  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((item) => (
          <TodoItem itemName={item.name} itemDate={item.dueDate} />
        ))}
      </div>
    </>
  );
};
export default TodoItems;
