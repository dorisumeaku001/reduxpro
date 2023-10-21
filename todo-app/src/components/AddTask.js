import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../redux/actions";

const AddTask = ({ addTask }) =&gt; {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) =&gt; {
    e.preventDefault();
    if (description.trim() !== "") {
      const newTask = {
        id: Date.now(),
        description,
        isDone: false,
      };
      addTask(newTask);
      setDescription("");
    }
  };

  return (
    <form onsubmit="{handleSubmit}">
      <input
        type="text"
        value={description}
        onChange={(e) =&gt; setDescription(e.target.value)}
        placeholder="Enter task description"
      /&gt;
      <button type="submit">Add Task</button>
    
  );
};

export default connect(null, { addTask })(AddTask);