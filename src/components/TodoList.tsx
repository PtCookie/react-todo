import * as React from 'react';
import { List } from 'react-virtualized';
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
  const rowRenderer = React.useCallback(
    ({ index, key, style }) => {
      const todo = todoList[index];

      return (
        <TodoListItem todo={todo} key={key} onRemove={onRemove} onToggle={onToggle} style={style} />
      );
    },
    [onRemove, onToggle, todoList]
  );

  return (
    <List
      className='TodoList'
      width={512}
      height={512}
      rowCount={todoList.length}
      rowHeight={56}
      rowRenderer={rowRenderer}
      list={todoList}
      style={{ outline: 'none' }}
    />
  );
}

export default React.memo(TodoList);
