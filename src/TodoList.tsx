import React from "react";
import { atom, useRecoilValue } from "recoil";
import { TodoItem } from "./TodoItem";
import { TodoItemCreator } from "./TodoItemCreator";
import { TodoListFilters } from "./TodoListFilters";
import { TodoListStats } from "./TodoListStats";
import { filteredTodoListState } from "./TodoListFilters";

export const todoListState = atom({
  key: "todoListState",
  default: []
});

export const TodoList = () => {
  const todoList = useRecoilValue<any>(filteredTodoListState);

  console.log(todoList);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem: any) => (
        <TodoItem item={todoItem} key={todoItem.id} />
      ))}
    </>
  );
};
