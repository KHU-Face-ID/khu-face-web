import React, { Component } from 'react';

class IpForm extends Component {
  state = {
    name: '',
  }
  handleChange = (e) => {
    this.setState({
      ip: e.target.value
    })
  }
  handleSubmit = (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 onCreate 를 통하여 부모에게 전달
    this.props.onCreate(this.state);
    // 상태 초기화
    this.setState({
      name: '',
      phone: ''
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
        <input
          placeholder="전화번호"
          value={this.state.phone}
          onChange={this.handleChange}
          name="phone"
        />
        <button type="submit">등록</button>
      </form>
    );
  }
}

export default IpForm;