import React, { Component } from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  border-bottom: 1px solid #e2ebfe;
  display: flex;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 0;

  &:focus {
    outline: 0;
  }
`;

const Button = styled.button`
  border: 0;
  border-left: 1px solid #e2ebfe;
  background-color: #68d391;
  color: #ffffff;
  padding: 1rem 2rem;
  transition: all 0.3s ease-in-out;

  &:focus {
    outline: 0;
  }

  &:hover {
    cursor: pointer;
    background-color: #9ae6b4;
  }
`;

class Input extends Component {
  state = {
    value: "",
    edit: false,
  };

  handleChange = (event) => {
    const inputValue = event.target.value;

    this.setState({ value: inputValue });

    if (inputValue === "") {
      this.setState({ edit: false });
    } else {
      this.setState({ edit: true });
    }
  };

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.handleSubmit();
    }
  };

  handleSubmit = () => {
    this.props.onTaskAdd(this.state.value);
    this.setState({ value: "", edit: false });
  };

  render() {
    return (
      <Wrapper>
        <StyledInput
          type="text"
          placeholder="Add Item"
          value={this.state.value}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        ></StyledInput>
        {this.state.edit && <Button onClick={this.handleSubmit}>Add</Button>}
      </Wrapper>
    );
  }
}

export default Input;
