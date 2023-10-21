// src/redux/reducers.js

const initialState = {
    tasks: [],
  };
  
  const reducer = (state = initialState, action) =&gt; {
    switch (action.type) {
      case "ADD_TASK":
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };
      case "TOGGLE_TASK":
        return {
          ...state,
          tasks: state.tasks.map((task) =&gt;
            task.id === action.payload
              ? { ...task, isDone: !task.isDone }
              : task
          ),
        };
      case "DELETE_TASK":
        return {
          ...state,
          tasks: state.tasks.filter((task) =&gt; task.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  