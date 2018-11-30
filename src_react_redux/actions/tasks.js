export const inputTask = (task) => ({
  type: 'INPUT_TASK',
  payload: {
    task
  }
});

export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: {
    task
  }
});

export const addAndClearTask = (task) => (dispatch) => {
  dispatch(addTask(task));
  dispatch(inputTask(''));
};
