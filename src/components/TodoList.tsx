import * as React from 'react';
import TodoListItem from './TodoListItem';

function TodoList({
  todoList,
  onToggle,
  onRemove,
}: {
  todoList: Todo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}): React.ReactElement {
  return (
    <div className='TodoList'>
      {todoList.map((todo: Todo) => (
        <TodoListItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default TodoList;
