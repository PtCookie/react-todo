import * as React from 'react';
import { MdAdd } from 'react-icons/md';

function TodoInsert({ onInsert }: { onInsert: (text: string) => void }): React.ReactElement {
  const [value, setValue] = React.useState<string>('');

  const onChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = React.useCallback(
    (e: React.FormEvent) => {
      onInsert(value);
      setValue('');
      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <form className='TodoInsert' onSubmit={onSubmit}>
      <input type='text' placeholder='Insert Todo' value={value} onChange={onChange} />
      <button type='submit'>
        <MdAdd />
      </button>
    </form>
  );
}

export default TodoInsert;
