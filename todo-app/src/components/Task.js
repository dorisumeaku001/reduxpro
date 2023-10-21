import React from "react";
import { connect } from "react-redux";
import { toggleTask, deleteTask } from "../redux/actions";

const Task = ({ task, toggleTask, deleteTask }) =&gt; {
  const handleToggle = () =&gt; {
    toggleTask(task.id);
  };

  const handleDelete = () =&gt; {
    deleteTask(task.id);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={handleToggle}
      /&gt;
      <span>{task.description}</span>
      <button onclick="{handleDelete}">Delete</button>
    </input
</div>
  );
};

export default connect(null, { toggleTask, deleteTask })(Task);