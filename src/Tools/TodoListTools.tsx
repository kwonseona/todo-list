import css from './TodoListTools.module.css'
import { MdDelete } from 'react-icons/md'
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5'
import { CgRadioCheck } from 'react-icons/cg'
import { useTodoDispatch, useTodoState } from '../Todo/TodoProvider';

const TodoListTools = () => {
  const todoDispatch = useTodoDispatch();
  const todoState = useTodoState();

  const handleToggleAllClick = () => {
    todoDispatch({
      type: 'checkAll'
    })
  }

  const handleRemoveAllClick = () => {
    todoDispatch({
      type: 'removeAll'
    })
  }

  const isAllChecked = () => {
    return todoState.todos.every(todo => todo.isChecked)
  };

  return (
    <footer className={css.container}>
      <button className={css.button} onClick={handleToggleAllClick}>
        {
          isAllChecked() ? (
            <>
              <CgRadioCheck className={css.checkAllIcon} />
              <span>전체해제</span>
            </>
          ) : (
            <>
              <IoCheckmarkDoneCircleOutline className={css.checkAllIcon} />
              <span>전체완료</span>
            </>
          )
        }
      </button>
      <button className={[css.button, css.removeAllButton].join(' ')} onClick={handleRemoveAllClick}>
        <MdDelete className={css.checkAllIcon} />
        <span>전체삭제</span>
      </button>
    </footer>
  )
}

export default TodoListTools