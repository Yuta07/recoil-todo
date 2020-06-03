import React from "react";
import {
  atom,
  selector,
  useRecoilState,
  RecoilState,
  RecoilValueReadOnly
} from "recoil";
import { todoListState } from "./TodoList";

type Props = {
  id: number;
  text: string;
  isComplete: boolean;
};

export const todoListFilterState: RecoilState<string> = atom({
  key: "todoListFilterState",
  default: "Show All"
});

export const filteredTodoListState: RecoilValueReadOnly<never[]> = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter: string = get(todoListFilterState);
    const list: never[] = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return list.filter((item: Props) => item.isComplete);
      case "Show Uncompleted":
        return list.filter((item: Props) => !item.isComplete);
      default:
        return list;
    }
  }
});

export const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState<string>(todoListFilterState);

  const updateFilter = ({ target: { value } }: any) => {
    setFilter(value);
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  );
};
