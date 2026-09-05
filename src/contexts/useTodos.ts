import { useContext } from "react";
import { TodosContext } from "./TodosContext";

export const useTodos = () => useContext(TodosContext);
