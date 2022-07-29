import TodosPresenter from '@presenters/todosPresenter';

describe('TodosPresenter', () => {
  const todos = [
    {
      id: 1,
      title: '첫 투두',
    },
  ];
  let todosPresenter;
  let update;
  beforeEach(() => {
    todosPresenter = new TodosPresenter(todos);
    update = jest.fn();
  });

  it('init with todos', () => {
    expect(todosPresenter.getTodos()).toEqual(todos);
  });

  it('get new todo id', () => {
    expect(todosPresenter.getNewId()).toEqual(2);
    todosPresenter.delete(1, update);
    expect(todosPresenter.getNewId()).toEqual(1);
  });

  it('add todo', () => {
    const newTodo = {
      id: todosPresenter.getNewId(),
      title: '두번째 투두',
    };
    todosPresenter.add(newTodo.title, update);
    const newTodos = [...todos, newTodo];
    expect(todosPresenter.getTodos()).toEqual(newTodos);
  });

  it('delete todo', () => {
    todosPresenter.delete(1, update);
    expect(todosPresenter.getTodos()).toEqual([]);
  });
});
