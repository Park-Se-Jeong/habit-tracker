import React, { useCallback, useRef, useState } from 'react';


const SimpleHabit = (props) => {
  const [count, setCount] = useState(0);
  const spanRef = useRef();

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  })

  return (
    <li className="habit">
      <span className="habit-name" ref={spanRef}>Reading</span>
      <span className="habit-count">{count}</span>
      <button
        className="habit-button habit-increase" 
        onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>    
      </button>
    </li>
  );
};

export default SimpleHabit;

// createRef는 계속 새로운 레퍼런스를 만들어서 할당할텐데, 이때 useRef를 사용하면 된다.
// 한 번만 만들고, 메모리에 저장해놓고 다시 재사용한다.
// 콜백함수도 메모리에 저장하고 사용할 수 있다. 그냥 쓰게 되면, 함수가 호출될 때마다 계속 새로운 것이 만들어지고,
// 온클릭에는 계속 새로운 것이 할당된다. 만약에, 우리 자식 컴포넌트에, handleIncrement를 props로 보내고 싶어서 
// 보내면.. 함수가 새롭게 계속 만들어지고 할당되기 때문에 변화했다고 인식한다. -> useCallback으로 해결.