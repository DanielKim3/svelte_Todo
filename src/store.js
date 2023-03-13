import { writable, Writable } from "svelte/store";
import { v4 as uuid } from "uuid";
import constant from "./constant";

function setFormTodo() {
  const todoValue = "";

  const { subscribe, update, set } = writable(todoValue);

  const resetForm = () => {
    set("");
  };
  return {
    subscribe,
    set,
    resetForm,
  };
}

function setTodoData() {
  let initTodoData = {
    todoLists: [
      {
        id: uuid(),
        content: "첫 번째 할일",
        done: false,
      },
      {
        id: uuid(),
        content: "두 번째 할일",
        done: false,
      },
      {
        id: uuid(),
        content: "세 번째 할일",
        done: true,
      },
      {
        id: uuid(),
        content: "네 번째 할일",
        done: false,
      },
    ],
    editMode: "",
    viewMode: constant.ALL,
  };

  let todoData = { ...initTodoData };

  const { subscribe, update } = writable(todoData);

  const addTodo = (constant) => {};
  const editTodo = (eidtTodo) => {};
  const removeTodo = (id) => {};
  const checkTodo = (id) => {};
  const changeTodoEditMode = (id) => {};
  const closeTodoEditMode = () => {};
  const changeTodoView = (mode) => {};

  return {
    subscribe,
    addTodo,
    editTodo,
    removeTodo,
    checkTodo,
    changeTodoEditMode,
    closeTodoEditMode,
    changeTodoView,
  };
}

export const todoForm = setFormTodo();
export const todos = setTodoData();
