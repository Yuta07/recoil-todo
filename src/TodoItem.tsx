import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "./TodoList";

type Props = {
  id: number;
  text: string;
  isComplete: boolean;
};

type ItemProps = {
  item: Props;
};

export const TodoItem = ({ item }: ItemProps) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem: Props) => listItem === item);

  const editItemText = ({ target: { value } }: any) => {
    const newList: any = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList: any = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList: any = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
};

function replaceItemAtIndex(
  arr: Props[],
  index: number,
  newValue: Props
): Props[] {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr: Props[], index: number): Props[] {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
