import React, { Component } from "react";
import styled from "styled-components/macro";
import { v4 as uuidv4 } from "uuid";

import Filter from "./Filter";
import Input from "./Input";
import List from "./List";

const Wrapper = styled.div`
  background-color: #ffffff;
  border-radius: 0.375rem;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.15);
  min-width: 400px;
`;

class TodoList extends Component {
  state = {
    mode: "all",
    items: [
      {
        id: uuidv4(),
        label: "Demo Todo 1",
        completed: false,
      },
    ],
  };

  handleModeChange = (mode) => () => {
    this.setState({ mode });
  };
  handleComplete = (id) => () => {
    const newItems = [...this.state.items];
    const filteredItem = newItems.filter((item) => item.id === id)[0];
    filteredItem.completed = !filteredItem.completed;
    this.setState({ items: newItems });
    console.log(filteredItem);
  };
  handleDelete = (id) => () => {
    const filteredItem = this.state.items.filter((item) => item.id !== id);
    this.setState({ items: filteredItem });
    console.log(filteredItem);
  };
  handleTaskAdd = (value) => {
    const task = {
      id: uuidv4(),
      label: value,
      completed: false,
    };
    const newItems = [task, ...this.state.items];
    this.setState({ items: newItems });
    console.log(value);
  };

  render() {
    const { mode, items } = this.state;

    let filteredItem = [];

    if (mode === "completed") {
      filteredItem = items.filter((item) => item.completed === true);
    } else if (mode === "active") {
      filteredItem = items.filter((item) => item.completed === false);
    } else {
      filteredItem = items;
    }

    return (
      <Wrapper>
        <Filter mode={mode} onModeChange={this.handleModeChange} />
        <Input onTaskAdd={this.handleTaskAdd} />
        <List
          items={filteredItem}
          onComplete={this.handleComplete}
          onDelete={this.handleDelete}
        />
      </Wrapper>
    );
  }
}

export default TodoList;
