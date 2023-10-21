import React from "react";
import { connect } from "react-redux";
import Task from "./Task";

const ListTask = ({ tasks }) =&gt; {
  return (
    <div>
      {tasks.map((task) =&gt; (
        <task key="{task.id}" task="{task}">
      ))}
    </task></div>
  );
};

const mapStateToProps = (state) =&gt; {
  return {
    tasks: state.tasks,
  };
};

export default connect(mapStateToProps)(ListTask);