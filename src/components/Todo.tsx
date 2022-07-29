export type TodoType = {
  id: number;
  title: string;
};

const Todo: React.FC<{
  todo: TodoType;
  onClickDeleteTodo: (todoId: number) => void;
}> = ({ todo, onClickDeleteTodo }) => (
  <li>
    <span>{todo.title}</span>{' '}
    <button type="button" onClick={() => onClickDeleteTodo(todo.id)}>
      삭제
    </button>
  </li>
);

export default Todo;
