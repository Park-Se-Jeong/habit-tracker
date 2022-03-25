import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
  handleIncrement = habit => {
    this.props.onIncrement(habit);
  }

  handleDecrement = habit => {
    this.props.onDecrement(habit);
  }

  handleDelete = habit => {
    this.props.onDelete(habit);
  }
  
  handleAdd = name => {
    this.props.onAdd(name);
  }
  render() {
    return (
      <>
      <HabitAddForm onAdd={this.handleAdd}/>
      <ul>
        {
          this.props.habits.map(habit => {
            return (
              <Habit 
              key={habit.id} 
              habit={habit}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete} 
              onAdd={this.handleAdd}
              />
              // key는 반드시 고유한 값으로 사용해야 합니다. 배열의 인덱스는 절대 사용하면 안됩니다.
            )
          })
        }
      </ul>
      <button className="habits-reset" onClick={this.props.onReset}>Reset-all</button>
      </>
      
    );
  }
}

export default Habits;

// 목록인 아이들이 계속 업데이트 되기 때문에, PureComponent를 쓰든 안 쓰든 성능에 상관이 없다..
