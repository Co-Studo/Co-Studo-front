import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { TodoType } from '@components/Todo';
import TodoAddForm from '@components/TodoAddForm';
import Todos from '@components/Todos';
import TodosPresenter from '@presenters/todosPresenter';
import GlobalStyle from '@theme/GlobalStyle';
import { darkTheme, lightTheme } from '@theme/theme';

const todosPresenter = new TodosPresenter([{ id: 1, title: 'ㅎㅇ' }]);

const App: React.FC = () => {
  const isDarkMode =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [todos, setTodos] = useState<TodoType[]>(todosPresenter.getTodos());

  const handleClickDeleteTodo = (todoId) => {
    todosPresenter.delete(todoId, setTodos);
  };

  const handleClickAddTodo = (title) => {
    todosPresenter.add(title, setTodos);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <h1>Hello World</h1>
      <TodoAddForm onTodoAdd={handleClickAddTodo} />
      <Todos todos={todos} onClickDeleteTodo={handleClickDeleteTodo} />
    </ThemeProvider>
  );
};

export default App;
