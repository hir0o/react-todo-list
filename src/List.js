import React from "react";

const ListItem = (props) => {
  return <li>{props.task.title}</li>;
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
          return <ListItem task={task} />;
        })}
      </ul>
    );
  }
}

export default List;
