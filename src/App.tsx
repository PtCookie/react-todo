import * as React from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function App(): React.ReactElement {
  const [todoList, setTodoList] = React.useState<Todo[]>([
    {
      id: 1,
      text: 'About React',
      checked: true,
    },
    {
      id: 2,
      text: 'Styling component',
      checked: true,
    },
    {
      id: 3,
      text: 'Create Todo app',
      checked: false,
    },
  ]);

  const nextId = React.useRef(4);

  const onInsert = React.useCallback(
    (text: string) => {
      const todo: Todo = {
        id: nextId.current,
        text,
        checked: false,
      };

      setTodoList(todoList.concat(todo));
      nextId.current++;
    },
    [todoList]
  );

  const onToggle = React.useCallback(
    (id: number) => {
      setTodoList(
        todoList.map((todo: Todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo))
      );
    },
    [todoList]
  );

  const onRemove = React.useCallback(
    (id: number) => {
      setTodoList(todoList.filter((todo: Todo) => todo.id !== id));
    },
    [todoList]
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todoList={todoList} onToggle={onToggle} onRemove={onRemove} />
    </TodoTemplate>
  );
}

export default App;
