import React from "react";
import {
  atom,
  useRecoilState,
  useSetRecoilState,
  RecoilState,
  SetterOrUpdater
} from "recoil";
import { todoListState } from "./TodoList";

const value: RecoilState<string> = atom({
  key: "input",
  default: ""
});

export const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useRecoilState<string>(value);
  const setTodoList: SetterOrUpdater<any> = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList: never[]) => [
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
