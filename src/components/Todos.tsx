import Todo, { TodoType } from '@components/Todo';

const Todos: React.FC<{
  todos: TodoType[];
  onClickDeleteTodo: (todoId: number) => void;
}> = ({ todos, onClickDeleteTodo }) => (
  <ul>
    {todos.map((todo) => (
      <Todo key={todo.id} todo={todo} onClickDeleteTodo={onClickDeleteTodo} />
    ))}
  </ul>
);

export default Todos;
