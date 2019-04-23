import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const List = props => {
  return (
    <ListGroup>
      {props.list.map(item => (
        <ListGroup.Item key={item.id}>
          <a href={item.hash} rel="noopener noreferrer" target="_blank">
            {item.title}
          </a>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default List;
