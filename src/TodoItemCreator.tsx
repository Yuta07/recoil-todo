import React from "react";
import { atom, useRecoilState, useSetRecoilState } from "recoil";
import { todoListState } from "./TodoList";

const value = atom({
  key: "input",
  default: ""
});

export const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useRecoilState<string>(value);
  const setTodoList = useSetRecoilState<any>(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList: any) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false
      }
    ]);
    setInputValue("");
  };

  const onChange = ({ target: { value } }: any) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

let id = 0;
function getId() {
  return id++;
}
