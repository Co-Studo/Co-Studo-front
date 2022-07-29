import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TodoAddForm from '@components/TodoAddForm';

describe('Todo Add Form', () => {
  let onTodoAdd;
  let input;
  let button;
  let user;

  beforeEach(() => {
    onTodoAdd = jest.fn();
    user = userEvent.setup();
    render(<TodoAddForm onTodoAdd={onTodoAdd} />);
    input = screen.getByPlaceholderText('할일 입력');
    button = screen.getByRole('button');
  });

  it('if doesn`t exist input current, it is not called', async () => {
    await user.click(button);
    expect(onTodoAdd).toHaveBeenCalledTimes(0);
  });

  it('load todo add form', async () => {
    await user.type(input, 'new todo');
    await user.click(button);

    expect(onTodoAdd).toHaveBeenCalledTimes(1);
    expect(onTodoAdd).toHaveBeenCalledWith('new todo');
  });
});
