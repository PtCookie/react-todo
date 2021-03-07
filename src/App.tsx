import * as React from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function createInitialList(): Todo[] {
  const array: Todo[] = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `Todo ${i}`,
      checked: false,
    });
  }

  return array;
}

function todoReducer(todoList: Todo[], action: any) {
  switch (action.type) {
    case 'INSERT':
      return todoList.concat(action.todo);
    case 'TOGGLE':
      return todoList.map((todo: Todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );
    case 'REMOVE':
      return todoList.filter((todo: Todo) => todo.id !== action.id);
    default:
      return todoList;
  }
}

function App(): React.ReactElement {
  const [todoList, dispatch] = React.useReducer(todoReducer, undefined, createInitialList);

  const nextId = React.useRef(4);

  const onInsert = React.useCallback((text: string) => {
    const todo: Todo = {
      id: nextId.current,
      text,
      checked: false,
    };

    dispatch({ type: 'INSERT', todo });
    nextId.current++;
  }, []);

  const onToggle = React.useCallback((id: number) => {
    dispatch({ type: 'TOGGLE', id });
  }, []);

  const onRemove = React.useCallback((id: number) => {
    dispatch({ type: 'REMOVE', id });
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todoList={todoList} onToggle={onToggle} onRemove={onRemove} />
    </TodoTemplate>
  );
}

export default App;
