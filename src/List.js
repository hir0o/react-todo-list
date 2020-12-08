import React from "react";

const ListItem = () => {
  return <li>タスク</li>;
};

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          title: "タイトルです。",
          isDone: false,
        },
        {
          title: "タイトルです。",
          isDone: false,
        },
        {
          title: "タイトルです。",
          isDone: false,
        },
        {
          title: "タイトルです。",
          isDone: false,
        },
      ],
    };
  }

  render() {
    return (
      <ul>
        {this.state.tasks.map((task) => {
          return <ListItem>{task.name}</ListItem>;
        })}
      </ul>
    );
  }
}

export default List;
