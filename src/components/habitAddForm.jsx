import React, { memo, PureComponent } from 'react';

const HabitAddForm = memo((props) => {

  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = event => {
    event.preventDefault();
    // 브라우저의 기본 기능 해제
    const name = inputRef.current.value;
    name && props.onAdd(name);
    // inputRef에 있는 현재(current) 값(value)을 받아온다.
    formRef.current.reset();
  }

  return (
      <form className="add-form" onSubmit={onSubmit} ref={formRef}>
        <input ref={inputRef} type="text" className="add-input" placeholder='Habit'/> 
        <button className="add-button">Add</button> 
      </form>
    );  
  });

export default HabitAddForm;
