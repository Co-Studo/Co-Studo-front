import { useState } from 'react';

import { TodoType } from '@components/Todo';
import TodoAddForm from '@components/TodoAddForm';
import Todos from '@components/Todos';
import TodosPresenter from '@presenters/todosPresenter';

const todosPresenter = new TodosPresenter([{ id: 1, title: 'ㅎㅇ' }]);

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoType[]>(todosPresenter.getTodos());

  const handleClickDeleteTodo = (todoId) => {
    todosPresenter.delete(todoId, setTodos);
  };

  const handleClickAddTodo = (title) => {
    todosPresenter.add(title, setTodos);
  };

  return (
    <>
      <h1>Hello World</h1>
      <TodoAddForm onTodoAdd={handleClickAddTodo} />
      <Todos todos={todos} onClickDeleteTodo={handleClickDeleteTodo} />
    </>
  );
};

export default App;
