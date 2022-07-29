import { TodoType } from '@components/Todo';

class TodosPresenter {
  todos: TodoType[];

  constructor(todos: TodoType[]) {
    this.todos = todos;
  }

  getTodos() {
    return this.todos;
  }

  getNewId() {
    const lastTodo = this.todos.at(-1);
    const newId = lastTodo ? lastTodo.id + 1 : 1;
    return newId;
  }

  delete(todoId, update) {
    this.todos = this.todos.filter((todo) => todo.id !== todoId);
    update(this.todos);
  }

  add(title, update) {
    const id = this.getNewId();
    const newTodo = {
      id,
      title,
    };
    this.todos = [...this.todos, newTodo];
    update(this.todos);
  }
}

export default TodosPresenter;