// src/redux/actions.js

export const addTask = (task) =&gt; {
    return {
      type: "ADD_TASK",
      payload: task,
    };
  };
  
  export const toggleTask = (taskId) =&gt; {
    return {
      type: "TOGGLE_TASK",
      payload: taskId,
    };
  };
  
  export const deleteTask = (taskId) =&gt; {
    return {
      type: "DELETE_TASK",
      payload: taskId,
    };
  };