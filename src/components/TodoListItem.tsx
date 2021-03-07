import * as React from 'react';
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline } from 'react-icons/md';

function TodoListItem({
  todo,
  style,
  onToggle,
  onRemove,
}: {
  todo: Todo;
  style: any;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}): React.ReactElement {
  const { id, text, checked } = todo;

  return (
    <div className='TodoListItem-virtualized' style={style}>
      <div className='TodoListItem'>
        <div className={`checkbox ${checked && 'checked'}`} onClick={() => onToggle(id)}>
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className='text'>{text}</div>
        </div>
        <div className='remove' onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  );
}

export default React.memo(
  TodoListItem,
  (prevProps, nextProps) => prevProps.todo === nextProps.todo
);
