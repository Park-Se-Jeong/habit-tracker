import React, { PureComponent } from 'react';

class Habit extends PureComponent {

  componentDidMount() {
    console.log(`habit: ${this.props.habit.name} mounted`);
  }
  componentWillUnmount() {
    console.log(`habit: ${this.props.habit.name} will unmount`);
  }
  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  
  }
  
  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);

  }
  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  }
  render() {
    const { name, count } = this.props.habit;
    // const { name } = this.props.habit;
    // const { count } = this.props;
    // count를 따로 받아와서 업데이트 사항을 반영하기 위해서..


    return (
      <li className="habit">
      <span className="habit-name">{name}</span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={this.handleIncrement}>
        <i className="fa-solid fa-square-plus"></i>
      </button>
      <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
        <i className="fa-solid fa-square-minus"></i>
      </button>
      <button className="habit-button habit-delete" onClick={this.handleDelete}>
      <i className="fa-solid fa-trash"></i>
      </button>
      </li>
    );
  }
}

export default Habit;
// 클래스는 항상 대문자로 시작해야 되는데, 파일명 소문자로 시작해놔서 .. 그거 바꿔줍시다.

// this.setState({ count: this.state.count + 1});
// state 오브젝트 안에 있는 count를 증가한 뒤, state를 업데이트 해야 함.
// 새로운 오브젝트를 설정. count 변수에 저장.
// 전체적인 state를 변경해줘야 합니다.    