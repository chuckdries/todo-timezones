import { createAppSlice } from "../../app/createAppSlice";

export interface Card {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  dueDate: string | null;
}

export interface TodoListSliceState {
  todos: Card[];
}

const initialState: TodoListSliceState = {
  todos: [],
}

export const todoListSlice = createAppSlice({
  name: "todoList",
  initialState,
  reducers: create => ({
    addTodo: create.reducer<Omit<Card, "id">>((state, action) => {
      state.todos.push({
        id: crypto.randomUUID(),
        ...action.payload,
      });
    }),
  }),
})

export const { addTodo } = todoListSlice.actions;
