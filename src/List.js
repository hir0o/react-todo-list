import { Component } from "react";

const ListItem = () => {
  return <li>タスク</li>;
};

class List extends Component {
  render() {
    return (
      <ul>
        <ListItem />
        <ListItem />
        <ListItem />
      </ul>
    );
  }
}

export default List;
