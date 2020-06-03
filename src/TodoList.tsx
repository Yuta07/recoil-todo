import React from "react";
import { atom, useRecoilValue, RecoilState } from "recoil";
import { TodoItem } from "./TodoItem";
import { TodoItemCreator } from "./TodoItemCreator";
import { TodoListFilters } from "./TodoListFilters";
import { TodoListStats } from "./TodoListStats";
import { filteredTodoListState } from "./TodoListFilters";

type Props = {
  id: number;
  text: string;
  isComplete: boolean;
};

export const todoListState: RecoilState<never[]> = atom({
  key: "todoListState",
  default: []
});

export const TodoList = () => {
  const todoList = useRecoilValue<Props[]>(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem: Props) => (
        <TodoItem item={todoItem} key={todoItem.id} />
      ))}
    </>
  );
};
