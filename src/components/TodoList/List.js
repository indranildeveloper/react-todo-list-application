import React from "react";
import styled from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

const Component = styled.div`
  padding: 1rem;
`;

const Item = styled.div`
  display: flex;
  align-items: center;

  &:not(:last-of-type) {
    margin-bottom: 0.5rem;
  }
`;

const buttonStyles = `
background-color: transparent;
width: 25px;
height: 25px;
border-radius: 0.375rem;
display: flex;
align-items: center;
justify-content: center;
padding: 0;
font-size: 0.9rem;

&:focus {
  outline: 0;
}

&:hover {
  cursor: pointer;
  filter: brightness(105%);
} 


`;

const Complete = styled.button`
  ${buttonStyles};
  border: ${(props) => (props.completed ? 0 : "1px solid #e2e8f0")};
  color: lightseagreen;
`;

const Label = styled.p`
  margin: 0 0 0 0.5rem;
  flex: 1;

  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  color: ${(props) => (props.completed ? "#4a556b" : "#000000")};

  &:hover {
    cursor: pointer;
    color: #4a5568;
  }
`;

const Delete = styled.button`
  ${buttonStyles}
  border: 0;
  color: crimson;
`;

const NoItems = styled.p`
  font-size: 1.5rem;
  color: #4a5568;
  text-align: center;
`;

const List = ({ items, onComplete, onDelete }) => (
  <Component>
    {items.map(({ id, completed, label }) => (
      <Item key={id}>
        <Complete completed={completed} onClick={onComplete(id)}>
          {completed && <FontAwesomeIcon icon={faCheck} />}
        </Complete>
        <Label completed={completed}>{label}</Label>
        <Delete onClick={onDelete(id)}>
          <FontAwesomeIcon icon={faTimes} />
        </Delete>
      </Item>
    ))}
    {items.length === 0 && <NoItems>You have no items😊</NoItems>}
  </Component>
);

export default List;
